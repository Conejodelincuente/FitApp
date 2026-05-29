import firebaseConfig from './firebaseConfig';
import { AuthProvider } from './src/context/AuthContext.js';
import  RootNavigator  from './src/navigation/RootNavigator.js';

export default function App() {
  return (
    <AuthProvider>
      <RootNavigator/>
    </AuthProvider>
  );
}
