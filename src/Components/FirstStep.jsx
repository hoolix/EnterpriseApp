import {Box, Button, Stack, TextField} from "@mui/material";
import {useContext} from "react";
import {multiStepContext} from "../StepContext.jsx";

function FirstStep() {
    const { setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <Stack spacing={5} sx={{ width: "70vw", margin: '0 auto' }}>
            <TextField
                label="Business Name"
                margin="normal"
                variant="outlined"
                color="secondary"
                name="businessName"
                value={userData.businessName}
                onChange={(e)=>setUserData({...userData, businessName : e.target.value})}
            />
            <TextField
                label="Address Line 1"
                margin="normal"
                variant="outlined"
                color="secondary"
                name="address1"
                value={userData.address1}
                onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
            />
            <TextField
                label="Address Line 2"
                margin="normal"
                variant="outlined"
                color="secondary"
                name="address2"
                value={userData.address2}
                onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
            />
            <TextField
                label="City"
                margin="normal"
                variant="outlined"
                color="secondary"
                name="city"
                value={userData.city}
                onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
                variant="contained"
                onClick={() => setStep(2)}
                sx={{
                    backgroundColor: 'black',  // Set background to black
                    color: 'white',            // Set text color to white
                    textTransform: 'capitalize', // Capitalize button text
                    '&:hover': {
                        backgroundColor: '#333'  // Darken the background on hover (optional)
                    }
                }}
            >
                Next
            </Button>
            </Box>
        </Stack>
    );
}

export default FirstStep;
