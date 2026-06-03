import { View, Text, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useContext } from 'react';
import { Button, TextInputComp, PickerComp } from '../components';
import RNPickerSelect from 'react-native-picker-select';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../../firebaseConfig';
import {
  authService,
  firestoreService,
  validationService,
} from '../services/index';
import { typography, colors, spacing } from '../styles/constants';
import { globalStyles } from '../styles/globalStyles';

function RegistrationScreen({ navigation }) {
  //estados

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [sportCenterId, setSportCenterId] = useState('');

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  //contexto
  const { sportCenters } = useContext(AuthContext);

  //Validaciones
  const validateForm = () => {
    const { isValid, errors } =
      validationService.validateRegistrationForm({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        gender,
        sportCenterId,
      });

    setErrors(errors);
    return isValid;
  };

  //Botón de registro y validación

  const handleRegister = async () => {
    if (!validateForm()) {
      return;
    }
    setLoading(true);

    try {
      const authResult = await authService.register(email, password);

      if (!authResult.success) {
        Alert.alert('Error', authResult.error);
        setLoading(false);
        return;
      }
      const userId = authResult.user.uid;

      const selectedCenter = sportCenters.find(c => c.id === sportCenterId);

      const profileToSave = {
      firstName,
      lastName,
      gender,
      email,
      sportCenterId,
      sportCenterName: selectedCenter ? selectedCenter.name : 'No asignado',
    };

      const firestoreResult = await firestoreService.saveUserProfile(
        userId,
        profileToSave
      );

      if (!firestoreResult.success) {
        Alert.alert('Error', firestoreResult.error);
        setLoading(false);
        return;
      }

      await authService.logout();

      Alert.alert(
        '¡Bienvenido!',
        'Registro completado. Ahora inicia sesión.',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Login');
            },
          },
        ]
      );

      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setFirstName('');
      setLastName('');
      setGender('');
      setSportCenterId('');
      setErrors({});
    } catch (error) {
      Alert.alert('Error', 'Algo salió mal. Intenta de nuevo.');
      console.error('Error en registro:', error);
    } finally {
      setLoading(false);
    }
  };

  //Cancelación
  const handleCancel = () => {
    navigation.navigate('Login');
  };

  // Opciones de género
  const genderOptions = [
    { label: 'Hombre', value: 'hombre' },
    { label: 'Mujer', value: 'mujer' },
    { label: 'Otros', value: 'otros' },
  ];

  // Opciones de centros deportivos (del context)
  const sportCenterOptions = sportCenters.map((center) => ({
    label: center.name,
    value: center.id,
  }));

  if (loading) {
    return (
      <View style={globalStyles.containerMain}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
  return (
    <SafeAreaView style={globalStyles.containerGeneral}>
      <ScrollView>
        <Text style={typography.h2}>Crear Cuenta</Text>
        <View>
          <TextInputComp
            label={'First Name'}
            value={firstName}
            onChangeText={setFirstName}
            placeholder={'Nombre'}
            secureTextEntry={false}
            error={errors.firstName}
          />
          <TextInputComp
            label={'Last Name'}
            value={lastName}
            onChangeText={setLastName}
            placeholder={'Apellido'}
            secureTextEntry={false}
            error={errors.lastName}
          />
          <TextInputComp
            label={'Email'}
            value={email}
            onChangeText={setEmail}
            placeholder={'tucorreo@mail.com'}
            secureTextEntry={false}
            error={errors.email}
          />
          <TextInputComp
            label={'Contraseña'}
            value={password}
            onChangeText={setPassword}
            placeholder={'Contraseña'}
            secureTextEntry={true}
            error={errors.password}
          />
          <TextInputComp
            label={'Confirmar Contraseña'}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder={'Contraseña'}
            secureTextEntry={true}
            error={errors.confirmPassword}
          />
          <PickerComp
            label="Centro Deportivo"
            value={sportCenterId}
            onValueChange={setSportCenterId}
            items={sportCenterOptions}
            placeholder={{
              label: 'Selecciona un centro deportivo',
              value: null,
            }}
            error={errors.sportCenterId}
          />

          <PickerComp
            label="Género"
            value={gender}
            onValueChange={setGender}
            items={genderOptions}
            placeholder={{
              label: 'Selecciona tu género',
              value: null,
            }}
            error={errors.gender}
          />
        </View>
        <View
          style={[
            globalStyles.containerRow,
            { justifyContent: 'flex-end',
             },
          ]}
        >
          <Button
            variant="outLine"
            label={'Cancelar'}
            onPress={handleCancel}
            iconName={'close-outline'}
          />
          <Button
            label={'Registrase'}
            onPress={handleRegister}
            iconName={'create-outline'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RegistrationScreen;
