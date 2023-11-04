import { useState } from 'react';
import { Box, Button, Checkbox, FormControl, FormLabel, Input, Select, Text, Textarea, Center } from '@chakra-ui/react';
import ImageUploadForm from './ImageUploadForm';

const DMEForm = () => {

    const [submitted, setSubmitted] = useState(false);


    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        diabetesType: '',
        duration: '',
        familyHistory: false,
        medications: '',
        visionSymptoms: [],
        otherEyeConditions: '',
        additionalComments: '',
        email: '',
        consent: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check for required fields
        if (!formData.name || !formData.age || !formData.diabetesType || !formData.email) {
            alert('Please fill in all required fields before submitting.');
            return;
        }

        setSubmitted(true);

        // You can handle the form submission here
        console.log(formData);
    };

    return (
        <>

            {!submitted ? (
                <Center>
                    <Box p={4} borderWidth="1px" borderRadius="lg" width="400px">
                        <form onSubmit={handleSubmit}>
                            <FormControl>
                                <FormLabel>Name (Optional):</FormLabel>
                                <Input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Age:</FormLabel>
                                <Input type="number" name="age" value={formData.age} onChange={handleInputChange} />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Gender:</FormLabel>
                                <Checkbox name="gender" value="Male" isChecked={formData.gender === 'Male'} onChange={handleInputChange}>
                                    Male
                                </Checkbox>
                                <Checkbox name="gender" value="Female" isChecked={formData.gender === 'Female'} onChange={handleInputChange}>
                                    Female
                                </Checkbox>
                                <Checkbox name="gender" value="Other" isChecked={formData.gender === 'Other'} onChange={handleInputChange}>
                                    Other
                                </Checkbox>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Diabetes Type:</FormLabel>
                                <Select name="diabetesType" value={formData.diabetesType} onChange={handleInputChange}>
                                    <option value="">Select</option>
                                    <option value="Type 1">Type 1</option>
                                    <option value="Type 2">Type 2</option>
                                </Select>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Duration of Diabetes (in years):</FormLabel>
                                <Input type="number" name="duration" value={formData.duration} onChange={handleInputChange} />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Family History of DME:</FormLabel>
                                <Checkbox name="familyHistory" isChecked={formData.familyHistory} onChange={handleInputChange}>
                                    Yes
                                </Checkbox>
                                <Checkbox name="familyHistory" isChecked={!formData.familyHistory} onChange={handleInputChange}>
                                    No
                                </Checkbox>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Current Medications (if any):</FormLabel>
                                <Input type="text" name="medications" value={formData.medications} onChange={handleInputChange} />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Vision Symptoms (if any):</FormLabel>
                                <Checkbox name="visionSymptoms" value="Blurred Vision" isChecked={formData.visionSymptoms.includes('Blurred Vision')} onChange={handleInputChange}>
                                    Blurred Vision
                                </Checkbox>
                                <Checkbox name="visionSymptoms" value="Difficulty Reading" isChecked={formData.visionSymptoms.includes('Difficulty Reading')} onChange={handleInputChange}>
                                    Difficulty Reading
                                </Checkbox>
                                <Checkbox name="visionSymptoms" value="Changes in Peripheral Vision" isChecked={formData.visionSymptoms.includes('Changes in Peripheral Vision')} onChange={handleInputChange}>
                                    Changes in Peripheral Vision
                                </Checkbox>
                                <Checkbox name="visionSymptoms" value="Other" isChecked={formData.visionSymptoms.includes('Other')} onChange={handleInputChange}>
                                    Other (please specify below)
                                </Checkbox>
                            </FormControl>

                            {formData.visionSymptoms.includes('Other') && (
                                <FormControl>
                                    <FormLabel>Specify Other Vision Symptoms:</FormLabel>
                                    <Textarea name="visionSymptomsOther" value={formData.visionSymptomsOther} onChange={handleInputChange} />
                                </FormControl>
                            )}

                            <FormControl>
                                <FormLabel>Other Eye Conditions (if any):</FormLabel>
                                <Textarea name="otherEyeConditions" value={formData.otherEyeConditions} onChange={handleInputChange} />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Additional Comments or Information (Optional):</FormLabel>
                                <Textarea name="additionalComments" value={formData.additionalComments} onChange={handleInputChange} />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Email Address (Optional):</FormLabel>
                                <Input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                            </FormControl>

                            <FormControl>
                                <Checkbox name="consent" isChecked={formData.consent} onChange={handleInputChange}>
                                    I consent to the use of my data for research and analysis. I have read and agree to the Privacy Policy.
                                </Checkbox>
                            </FormControl>

                            <Button type="submit" mt={3} colorScheme="teal">
                                Submit
                            </Button>
                        </form>
                    </Box>
                </Center>

            ) : (
                <ImageUploadForm />
            )}
        </>
    );
};

export default DMEForm;
