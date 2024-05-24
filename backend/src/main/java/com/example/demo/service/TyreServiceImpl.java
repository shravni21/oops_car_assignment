package com.example.demo.service;

import com.example.demo.entity.Tyre;
import com.example.demo.repository.TyreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TyreServiceImpl implements TyreService{
    @Autowired
    private TyreRepository tyreRepository;

    @Override
    public Tyre createTyre(Tyre tyre) {
        return tyreRepository.save(tyre);
    }

    @Override
    public List<Tyre> getAllTyres() {
        return tyreRepository.findAll();
    }

    @Override
    public Tyre getTyre(Long id) {
        Optional<Tyre>tyre= tyreRepository.findById(id);
        return tyre.orElse(null);
    }

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

    @Override
    public void deleteTyre(Long id) {
        tyreRepository.deleteById(id);
    }
}
