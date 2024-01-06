package org.launchcode.bookshelfcorner.controllers;

import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.launchcode.bookshelfcorner.models.dto.LoginRequestDTO;
import org.launchcode.bookshelfcorner.models.dto.LoginResponseDTO;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    @PostMapping
    public ResponseEntity<LoginResponseDTO> performLogin(@Valid @RequestBody LoginRequestDTO loginRequestDTO){
        return ResponseEntity.ok(new LoginResponseDTO("Success !"));
    }
}
