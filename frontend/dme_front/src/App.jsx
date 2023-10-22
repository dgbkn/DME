import './App.css'
import { ChakraProvider, CSSReset} from '@chakra-ui/react';
import Home from './Home';
import NavBar from './components/NavBar';

function App() {

  return (
    <>

   <ChakraProvider>
      <CSSReset />
      <NavBar/>
       <Home/>
    </ChakraProvider>
    </>
  )
}

export default App
