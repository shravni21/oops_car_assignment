package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
public class Tyre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String brand;
    private int size;
    private int pressure;
    private String position;

    // Constructors, getters, setters
    /**
     * Default constructor for Tyre.
     */
    public Tyre() {

    }
    /**
     * Constructor to initialize Tyre with specified attributes.
     *
     * @param brand    The brand of the Tyre.
     * @param size     The size of the Tyre.
     * @param pressure The pressure of the Tyre.
     * @param position The position of the Tyre.
     */
    public Tyre(String brand, int size, int pressure, String position) {
        this.brand = brand;
        this.size = size;
        this.pressure = pressure;
        this.position = position;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getPressure() {
        return pressure;
    }

    public void setPressure(int pressure) {
        this.pressure = pressure;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Long getId() {
        return id;
    }
}
