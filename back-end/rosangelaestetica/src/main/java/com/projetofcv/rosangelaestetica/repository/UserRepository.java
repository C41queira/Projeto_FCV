package com.projetofcv.rosangelaestetica.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetofcv.rosangelaestetica.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{   
}
