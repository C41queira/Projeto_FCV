package com.projetofcv.rosangelaestetica.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_usuario_admin")
public class UserAdmin extends User{

    private String address;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "agenda_id", referencedColumnName = "id")
    private Agenda agenda;

    public UserAdmin() {
    }

    public UserAdmin(Long id, String name, String document, String key, String address) {
        super(id, name, document, key);
        this.address = address;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Agenda getAgenda() {
        return agenda;
    }

    public void setAgenda(Agenda agenda) {
        this.agenda = agenda;
    }
}
