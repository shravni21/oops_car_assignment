import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  CircularProgress,
  Chip,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { CarService } from '../api/CarService';
import DeleteIcon from '@mui/icons-material/Delete';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import TyreModal from './TyreModal';
import CarViewModal from './ViewCarModal';
import CarForm from './CarForm';

const CarTable = () => {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tyres, setTyres] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      setTimeout(async () => {
        const data = await CarService.getAllcars();
        setData(data);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
      setError(error);
    }
  };

  const handleViewTyres = (tyreList) => {
    setTyres(tyreList);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setOpenDetailModal(true);
};
const handleCloseDetailsPanel = () => {
  setOpenDetailModal(false);
};
  const handleDeleteCar = async (carId) => {
    try {
      await CarService.deletecar(carId);
      fetchData();
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };
  const handleAddCar = async (newCar) => {
    try {
        await CarService.postcar(newCar);
        await fetchData();
        setOpenFormModal(false);
    } catch (error) {
        console.error('Error adding requirement:', error);
    }
};

  useEffect(() => {
    if (!dataFetched) {
      fetchData();
      setDataFetched(true);
    }
  }, [dataFetched]);

  return (
    <Paper sx={{ padding: '5px', width: '90%', marginTop: '10px', marginLeft: '10px', marginRight: '10px' }}>
      <CarForm onSubmit={handleAddCar}/>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="requirement table">
          <TableHead sx={{ backgroundColor: '#f5f5f5'}}>
            <TableRow>
              <TableCell>Brand</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Engine Model</TableCell>
              <TableCell>Fuel Type</TableCell>
              <TableCell>HorsePower</TableCell>
              <TableCell>Tyres of Car</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  Error fetching data: {error.message}
                </TableCell>
              </TableRow>
            ) : (
              Data.map((car) => (
                <TableRow key={car.id}>
                  <TableCell>{car.brand}</TableCell>
                  <TableCell>{car.model}</TableCell>
                  <TableCell>{car.year}</TableCell>
                  <TableCell >{car.engine.model}</TableCell>
                  <TableCell >{car.engine.fuelType}</TableCell>
                  <TableCell >{car.engine.horsepower}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => handleViewTyres(car.tyres)}
                    >
                      <DirectionsCarOutlinedIcon />
                    </IconButton>

                  </TableCell>
                  <TableCell align="left">
                    <IconButton
                      size="medium"
                      style={{ color: '#455a64' }}
                      onClick={() => handleViewDetails(car)}
                    >
                      <VisibilityIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                      size="medium"
                      color="error"
                      onClick={() => handleDeleteCar(car.id)}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TyreModal tyres={tyres} openModal={openModal} onCloseModal={handleCloseModal} />
      {/* <CarDetailsPanel  selectedCar= {selectedItem}  onClosePanel= {handleCloseDetailsPanel}/>
       */}
       <CarViewModal selectedCar={selectedItem} openModal={openDetailModal} onCloseModal={handleCloseDetailsPanel}/>

    </Paper>
  );
};

export default CarTable;
