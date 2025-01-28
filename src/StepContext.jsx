import {createContext, useState} from 'react';
import App from './App';
import axios from "axios";

export const multiStepContext = createContext();
const StepContext = () => {
    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState({
        businessName: '',
        address1: '',
        address2: '',
        city: '',
        workingDays:'',
        openingTime: '',
        closingTime: '',
        averageTime: '',
        serviceProviders: '',
    });

    const submitData = async (e) => {
        console.log(userData);


        e.preventDefault();

        try {
            const response = await axios.post(
                "https://v1.nocodeapi.com/hoolixdigital/google_sheets/drNwcoCRbTDQNNVy?tabId=Sheet1",
                JSON.stringify([
                    [userData.businessName, userData.address1, userData.address2, userData.city, userData.openingTime, userData.closingTime, userData.averageTime, userData.serviceProviders, userData.workingDays, new Date().toLocaleString()]
                ]),
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            if (response.status === 200) {
                setUserData('');
                setStep(1);
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <multiStepContext.Provider value={{currentStep, setStep, userData, setUserData, submitData}}>
                <App />
            </multiStepContext.Provider>
        </>
    )
}

export default StepContext;