import React from 'react';
import Paper from '@mui/material/Paper';
import { Modal, Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const TyreModal = ({ tyres, openModal, onCloseModal }) => {
    const hasTyres = tyres && tyres.length > 0;

    return (
        <Modal open={openModal} onClose={onCloseModal}>
            <Paper style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <Typography variant="h5" gutterBottom style={{ flex: 1 }}>
                        Tyres Information
                        <IconButton onClick={onCloseModal} style={{ marginLeft: 'auto' }}>
                            <CloseIcon />
                        </IconButton>
                    </Typography>
                </div>
                {hasTyres ? (
                    <TableContainer>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Position</TableCell>
                                    <TableCell>Size</TableCell>
                                    <TableCell>Pressure</TableCell>
                                    <TableCell>Brand</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tyres.map((tyre, index) => (
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
                ) : (
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <SentimentDissatisfiedIcon color="primary" style={{ fontSize: 60, marginBottom: '10px' }} />
                        <Typography variant="body2" gutterBottom>
                            Oops! No tyre information available.
                        </Typography>
                    </div>
                )}
            </Paper>
        </Modal>
    );
};

export default TyreModal;
