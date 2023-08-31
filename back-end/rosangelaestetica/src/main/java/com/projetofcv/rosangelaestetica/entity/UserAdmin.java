package com.projetofcv.rosangelaestetica.entity;

public class UserAdmin extends User{
    
    private String address;

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
}
