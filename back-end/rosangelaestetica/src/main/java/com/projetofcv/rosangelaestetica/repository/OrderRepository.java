package com.projetofcv.rosangelaestetica.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetofcv.rosangelaestetica.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{  
}
