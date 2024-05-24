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
import DocumentModal from './DocumentModal';
import SyncIcon from '@mui/icons-material/Sync';

const Requirement = () => {
  const [requirementData, setRequirementData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [syncLoading, setSyncLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      setTimeout(async () => {
        const data = await CarService.getAllcars();
        setRequirementData(data);
        setLoading(false);
      }, 1000); 
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
      setError(error);
    }
  };

  const handleViewDocuments = (docList) => {
    setDocuments(docList);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDeleteRequirement = async (carId) => {
    try {
      await CarService.deletecar(carId);
      fetchData(); // Fetch updated data after deletion
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };


  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  return (
    <Paper sx={{ padding: '5px', width: '90%', marginTop: '10px', marginLeft: '10px', marginRight: '10px' }}>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="requirement table">
          <TableHead>
            <TableRow>
              <TableCell>Brand</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Engine Model</TableCell>
              <TableCell>Tyre Brand</TableCell>
              <TableCell>Tyre Size</TableCell>
              <TableCell>Tyre Pressure</TableCell>
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
              requirementData.map((car) => (
                <TableRow key={car.id}>
                  <TableCell>{car.brand}</TableCell>
                  <TableCell>{car.model}</TableCell>
                  <TableCell>{car.year}</TableCell>
                  <TableCell>{car.engine.model}</TableCell>
                  {car.tyres.map((tyre, index) => (
                    <React.Fragment key={`${car.id}-${index}`}>
                      <TableCell>{tyre.brand}</TableCell>
                      <TableCell>{tyre.size}</TableCell>
                      <TableCell>{tyre.pressure}</TableCell>
                    </React.Fragment>
                  ))}
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => handleViewDocuments(car.tyres)}
                    >
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteRequirement(car.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <DocumentModal documents={documents} openModal={openModal} onCloseModal={handleCloseModal} />
      <IconButton onClick={handleSyncAfterCreate} style={{ marginRight: '10px', float: 'right' }}>
        {syncLoading ? (
          <CircularProgress size={24} style={{ color: 'blue' }} />
        ) : (
          <SyncIcon fontSize='small' style={{ color: 'blue' }} />
        )}
      </IconButton>
    </Paper>
  );
};

export default Requirement;
