import './App.css';
import {Card, CardContent, Stack, Stepper, StepLabel, Step, Typography} from "@mui/material";
import {useContext} from "react";

import FirstStep from "./Components/FirstStep";
import ThirdStep from "./Components/ThirdStep.jsx";
import SecondStep from "./Components/SecondStep.jsx";
import {multiStepContext} from "./StepContext.jsx";
import ApartmentIcon from "@mui/icons-material/Apartment";


function App() {
    const {currentStep} = useContext(multiStepContext);


    function showStep(step){
        switch (step){
            case 1:
                return <FirstStep />
            case 2:
                return <SecondStep />
            case 3:
                return <ThirdStep />
        }
    }

    return (
        <div className="App">
            <Stack>
                <Card style={{ maxWidth: "80vw", padding: "0px 5px 30px 5px", margin: "0 auto" }}>
                    <CardContent>
                        <Stack direction="row" sx={{paddingBottom: 4}} alignItems="center" spacing={1}>
                            <ApartmentIcon sx={{ fontSize: 35 }} color="black" /> {/* Icon */}
                            <Typography variant="h4" fontWeight="bold" color="black">
                                Enterprise Registration
                            </Typography>
                        </Stack>
                            <Stepper style={{width: '18%', margin: '0 auto', paddingBottom: 20}} activeStep={currentStep - 1} orientation="horizontal">
                                <Step>
                                    <StepLabel></StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel></StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel></StepLabel>
                                </Step>
                            </Stepper>
                            {showStep(currentStep)}
                    </CardContent>
                </Card>
            </Stack>
        </div>
    );
}

export default App;
