package com.example.demo.service;


import com.example.demo.entity.Car;

import java.util.List;

public interface CarService {
    Car createCar(Car car);
    List<Car> getAllCars();

}
