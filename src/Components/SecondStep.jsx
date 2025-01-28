import {Box, Button, Stack, TextField, Checkbox, FormControlLabel, Typography} from "@mui/material";
import { useContext } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { multiStepContext } from "../StepContext.jsx";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs"; // Import dayjs for formatting

function SecondStep() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    const [openingTime, setOpeningTime] = useState(userData.openingTime || null);
    const [closingTime, setClosingTime] = useState(userData.closingTime || null);
    const [workingDays, setWorkingDays] = useState(userData.workingDays ? userData.workingDays : []);

    const handleOpeningTimeChange = (newValue) => {
        const formattedTime = dayjs(newValue).format('h:mm A'); // Format to 12-hour time (e.g., "7:20 AM")
        setOpeningTime(formattedTime);
        setUserData({ ...userData, openingTime: formattedTime });
    };

    const handleClosingTimeChange = (newValue) => {
        const formattedTime = dayjs(newValue).format('h:mm A'); // Format to 12-hour time (e.g., "7:20 AM")
        setClosingTime(formattedTime);
        setUserData({ ...userData, closingTime: formattedTime });
    };

    const handleWorkingDayChange = (day) => {
        const newWorkingDays = [...workingDays];
        if (newWorkingDays.includes(day)) {
            const index = newWorkingDays.indexOf(day);
            newWorkingDays.splice(index, 1);
        } else {
            newWorkingDays.push(day);
        }
        setWorkingDays(newWorkingDays);
        setUserData({ ...userData, workingDays: newWorkingDays.join(', ') });
    };

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <Stack spacing={5} sx={{ width: "70vw", margin: '0 auto' }}>
            <Stack>
                <Typography variant="h6" textAlign='left'>
                    Working Days
                </Typography>
                <Stack direction="row"  sx={{
                    width: '50%',
                    justifyContent: 'space-between'
                }} > {/* Increased spacing */}
                    {/* Chunk the days into two groups of four */}
                    {[daysOfWeek.slice(0, 4), daysOfWeek.slice(4)].map((dayGroup) => (
                        <Stack direction="column" spacing={2} key={dayGroup[0]}>
                            {dayGroup.map((day) => (
                                <FormControlLabel
                                    key={day}
                                    control={
                                        <Checkbox
                                            checked={workingDays.includes(day)}
                                            onChange={() => handleWorkingDayChange(day)}
                                        />
                                    }
                                    label={day}
                                />
                            ))}
                        </Stack>
                    ))}
                </Stack>
            </Stack>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker']}>
                    <TimePicker
                        label="Opening Time"
                        value={openingTime ? dayjs(openingTime, 'h:mm A') : null} // Ensure the value is a dayjs object
                        onChange={handleOpeningTimeChange}
                    />
                </DemoContainer>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker']}>
                    <TimePicker
                        label="Closing Time"
                        value={closingTime ? dayjs(closingTime, 'h:mm A') : null} // Ensure the value is a dayjs object
                        onChange={handleClosingTimeChange}
                        fullWidth
                    />
                </DemoContainer>
            </LocalizationProvider>
            <TextField
                label="Average Service Time (minutes)"
                margin="normal"
                variant="outlined"
                color="secondary"
                name="averageTime"
                value={userData.averageTime}
                onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
            />

            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
                <Button
                    onClick={() => setStep(1)}
                    variant="contained"
                    color="black"
                    sx={{
                        textTransform: 'capitalize',
                    }}
                >
                    Back
                </Button>
                <Button
                    onClick={() => setStep(3)}
                    variant="contained"
                    sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        textTransform: 'capitalize',
                        '&:hover': {
                            backgroundColor: '#333'
                        }
                    }}
                >
                    Next
                </Button>
            </Box>
        </Stack>
    );
}

export default SecondStep;
