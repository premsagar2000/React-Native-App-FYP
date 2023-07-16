import StackNavigation from './config/StackNavigation';
import LoginProvider from './LoginProvider';
export default function App() {
  return (
    <LoginProvider>
      <StackNavigation/>
    </LoginProvider>
  );
}