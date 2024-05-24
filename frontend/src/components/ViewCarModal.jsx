import React from 'react';
import { Modal, Typography, IconButton, Paper, Table, TableBody, TableCell, TableRow, TableContainer, TableHead } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CarViewModal = ({ selectedCar, openModal, onCloseModal }) => {
    return (
        <Modal open={openModal} onClose={onCloseModal}>
            <Paper style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '30px', maxWidth: '80vw' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <Typography variant="h5" gutterBottom style={{ flex: 1 }}>
                        View Car Details
                        <IconButton onClick={onCloseModal} style={{ marginLeft: 'auto' }}>
                            <CloseIcon />
                        </IconButton>
                    </Typography>
                </div>
                {selectedCar && (
                    <div className="panel-body" style={{ padding: '4px' }}>
                        <TableContainer>
                            <Table aria-label="simple table">
                                <TableBody>
                                    <TableRow>
                                        <TableCell style={{ color: 'grey' }}>Engine Model:</TableCell>
                                        <TableCell>{selectedCar.engine.model}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={{ color: 'grey' }}>Horsepower:</TableCell>
                                        <TableCell>{selectedCar.engine.horsepower}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={{ color: 'grey' }}>Fuel Type:</TableCell>
                                        <TableCell>{selectedCar.engine.fuelType}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={{ color: 'grey' }}>Tyres:</TableCell>
                                        <TableCell>
                                            <TableContainer>
                                                <Table aria-label="tyre table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Tyre Position</TableCell>
                                                            <TableCell>Tyre Size</TableCell>
                                                            <TableCell>Tyre Pressure</TableCell>
                                                            <TableCell>Tyre Brand</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {selectedCar.tyres.map((tyre, index) => (
                                                            <TableRow key={index}>
                                                                <TableCell>{tyre.position}</TableCell>
                                                                <TableCell>{tyre.size}</TableCell>
                                                                <TableCell>{tyre.pressure}</TableCell>
                                                                <TableCell>{tyre.brand}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                )}
            </Paper>
        </Modal>
    );
};

export default CarViewModal;
