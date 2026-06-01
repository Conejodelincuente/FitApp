import { View, Text, ScrollView } from 'react-native';
import { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';
import { Button, TextInputComp } from '../components';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import {
  typography,
  colors,
  spacing,
} from '../styles/constants';
import { buttonStyles } from '../styles/components/buttonStyles';
import { globalStyles } from '../styles/globalStyles';

function LoginScreen({navigation}) {
  const { setIsLogin, setEmail } = useContext(AuthContext);
  const [email, setEmailLocal] = useState('');
  const [password, setPasswordLocal] = useState('');
  const [errors, setErrors] = useState({});

  const handleLogin = async () => {
    const newErrors = {};
    if (!email.includes('@')) {
      newErrors.email = 'falta "@", Email no valido.';
    }
    if (password.length < 6) {
      newErrors.password =
        'La contraseña debe tener al menos 6 caracteres';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      const newErrors = {};
      switch (error.code) {
        case 'auth/invalid-credential':
          newErrors.email =
            'Credenciales incorrectas (email o contraseña).';
          break;
        case 'auth/user-not-found':
          newErrors.email = 'Este usuario no existe.';
          break;
        default:
          newErrors.email =
            'Ocurrió un error al intentar entrar.';
      }
    }
  };

  const handleGoToRegistration = () => {
  navigation.navigate('Registration');
};

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: spacing.md,
            backgroundColor: colors.backgroundColor,
          }}
        >
          <Text style={typography.h1}>FitApp</Text>
          <Text style={typography.h3}>
            Tus centro fitness en tus manos
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: spacing.md,
            backgroundColor: colors.bgCanvasLight,
          }}
        >
          <TextInputComp
            label={'Email'}
            value={email}
            onChangeText={setEmailLocal}
            iconName={'mail-outline'}
            placeholder={'Tu@email.com'}
            error={errors.email}
          />
          <TextInputComp
            label={'Contraseña'}
            value={password}
            onChangeText={setPasswordLocal}
            iconName={'lock-closed-outline'}
            placeholder={'Contraseña'}
            secureTextEntry={true}
            error={errors.password}
          />
          <View
            style={[
              globalStyles.containerRow,
              { justifyContent: 'space-between' },
            ]}
          >
            <Button
              label={'Registrarse'}
              variant="simple"
              onPress={handleGoToRegistration}
              text="primary"
            />
            <Button
              label={'Entrar'}
              onPress={handleLogin}
              text="alternative"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;
