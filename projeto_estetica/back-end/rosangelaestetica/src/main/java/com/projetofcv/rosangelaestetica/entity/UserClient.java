package com.projetofcv.rosangelaestetica.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_usuario_client")
public class UserClient extends User{

    private String email; 
    private String phone;
    private Double weight; 
    private Double abdomen; 
    private Double braco; 
    private Double perna; 

    @OneToMany(mappedBy = "userClient")
    private List<Order> orders; 
    
    public UserClient() {
    }

    public UserClient(Long id, String name, String document, String key, String email, String phone, Double weight,
            Double abdomen, Double braco, Double perna) {
        super(id, name, document, key);
        this.email = email;
        this.phone = phone;
        this.weight = weight;
        this.abdomen = abdomen;
        this.braco = braco;
        this.perna = perna;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Double getAbdomen() {
        return abdomen;
    }

    public void setAbdomen(Double abdomen) {
        this.abdomen = abdomen;
    }

    public Double getBraco() {
        return braco;
    }

    public void setBraco(Double braco) {
        this.braco = braco;
    }

    public Double getPerna() {
        return perna;
    }

    public void setPerna(Double perna) {
        this.perna = perna;
    } 

    
}
