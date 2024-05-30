package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
public class Engine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String model;
    private int horsepower;
    private String fuelType;

    // Constructors, getters, setters
    /**
     * Default constructor for Engine.
     */
    public Engine() {

    }
    /**
     * Constructor to initialize Engine with specified attributes.
     *
     * @param model      The model of the Engine.
     * @param horsepower The horsepower of the Engine.
     * @param fuelType   The fuel type of the Engine.
     */
    public Engine(String model, int horsepower, String fuelType) {
        this.model = model;
        this.horsepower = horsepower;
        this.fuelType = fuelType;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getHorsepower() {
        return horsepower;
    }

    public void setHorsepower(int horsepower) {
        this.horsepower = horsepower;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }
}
