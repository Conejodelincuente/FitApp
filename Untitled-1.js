/*
import { View, Text } from 'react-native'
import { useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/ButtonComp'

function HomeScreen() {
  const { setIsLogin, setEmail } = useContext(AuthContext);
  const handleLogout = () => {
    setIsLogin(false)

  }
  return (
    <SafeAreaView>
      <View>
        <Text>Home Screen - Copado!yo@gmail.com</Text>
        <Button label={'Salir'} onPress={handleLogout}/>
      </View>
    </SafeAreaView>
  )
}

export default */