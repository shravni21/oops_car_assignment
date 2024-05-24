import React from 'react';

export class CarService {
    static URL = 'http://localhost:8080/cars';

    static async getAllcars() {
        try {
            const response = await fetch(`${CarService.URL}`);
            if (!response.ok) {
                throw new Error('Failed to fetch cars');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching cars:', error);
            return [];
        }
    }
    static async postcar(carData) {
        try {
            const response = await fetch(`${CarService.URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(carData),
            });
            if (!response.ok) {
                throw new Error('Failed to post car');
            }
            return await response.json();
        } catch (error) {
            console.error('Error posting car:', error);
            return null;
        }
    }
    static async updatecar(carId, carData) {
        try {
            const response = await fetch(`${CarService.URL}/${carId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(carData),
            });
            if (!response.ok) {
                throw new Error('Failed to edit car');
            }
            return await response.json();
        } catch (error) {
            console.error('Error editing car:', error);
            return null;
        }
    }
    static async deletecar(carId) {
        try {
            const response = await fetch(`${CarService.URL}/${carId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete car');
            }
            return await response.json();
        } catch (error) {
            console.error('Error deleting car:', error);
            return null;
        }
    }
}


