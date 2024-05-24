package com.example.demo.service;

import com.example.demo.entity.Car;
import com.example.demo.entity.Tyre;
import com.example.demo.repository.CarRepository;
import com.example.demo.repository.EngineRepository;
import com.example.demo.repository.TyreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CarServiceImpl implements CarService {

    @Autowired
    private CarRepository carRepository;

    @Autowired
    private EngineRepository engineRepository;

    @Autowired
    private TyreRepository tyreRepository;

    @Override
    public Car createCar(Car car) {
        return carRepository.save(car);
    }

    @Override
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }
    @Override
    public Car getCar(Long id) {
        Optional<Car> car = carRepository.findById(id);
        return car.orElse(null);
    }
    @Override
    public Car updateCar(Long id, Car car) {
        Optional<Car> existingCarOptional = carRepository.findById(id);
        if (existingCarOptional.isPresent()) {
            Car existingCar = existingCarOptional.get();
            existingCar.setBrand(car.getBrand());
            existingCar.setModel(car.getModel());
            existingCar.setYear(car.getYear());
            existingCar.setEngine(car.getEngine());

            // Update the tyres list
            List<Tyre> existingTyres = existingCar.getTyres();
            existingTyres.clear();
            for (Tyre tyre : car.getTyres()) {
                existingTyres.add(tyre);
            }
            return carRepository.save(existingCar);
        }
        return null;
    }

    @Override
    public void deleteCar(Long id) {
        carRepository.deleteById(id);
    }
}
