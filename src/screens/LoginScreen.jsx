import { View, Text, ScrollView } from 'react-native';
import { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';
import { Button, TextInputComp } from '../components';
import {
  typography,
  colors,
  spacing,
} from '../styles/constants';
import { buttonStyles } from '../styles/components/buttonStyles';

function LoginScreen() {
  const { setIsLogin, setEmail } = useContext(AuthContext);
  const [email, setEmailLocal] = useState('');
  const [password, setPasswordLocal] = useState('');
  const [errors, setErrors] = useState({});

  const handleLogin = () => {
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
    setEmail(email);
    setIsLogin(true);
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
          <Text
            style={typography.caption}
            onPress={() => {}}
          >
            ¿Olvidste tu contraseña?
          </Text>
          <Button
            label={'Entrar'}
            onPress={handleLogin}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;
