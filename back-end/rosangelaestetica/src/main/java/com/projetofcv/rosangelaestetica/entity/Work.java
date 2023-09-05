package com.projetofcv.rosangelaestetica.entity;

import java.io.Serializable;

import com.projetofcv.rosangelaestetica.entity.enums.CategoryWork;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Work implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; 
    private String name; 
    private CategoryWork categoryWork; 
    private String info;
    private Double value; 
    
    public Work() {
    }

    public Work(Long id, String name, CategoryWork categoryWork, String info, Double value) {
        this.id = id;
        this.name = name;
        this.categoryWork = categoryWork;
        this.info = info;
        this.value = value; 
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public CategoryWork getCategoryWork() {
        return categoryWork;
    }

    public void setCategoryWork(CategoryWork categoryWork) {
        this.categoryWork = categoryWork;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
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
        Work other = (Work) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }
    
}
