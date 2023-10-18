import './App.css'
import { ChakraProvider, CSSReset, Box, Container, Heading } from '@chakra-ui/react';
import ImageUploadForm from './components/ImageUploadForm';

function App() {

  return (
    <>
   <ChakraProvider>
      <CSSReset />
      <Container>
        <Box p={5} borderWidth="1px" borderRadius="lg">
          <Heading as="h1" size="xl" textAlign="center">
            DME - Image Classifier
          </Heading>
          <ImageUploadForm />
        </Box>
      </Container>
    </ChakraProvider>
    </>
  )
}

export default App
