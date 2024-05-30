package com.example.demo.controller;

import com.example.demo.entity.Tyre;
import com.example.demo.service.TyreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * CRUD operations on Tyre entities.
 */
@RestController
@RequestMapping("/tyres")
public class TyreController {

    @Autowired
    private TyreService tyreService;

    /**
     * Creates a new Tyre entity.
     *
     * @param tyre The Tyre object to be created.
     * @return The created Tyre object.
     */
    @PostMapping
    public Tyre createTyre(@RequestBody Tyre tyre) {
        return tyreService.createTyre(tyre);
    }
    /**
     * Retrieves all Tyre entities.
     *
     * @return List of all Tyre objects.
     */
    @GetMapping
    public List<Tyre> getAllTyres() {
        return tyreService.getAllTyres();
    }
    /**
     * Retrieves a Tyre entity by its ID.
     *
     * @param id The ID of the Tyre to retrieve.
     * @return The Tyre object with the specified ID, or null if not found.
     */
    @GetMapping("/{id}")
    public Tyre getTyreById(@PathVariable Long id) {
        return tyreService.getTyre(id);
    }
    /**
     * Updates an existing Tyre entity with the specified ID.
     *
     * @param id   The ID of the Tyre to update.
     * @param tyre The updated Tyre object.
     * @return The updated Tyre object.
     */
    @PutMapping("/{id}")
    public Tyre updateTyre(@PathVariable Long id, @RequestBody Tyre tyre) {
        return tyreService.updateTyre(id, tyre);
    }
    /**
     * Deletes a Tyre entity by its ID.
     *
     * @param id The ID of the Tyre to delete.
     */
    @DeleteMapping("/{id}")
    public void deleteTyre(@PathVariable Long id) {
        tyreService.deleteTyre(id);
    }
}
