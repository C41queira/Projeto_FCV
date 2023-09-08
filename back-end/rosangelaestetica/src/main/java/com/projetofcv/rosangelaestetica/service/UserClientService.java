package com.projetofcv.rosangelaestetica.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projetofcv.rosangelaestetica.entity.Order;
import com.projetofcv.rosangelaestetica.entity.UserAdmin;
import com.projetofcv.rosangelaestetica.entity.UserClient;
import com.projetofcv.rosangelaestetica.entity.Work;
import com.projetofcv.rosangelaestetica.entity.enums.OrderStatus;
import com.projetofcv.rosangelaestetica.repository.OrderRepository;

@Service
public class UserClientService {

    @Autowired 
    private OrderRepository orderRepository; 
    
}
