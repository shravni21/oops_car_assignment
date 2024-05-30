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

    /**
     * Creates a new Car entity.
     *
     * @param car The Car object to be created.
     * @return The created Car object.
     */
    @Override
    public Car createCar(Car car) {
        return carRepository.save(car);
    }

    /**
     * Retrieves all Car entities.
     *
     * @return List of all Car objects.
     */
    @Override
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    /**
     * Retrieves a Car entity by its ID.
     *
     * @param id The ID of the Car to retrieve.
     * @return The Car object with the specified ID, or null if not found.
     */
    @Override
    public Car getCar(Long id) {
        Optional<Car> car = carRepository.findById(id);
        return car.orElse(null);
    }

    /**
     * Updates an existing Car entity with the specified ID.
     *
     * @param id  The ID of the Car to update.
     * @param car The updated Car object.
     * @return The updated Car object.
     */
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

    /**
     * Deletes a Car entity by its ID.
     *
     * @param id The ID of the Car to delete.
     */
    @Override
    public void deleteCar(Long id) {
        carRepository.deleteById(id);
    }
}
