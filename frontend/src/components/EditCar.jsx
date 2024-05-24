import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Modal, Paper, TextField, Button, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

const EditCar = ({ onUpdate }) => {
    const [open, setOpen] = useState(false);
    const [carData, setCarData] = useState({
        brand: '',
        model: '',
        year: '',
        engine: {
            model: '',
            horsepower: '',
            fuelType: ''
        },
        tyres: [
            { brand: '', size: '', pressure: '', position: '' },
            { brand: '', size: '', pressure: '', position: '' },
            { brand: '', size: '', pressure: '', position: '' },
            { brand: '', size: '', pressure: '', position: '' }
        ]
    });

    useEffect(() => {
        if (car) {
            setCarData({
                id: car.id,
                brand: car.brand,
                model: car.model,
                year: car.year,
                engine: car.engine,
                tyres: car.tyres
            });
        }
    }, [car]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCarData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEngineChange = (e) => {
        const { name, value } = e.target;
        setCarData(prevData => ({
            ...prevData,
            engine: {
                ...prevData.engine,
                [name]: value
            }
        }));
    };

    const handleTyreChange = (index, e) => {
        const { name, value } = e.target;
        const list = [...carData.tyres];
        list[index][name] = value;
        setCarData(prevData => ({
            ...prevData,
            tyres: list,
        }));
    };

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(carData);
        handleCloseModal();
    };

    return (
        <>
            <IconButton size="medium" color="primary" onClick={handleOpenModal}>
                <EditIcon fontSize="small" />
            </IconButton>
            <Modal open={open}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                    <Paper style={{ width: '80%', maxWidth: '700px', bgcolor: '#fff', boxShadow: 24, p: 4, padding: '2rem', overflowY: 'auto', transition: 'transform 0.3s ease-in-out', scrollbarWidth: 'thin', scrollbarColor: '#fff transparent', position: 'relative' }}>
                        <div style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
                            <Typography variant="h5" gutterBottom>
                                Edit Car
                            </Typography>
                            <IconButton onClick={handleCloseModal} style={{ position: 'absolute', top: '0', right: '0', margin: '8px' }}>
                                <CloseIcon />
                            </IconButton>

                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Brand"
                                    name="brand"
                                    value={carData.brand}
                                    onChange={handleInputChange}
                                    required
                                    margin="normal"
                                    className="m-3"
                                />
                                <TextField
                                    label="Model"
                                    name="model"
                                    value={carData.model}
                                    onChange={handleInputChange}
                                    required
                                    margin="normal"
                                    className="m-3"
                                />
                                <TextField
                                    label="Year"
                                    name="year"
                                    type="number"
                                    value={carData.year}
                                    onChange={handleInputChange}
                                    required
                                    margin="normal"
                                    className="m-3"
                                />
                                <TextField
                                    label="Engine Model"
                                    name="model"
                                    value={carData.engine.model}
                                    onChange={handleEngineChange}
                                    required
                                    margin="normal"
                                    className="m-3"
                                />
                                <TextField
                                    label="Horsepower"
                                    name="horsepower"
                                    type="number"
                                    value={carData.engine.horsepower}
                                    onChange={handleEngineChange}
                                    required
                                    margin="normal"
                                    className="m-3"
                                />
                                <TextField
                                    label="Fuel Type"
                                    name="fuelType"
                                    value={carData.engine.fuelType}
                                    onChange={handleEngineChange}
                                    required
                                    margin="normal"
                                    className="m-3"
                                />
                                <Typography variant="h6" gutterBottom style={{ marginTop: '1rem' }}>
                                    Tyres Details
                                </Typography>
                                {carData.tyres.map((tyre, index) => (
                                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '-1rem' }}>
                                        <TextField
                                            label={`Tyre ${index + 1} Brand`}
                                            name="brand"
                                            value={tyre.brand}
                                            onChange={(e) => handleTyreChange(index, e)}
                                            required
                                            margin="normal"
                                            className="m-3"
                                            size='small'
                                            style={{ marginLeft: '2rem', marginRight: '0.5rem', flex: 1 }}
                                        />
                                        <TextField
                                            label={`Tyre ${index + 1} Size`}
                                            name="size"
                                            type="number"
                                            value={tyre.size}
                                            onChange={(e) => handleTyreChange(index, e)}
                                            required
                                            margin="normal"
                                            className="m-3"
                                            size='small'
                                            style={{ marginLeft: '2rem', marginRight: '0.5rem', flex: 1 }}
                                        />
                                        <TextField
                                            label={`Tyre ${index + 1} Pressure`}
                                            name="pressure"
                                            type="number"
                                            value={tyre.pressure}
                                            onChange={(e) => handleTyreChange(index, e)}
                                            required
                                            margin="normal"
                                            className="m-3"
                                            size='small'
                                            style={{ marginLeft: '2rem', marginRight: '0.5rem', flex: 1 }}
                                        />
                                        <TextField
                                            id={`tyre-position-${index}`}
                                            select
                                            label="Position"
                                            name="position"
                                            size='small'
                                            value={tyre.position}
                                            onChange={(e) => handleTyreChange(index, e)}
                                            style={{ marginLeft: '2rem', marginRight: '0.5rem', flex: 1 }}
                                        >
                                         <MenuItem value="Front Left">Front Left</MenuItem>
                                            <MenuItem value="Front Right">Front Right</MenuItem>
                                            <MenuItem value="Rear Left">Rear Left</MenuItem>
                                            <MenuItem value="Rear Right">Rear Right</MenuItem>
                                        </TextField>
                                    </div>
                                ))}
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
                                        Save Changes
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Paper>
                </div>
            </Modal>
        </>
    );
};

export default EditCar;
