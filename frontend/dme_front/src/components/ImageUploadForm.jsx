// src/components/ImageUploadForm.js

import  { useState } from 'react';
import { Box, Button, Input, Text, Center } from '@chakra-ui/react';
import axios from 'axios';

const ImageUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setOutput(null); // Clear previous output
    setError(null); // Clear previous error
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.error) {
        setError(response.data.error);
      } else {
        setOutput(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
      setError("An error occurred while processing the image.");
    }
  };

  return (
    <Center>
      <Box p={4} borderWidth="1px" borderRadius="lg" width="400px">
        <Input type="file" accept="image/*" onChange={handleFileChange} />
        <Button onClick={handleUpload} mt={3} colorScheme="teal">
          Upload and Predict
        </Button>
        {error && <Text color="red">{error}</Text>}
        {output && (
          <Box mt={4}>
            <Text>Class: {output.class}</Text>
            <Text>Confidence: {output.confidence}</Text>
          </Box>
        )}
      </Box>
    </Center>
  );
};

export default ImageUploadForm;
