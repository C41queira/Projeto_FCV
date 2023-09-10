package com.projetofcv.rosangelaestetica.config;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.projetofcv.rosangelaestetica.entity.Agenda;
import com.projetofcv.rosangelaestetica.entity.Order;
import com.projetofcv.rosangelaestetica.entity.UserAdmin;
import com.projetofcv.rosangelaestetica.entity.UserClient;
import com.projetofcv.rosangelaestetica.entity.Work;
import com.projetofcv.rosangelaestetica.entity.enums.CategoryWork;
import com.projetofcv.rosangelaestetica.entity.enums.OrderStatus;
import com.projetofcv.rosangelaestetica.repository.AgendaRepository;
import com.projetofcv.rosangelaestetica.repository.OrderRepository;
import com.projetofcv.rosangelaestetica.repository.UserRepository;
import com.projetofcv.rosangelaestetica.repository.WorkRepository;


@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner{

    @Autowired
    private UserRepository userRepository; 

    @Autowired
    private AgendaRepository agendaRepository; 
    
    @Autowired
    private WorkRepository workRepository;

    @Autowired
    private OrderRepository orderRepository;
    

    @Override
    public void run(String... args) throws Exception {

       
        UserAdmin u1 = new UserAdmin(null, "Rosangela", "7250846477", "s2OF499#$", "Conselheiro antonio de nobrega Nº 225");

        UserClient uc1 = new UserClient(null, "Maria Antonieta", "7256447", "7rt88$%F", "mariaantoni@gmail.com", "1997798854", null, null, null, null);
        UserClient uc2 = new UserClient(null, "Renato Carvalho", "725648", "7rt88$%F", "renatocar@yahoo.com.br", "199788974", null, null, null, null);

        Agenda a1 = new Agenda(null, null, u1); 

        Work w1 = new Work(null, "Massagem de mãos", CategoryWork.MASSAGE, "Massagem para as mãos para alivio dass dores", 120.00, a1); 
        Work w2 = new Work(null, "Limpeza facial", CategoryWork.LIMPEZA, "limpefa para remoção de cravos e espinhas no rosto", 60.00, a1); 
        Work w3 = new Work(null, "Massagem facial", CategoryWork.MASSAGE, "massagem para relaxamento dos musculos da face", 100.00, a1);

        LocalDate date = LocalDate.of(2023, 9, 14);
        LocalTime time = LocalTime.of(10, 30, 0); 

        Order o1 = new Order(null, date, time, OrderStatus.PAID, uc1, a1, w1);
        Order o2 = new Order(null, date, time, OrderStatus.WAITING_PAYMENT, uc2, a1, w3);
        Order o3 = new Order(null, date, time, OrderStatus.CANCELED, uc1, a1, w2);
        
        u1.setAgenda(a1);

        userRepository.saveAll(Arrays.asList(u1, uc1, uc2)); 

        agendaRepository.save(a1); 

        workRepository.saveAll(Arrays.asList(w1, w2, w3));
        
        orderRepository.saveAll(Arrays.asList(o1, o2, o3)); 
        
    }
    
}
