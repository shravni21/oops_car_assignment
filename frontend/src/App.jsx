import { useState } from 'react'
import CarTable from './components/CarTable'
import {
  Typography,
} from '@mui/material';

function App() {
  const [count, setCount] = useState(0)

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
