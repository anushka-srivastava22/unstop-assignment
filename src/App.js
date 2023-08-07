import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './components/Home/HomePage';

function App() {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
