import { useState } from 'react';
import { Box, Button, Input, Text, Center, Progress } from '@chakra-ui/react';
import axios from 'axios';
import BarChart from '../BarChart';

const ImageUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setOutput(null);
    setError(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      setLoading(true); // Start loading

      const response = await axios.post('https://unipalmark-dme.hf.space/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setLoading(false); // Stop loading

      if (response.data.error) {
        setError(response.data.error);
      } else {
        setOutput(response.data);
      }
    } catch (error) {
      setLoading(false); // Stop loading
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
        {loading && <Progress size="xs" isIndeterminate colorScheme="teal" mt={3} />}
        {error && <Text color="red">{error}</Text>}
        {output && (
          <Box mt={4}>
            <Text>Class: {output.class}</Text>
            <BarChart confidence={output.confidence} />
          </Box>
        )}
      </Box>
    </Center>
  );
};

export default ImageUploadForm;
