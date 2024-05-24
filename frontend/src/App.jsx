import { useState } from 'react'
import CarTable from './components/CarTable'
import {
  Typography,
} from '@mui/material';

function App() {

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Car Details
      </Typography>
      <CarTable />
    </div>
  )
}

export default App
