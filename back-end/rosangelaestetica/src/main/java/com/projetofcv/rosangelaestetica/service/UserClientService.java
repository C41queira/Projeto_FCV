package com.projetofcv.rosangelaestetica.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projetofcv.rosangelaestetica.repository.AgendaRepository;
import com.projetofcv.rosangelaestetica.repository.UserClientRepository;

@Service
public class UserClientService {

    @Autowired
    private UserClientRepository userClientRepository; 

    @Autowired 
    private AgendaRepository agendaRepository; 

    
    
}
