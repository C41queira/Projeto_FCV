package com.projetofcv.rosangelaestetica.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.projetofcv.rosangelaestetica.entity.Agenda;
import com.projetofcv.rosangelaestetica.repository.AgendaRepository;
import com.projetofcv.rosangelaestetica.service.exception.DataBaseException;
import com.projetofcv.rosangelaestetica.service.exception.ResourceNotFoundException;

@Service
public class AgendaService {
    
    @Autowired
    private AgendaRepository agendaRepository; 

    public List<Agenda> findAll(){
        return agendaRepository.findAll(); 
    }

    public Agenda findById(Long id){
        Optional<Agenda> obj = agendaRepository.findById(id); 
        return obj.orElseThrow(() -> new ResourceNotFoundException(id)); 
    }

    public Agenda insert(Agenda obj){
        return agendaRepository.save(obj);
    }

    public void delete(Long id){
        try {
            agendaRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException(id); 
        } catch (DataIntegrityViolationException e){
            throw new DataBaseException(e.getMessage());
        }
        
    }
}
