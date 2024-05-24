package com.example.demo.service;

import com.example.demo.entity.Tyre;

import java.util.List;

public interface TyreService {
    Tyre createTyre(Tyre tyre);
    List<Tyre>getAllTyres();
    Tyre getTyre(Long id);
    Tyre updateTyre(Long id, Tyre tyre);
    void deleteTyre(Long id);
}
