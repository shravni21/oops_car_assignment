package com.example.demo.service;

import com.example.demo.entity.Tyre;
import com.example.demo.repository.TyreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Implementation of the TyreService interface providing CRUD operations for Tyre entities.
 */
@Service
public class TyreServiceImpl implements TyreService{

    @Autowired
    private TyreRepository tyreRepository;

    /**
     * Creates a new Tyre entity.
     *
     * @param tyre The Tyre object to be created.
     * @return The created Tyre object.
     */
    @Override
    public Tyre createTyre(Tyre tyre) {
        return tyreRepository.save(tyre);
    }

    /**
     * Retrieves all Tyre entities.
     *
     * @return List of all Tyre objects.
     */
    @Override
    public List<Tyre> getAllTyres() {
        return tyreRepository.findAll();
    }

    /**
     * Retrieves a Tyre entity by its ID.
     *
     * @param id The ID of the Tyre to retrieve.
     * @return The Tyre object with the specified ID, or null if not found.
     */
    @Override
    public Tyre getTyre(Long id) {
        Optional<Tyre>tyre= tyreRepository.findById(id);
        return tyre.orElse(null);
    }

    /**
     * Updates an existing Tyre entity with the specified ID.
     *
     * @param id    The ID of the Tyre to update.
     * @param tyre  The updated Tyre object.
     * @return The updated Tyre object.
     */
    @Override
    public Tyre updateTyre(Long id, Tyre tyre) {
        Optional<Tyre> existingTyre = tyreRepository.findById(id);
        if (existingTyre.isPresent()) {
            Tyre toUpdate = existingTyre.get();
            toUpdate.setBrand(tyre.getBrand() != null ? tyre.getBrand() : toUpdate.getBrand());
            toUpdate.setSize(tyre.getSize() != 0 ? tyre.getSize() : toUpdate.getSize());
            toUpdate.setPressure(tyre.getPressure() != 0 ? tyre.getPressure() : toUpdate.getPressure());
            toUpdate.setPosition(tyre.getPosition() != null ? tyre.getPosition() : toUpdate.getPosition()); // Update only if provided
            return tyreRepository.save(toUpdate);
        }
        return null;
    }

    /**
     * Deletes a Tyre entity by its ID.
     *
     * @param id The ID of the Tyre to delete.
     */
    @Override
    public void deleteTyre(Long id) {
        tyreRepository.deleteById(id);
    }
}
