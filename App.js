import firebaseConfig from './firebaseConfig';
import { AuthProvider } from './src/context/AuthContext.js';
import { ModalProvider } from './src/context/ModalContext';
import RootNavigator from './src/navigation/RootNavigator.js';

export default function App() {
  return (
    <AuthProvider>
      <ModalProvider>
        <RootNavigator />
      </ModalProvider>
    </AuthProvider>
  );
}
