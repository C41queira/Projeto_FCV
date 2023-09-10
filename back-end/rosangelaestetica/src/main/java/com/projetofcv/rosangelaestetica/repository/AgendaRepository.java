package com.projetofcv.rosangelaestetica.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.projetofcv.rosangelaestetica.entity.Agenda;
import com.projetofcv.rosangelaestetica.entity.Order;

public interface AgendaRepository extends JpaRepository<Agenda, Long>{
    
    @Query("SELECT o FROM Order o WHERE o.agendaOrder = :agenda")
    public List<Order> findOrders(@Param("agenda") Agenda agenda);
}
