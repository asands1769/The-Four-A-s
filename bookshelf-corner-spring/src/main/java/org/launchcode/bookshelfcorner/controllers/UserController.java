package org.launchcode.bookshelfcorner.controllers;

import org.launchcode.bookshelfcorner.models.User;
import org.launchcode.bookshelfcorner.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
//@Repository("register")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @ResponseBody
    @GetMapping("/getUsername/{userId}")
    public String getUsername(@PathVariable int userId) {
        Optional optUser = userRepository.findById(userId);
        if (optUser.isPresent()) {
            User user = (User) optUser.get();
            return user.getUsername();
        } else {
            return "User not found";
        }
    }
}

