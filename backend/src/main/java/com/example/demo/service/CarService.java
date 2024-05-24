package com.example.demo.service;


import com.example.demo.entity.Car;

import java.util.List;

public interface CarService {
    Car createCar(Car car);
    List<Car> getAllCars();
    Car getCar(Long id);
    Car updateCar(Long id, Car car);
    void deleteCar(Long id);

}
