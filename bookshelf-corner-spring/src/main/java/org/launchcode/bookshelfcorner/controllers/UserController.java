package org.launchcode.bookshelfcorner.controllers;

import jakarta.validation.Valid;
import org.launchcode.bookshelfcorner.models.Genre;
import org.launchcode.bookshelfcorner.models.User;
import org.launchcode.bookshelfcorner.models.dto.LoginResponseDTO;
import org.launchcode.bookshelfcorner.models.dto.RegisterRequestDTO;
import org.launchcode.bookshelfcorner.repository.GenreRepository;
import org.launchcode.bookshelfcorner.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
//@Repository("register")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GenreRepository genreRepository;

   @PostMapping("/saveGenre/{userId}")
   public String saveGenre(@PathVariable int userId, @RequestBody String genre) {
       Optional optUser = userRepository.findById(userId);
       if (optUser.isPresent()) {
           User user = (User) optUser.get();
           Genre newGenre = new Genre(genre);
           newGenre.setUser(user);
           user.addGenre(newGenre);
           genreRepository.save(newGenre);
       } else {
           return "User not found";
       }
       return "Genre added";
   }

    @ResponseBody
    @GetMapping("/getGenres/{userId}")
    public List<Genre> getGenres(@PathVariable int userId) {
        Optional optUser = userRepository.findById(userId);
        if (optUser.isPresent()) {
            User user = (User) optUser.get();
            return user.getGenreList();
        } else {
            return null;
        }
    }

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

//    @ResponseBody
//    @GetMapping("/getFavoriteGenres/{userId}")
//    public List<Genre> getFavoriteGenres(@PathVariable int userId) {
//        Optional optUser = userRepository.findById(userId);
//        if (optUser.isPresent()) {
//            User user = (User) optUser.get();
//            return user.getFavoriteGenres();
//        } else {
//            return null;
//        }
//    }




}

