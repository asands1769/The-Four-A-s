package org.launchcode.bookshelfcorner.controllers;

import jakarta.validation.Valid;

import org.launchcode.bookshelfcorner.models.User;
import org.launchcode.bookshelfcorner.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.launchcode.bookshelfcorner.models.dto.LoginRequestDTO;
import org.launchcode.bookshelfcorner.models.dto.LoginResponseDTO;
import org.launchcode.bookshelfcorner.models.dto.RegisterRequestDTO;

@RestController
//@RequestMapping("/login")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthenticationController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<LoginResponseDTO> performLogin(@Valid @RequestBody RegisterRequestDTO registerRequestDTO){

        User newUser = new User(registerRequestDTO.getUsername(), registerRequestDTO.getEmail(), registerRequestDTO.getPassword());
        userRepository.save(newUser);
        return ResponseEntity.ok(new LoginResponseDTO(newUser.getId(),"Success !"));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> performLogin(@Valid @RequestBody LoginRequestDTO loginRequestDTO){
        User user = userRepository.findByEmail(loginRequestDTO.getEmail());
        return ResponseEntity.ok(new LoginResponseDTO(user.getId(),"Success !"));
    }
}
