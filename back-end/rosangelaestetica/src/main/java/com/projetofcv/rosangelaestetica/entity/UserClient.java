package com.projetofcv.rosangelaestetica.entity;

public class UserClient extends User{
    
    private String email; 
    private String phone;
    
    public UserClient() {
    }

    public UserClient(Long id, String name, String document, String key, String email, String phone) {
        super(id, name, document, key);
        this.email = email;
        this.phone = phone;
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

    
}
