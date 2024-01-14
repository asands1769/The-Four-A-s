package org.launchcode.bookshelfcorner.controllers;

import jakarta.validation.Valid;

import org.apache.coyote.Response;
import org.launchcode.bookshelfcorner.models.User;
import org.launchcode.bookshelfcorner.models.dto.ChangePasswordRequestDTO;
import org.launchcode.bookshelfcorner.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.launchcode.bookshelfcorner.models.dto.LoginRequestDTO;
import org.launchcode.bookshelfcorner.models.dto.LoginResponseDTO;
import org.launchcode.bookshelfcorner.models.dto.RegisterRequestDTO;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AuthenticationController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<LoginResponseDTO> performLogin(@Valid @RequestBody RegisterRequestDTO registerRequestDTO){

        Optional<User> optUserUsername = userRepository.findByUsername(registerRequestDTO.getUsername());
        Optional<User> optUserEmail = userRepository.findByEmail(registerRequestDTO.getEmail());

        if (optUserUsername.isPresent()) {
           return ResponseEntity.badRequest().body(new LoginResponseDTO(0,"Username unavailable"));
        } else if (optUserEmail.isPresent()) {
            return ResponseEntity.badRequest().body(new LoginResponseDTO(0,"Email already registered"));
        } else {
            User newUser = new User(registerRequestDTO.getUsername(), registerRequestDTO.getEmail(), registerRequestDTO.getPassword());
            userRepository.save(newUser);
            return ResponseEntity.ok(new LoginResponseDTO(newUser.getId(), "Success"));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> performLogin(@Valid @RequestBody LoginRequestDTO loginRequestDTO){
        Optional<User> optUser = userRepository.findByEmail(loginRequestDTO.getEmail());
        if (optUser.isPresent()) {
            User user = (User) optUser.get();
            if (user.isMatchingPassword(loginRequestDTO.getPassword())) {
                return ResponseEntity.ok(new LoginResponseDTO(user.getId(), "Success !"));
            }
        }
        return ResponseEntity.badRequest().body(new LoginResponseDTO(0,"Invalid email or password"));
    }

    @PutMapping("/changePassword")
    public ResponseEntity<LoginResponseDTO> changePassword(@Valid @RequestBody ChangePasswordRequestDTO changePasswordRequestDTO) {
        Optional<User> optUser = userRepository.findById(changePasswordRequestDTO.getUserId());
        if (optUser.isPresent()) {
            User user = (User) optUser.get();
            user.setPwHash(changePasswordRequestDTO.getPassword());
            userRepository.save(user);
            return ResponseEntity.ok(new LoginResponseDTO(user.getId(), "Success !"));
        }
        return ResponseEntity.ok(new LoginResponseDTO(0,"Password changed successfully"));
    }
}
