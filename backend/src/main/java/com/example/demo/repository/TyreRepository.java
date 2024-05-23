package com.example.demo.repository;

import com.example.demo.entity.Tyre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TyreRepository extends JpaRepository<Tyre, Long> {
}