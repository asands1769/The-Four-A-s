//package org.launchcode.bookshelfcorner.controllers;
//
//import org.launchcode.bookshelfcorner.models.User;
//import org.launchcode.bookshelfcorner.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@CrossOrigin
////@Repository("register")
//public class UserController {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @PostMapping("/register")
//    User newUser(@RequestBody User newUser) {
//        return userRepository.save(newUser);
//    }
//}
