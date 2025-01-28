import { Box, Button, Stack, TextField } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { multiStepContext } from "../StepContext.jsx";

function ThirdStep() {
    const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);

    // Initialize serviceProviders state with existing data from userData or default empty array
    const [serviceProviders, setServiceProviders] = useState(userData.serviceProviders ? userData.serviceProviders.split(', ') : [""]);

    // Handle changes in the service provider fields
    const handleServiceProviderChange = (index, value) => {
        const updatedProviders = [...serviceProviders];
        updatedProviders[index] = value;

        // Join the updated array into a string with commas
        const providersString = updatedProviders.filter(Boolean).join(', ');

        // Update the serviceProviders state
        setServiceProviders(updatedProviders);

        // Update userData with the new list of service providers as a string
        setUserData({ ...userData, serviceProviders: providersString });
    };

    // Add a new empty field for service provider
    const addServiceProviderField = () => {
        setServiceProviders([...serviceProviders, ""]);
    };

    // Update serviceProviders from userData when userData changes
    useEffect(() => {
        if (userData.serviceProviders) {
            setServiceProviders(userData.serviceProviders.split(', '));
        }
    }, [userData]);

    return (
        <Stack spacing={3} sx={{ width: "70vw", margin: '0 auto' }}>
            {serviceProviders.map((provider, index) => (
                <TextField
                    key={`provider-${index}`}  // Use index for stable key
                    label={`Service Provider ${index + 1}`}
                    margin="normal"
                    variant="outlined"
                    color="secondary"
                    value={provider}
                    onChange={(e) => handleServiceProviderChange(index, e.target.value)}
                    fullWidth
                />
            ))}

            <Button
                variant="outlined"
                color="primary"
                onClick={addServiceProviderField}
                sx={{ textTransform: 'capitalize', alignSelf: 'flex-start' }}
            >
                Add Another Provider
            </Button>

            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
                <Button
                    onClick={() => setStep(2)}
                    variant="contained"
                    color="black"
                    sx={{
                        textTransform: 'capitalize',
                    }}
                >
                    Back
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        textTransform: 'capitalize',
                        '&:hover': {
                            backgroundColor: '#333'
                        }
                    }}
                    onClick={submitData}
                >
                    Submit Registration
                </Button>
            </Box>
        </Stack>
    );
}

export default ThirdStep;
