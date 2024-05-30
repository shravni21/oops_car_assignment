package com.example.demo.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@DiscriminatorValue("Car")
public class Car extends Vehicle {
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "engine_id")
    private Engine engine;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @JoinColumn(name = "car_id")
    private List<Tyre> tyres;

    /**
     * Default constructor initializing the list of tyres.
     */
    public Car() {
        this.tyres = new ArrayList<>();
    }
    /**
     * Constructor to initialize Car with specified attributes.
     *
     * @param brand  The brand of the Car.
     * @param model  The model of the Car.
     * @param year   The year of manufacture of the Car.
     * @param engine The Engine object associated with the Car.
     * @param tyres  The list of Tyre objects associated with the Car.
     */
    public Car(String brand, String model, int year, Engine engine, List<Tyre> tyres) {
        super.setBrand(brand);
        super.setModel(model);
        super.setYear(year);
        this.engine = engine;
        this.tyres = tyres;
    }

    // Getters and setters
    public Engine getEngine() {
        return engine;
    }

    public void setEngine(Engine engine) {
        this.engine = engine;
    }

    public List<Tyre> getTyres() {
        return tyres;
    }

    public void setTyres(List<Tyre> tyres) {
        this.tyres = tyres;
    }
}
