package com.projetofcv.rosangelaestetica.entity;

import java.io.Serializable;
import java.util.Date;

import com.projetofcv.rosangelaestetica.entity.enums.OrderStatus;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_order")
public class Order implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id; 

    private Date date; 
    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus;

    @ManyToOne
    @JoinColumn(name = "id_client_order")
    private UserClient userClient; 

    @ManyToOne
    @JoinColumn(name = "id_agenda_order")
    private Agenda agendaOrder; 

    @ManyToOne
    @JoinColumn(name = "work_id", referencedColumnName = "id")
    private Work workOrder; 

    
    public Order() {
    }

    public Order(Long id, Date date, OrderStatus orderStatus, UserClient userClient, Agenda agendaOrder, Work work) {
        this.id = id;
        this.date = date;
        this.orderStatus = orderStatus;
        this.userClient = userClient;
        this.agendaOrder = agendaOrder;
        this.workOrder = work;
    }
    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    public OrderStatus getOrderStatus() {
        return orderStatus;
    }
    public void setOrderStatus(OrderStatus orderStatus) {
        this.orderStatus = orderStatus;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Order other = (Order) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    } 

    
}
