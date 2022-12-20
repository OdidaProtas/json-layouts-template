import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepContent, TextField, Button } from '@mui/material';


const steps = [
  'Enter phone number',
  'Confirm  payment',
  'Payment status',
];

export default function Mpesa() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <TextField />
              <Button>Continue</Button>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
