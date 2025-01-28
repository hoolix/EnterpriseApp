import { Box, Button, Stack, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { multiStepContext } from "../StepContext.jsx";

function ThirdStep() {
    const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);
    const [serviceProviders, setServiceProviders] = useState(userData.serviceProviders || [""]);

    const handleServiceProviderChange = (index, value) => {
        const updatedProviders = [...serviceProviders];
        updatedProviders[index] = value;

        // Join the array into a comma-separated string
        const providersString = updatedProviders.filter(Boolean).join(', ');

        // Update the states
        setServiceProviders(updatedProviders);
        setUserData({ ...userData, serviceProvider: providersString });
    };

    const addServiceProviderField = () => {
        setServiceProviders([...serviceProviders, ""]);
    };



    return (
        <Stack spacing={3} sx={{ width: "70vw", margin: '0 auto' }}>
            {serviceProviders.map((provider, index) => (
                    <TextField
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
