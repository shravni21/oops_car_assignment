package com.example.demo.controller;

import com.example.demo.entity.Car;
import com.example.demo.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
/**
 * CRUD operations on Car entities.
 */
@RestController
@RequestMapping("/cars")
public class CarController {
    @Autowired
    private CarService carService;

    /**
     * Creates a new Car entity.
     *
     * @param car The Car object to be created.
     * @return The created Car object.
     */
    @PostMapping
    public Car createCar(@RequestBody Car car) {
        return carService.createCar(car);
    }

    /**
     * Updates an existing Car entity with the specified ID.
     *
     * @return The list of cars.
     */
    @GetMapping
    public List<Car> getAllCars() {
        return carService.getAllCars();
    }

    /**
     * Retrieves a Car entity by its ID.
     *
     * @param id The ID of the Car to retrieve.
     * @return The Car object with the specified ID, or null if not found.
     */
    @GetMapping("/{id}")
    public Car getCarById(@PathVariable Long id) {
        return carService.getCar(id);
    }

    /**
     * Updates an existing Car entity with the specified ID.
     *
     * @param id  The ID of the Car to update.
     * @param car The updated Car object.
     * @return The updated Car object.
     */
    @PutMapping("/{id}")
    public Car updateCar(@PathVariable Long id, @RequestBody Car car) {
        return carService.updateCar(id, car);
    }
    /**
     * Deletes a Car entity by its ID.
     *
     * @param id The ID of the Car to delete.
     */
    @DeleteMapping("/{id}")
    public void deleteCar(@PathVariable Long id) {
        carService.deleteCar(id);
    }
}
