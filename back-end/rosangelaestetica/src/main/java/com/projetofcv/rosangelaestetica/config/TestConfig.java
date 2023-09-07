package com.projetofcv.rosangelaestetica.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.projetofcv.rosangelaestetica.entity.Agenda;
import com.projetofcv.rosangelaestetica.entity.User;
import com.projetofcv.rosangelaestetica.entity.UserAdmin;
import com.projetofcv.rosangelaestetica.entity.Work;
import com.projetofcv.rosangelaestetica.entity.enums.CategoryWork;
import com.projetofcv.rosangelaestetica.repository.AgendaRepository;
import com.projetofcv.rosangelaestetica.repository.UserRepository;
import com.projetofcv.rosangelaestetica.repository.WorkRepository;

import jakarta.persistence.EntityManager;


@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner{

    @Autowired
    private UserRepository userRepository; 

    @Autowired
    private AgendaRepository agendaRepository; 
    
    @Autowired
    private WorkRepository workRepository;
    

    @Override
    public void run(String... args) throws Exception {

       
        UserAdmin u1 = new UserAdmin(null, "Rosangela", "7250846477", "s2OF499#$", "Conselheiro antonio de nobrega Nº 225");

        Agenda a1 = new Agenda(null, null, u1); 

        Work w1 = new Work(null, "Massagem de mãos", CategoryWork.MASSAGE, "Massagem para as mãos para alivio dass dores", 120.00, a1); 
        Work w2 = new Work(null, "Limpeza facial", CategoryWork.LIMPEZA, "limpefa para remoção de cravos e espinhas no rosto", 60.00, a1); 
        Work w3 = new Work(null, "Massagem facial", CategoryWork.MASSAGE, "massagem para relaxamento dos musculos da face", 100.00, a1);
        
        u1.setAgenda(a1);

        userRepository.save(u1); 

        agendaRepository.save(a1); 

        workRepository.saveAll(Arrays.asList(w1, w2, w3)); 
        
    }
    
}
