package com.example.demo.repository;


import com.example.demo.entity.Car;
import com.example.demo.entity.Engine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EngineRepository extends JpaRepository<Engine, Long> {
}