package com.example.demo.controller;

import com.example.demo.entity.Tyre;
import com.example.demo.service.TyreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tyres")
public class TyreController {
    @Autowired
    private TyreService tyreService;

    @PostMapping
    public Tyre createTyre(@RequestBody Tyre tyre){
        return tyreService.createTyre(tyre);
    }
    @GetMapping
    public List<Tyre> getAllTyres(){
        return tyreService.getAllTyres();
    }
    @GetMapping("/{id}")
    public Tyre getCarById(@PathVariable Long id) {
        return tyreService.getTyre(id);
    }
    @PutMapping("/{id}")
    public Tyre updateCar(@PathVariable Long id, @RequestBody Tyre tyre) {
        return tyreService.updateTyre(id, tyre);
    }

    @DeleteMapping("/{id}")
    public void deleteCar(@PathVariable Long id) {
        tyreService.deleteTyre(id);
    }
}
