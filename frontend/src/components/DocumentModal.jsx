import React from 'react';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { Modal, Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CloseIcon from '@mui/icons-material/Close';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const DocumentModal = ({ documents, openModal, onCloseModal }) => {
    const hasDocuments = documents.length > 0;

    return (
        <Modal open={openModal} onClose={onCloseModal}>
            <Paper style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <Typography variant="h5" gutterBottom style={{ flex: 1 }}>
                        Attached Documents
                        <IconButton onClick={onCloseModal} style={{ marginLeft: 'auto' }}>
                            <CloseIcon />
                        </IconButton>
                    </Typography>

                </div>
                {hasDocuments ? (
                    <TableContainer>
                        <Table size="small">
                            <TableBody>
                                {documents.map(({ documentType, documentName, documentUrl }, index) => (
                                    <TableRow key={index} style={{ borderBottom: 'none' }}>
                                        <TableCell style={{ borderBottom: 'none' }}>{documentType}</TableCell>
                                        <TableCell style={{ borderBottom: 'none' }}>
                                            <Chip
                                                icon={<InsertDriveFileIcon color="primary" />}
                                                label={documentName}
                                                onClick={() => window.open(documentUrl, '_blank')}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <SentimentDissatisfiedIcon color="primary" style={{ fontSize: 60, marginBottom: '10px' }} />
                        <Typography variant="body2" gutterBottom>
                            Oops! No documents attached.
                        </Typography>
                    </div>
                )}
            </Paper>
        </Modal>
    );
};

export default DocumentModal;
