package org.launchcode.bookshelfcorner.controllers;

import jakarta.validation.Valid;
import org.apache.coyote.Response;
import org.launchcode.bookshelfcorner.models.Genre;
import org.launchcode.bookshelfcorner.models.User;
import org.launchcode.bookshelfcorner.repository.GenreRepository;
import org.launchcode.bookshelfcorner.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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

    //Users can add genres to their profiles
   @PostMapping("/addGenre/{userId}")
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

    //Users can see their personal favorite genres
    @GetMapping(value = "/getGenres/{userId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Genre> getGenres(@PathVariable int userId) {

//       Optional<User> user = userRepository.findById(userId);
//
//       Iterable<Genre> allGenres = genreRepository.findAll();
//       List<String> userGenres = new ArrayList<>();
//
//       for (Genre i : allGenres) {
//           if (i.getUser().getId() == userId) {
//                userGenres.add(i.getGenreName());
//           }
//       }
//        return new ResponseEntity<>(userGenres, HttpStatus.OK);
        return genreRepository.findByUserId(userId);
    }

    //Users can delete a particular genre from their profile
    @DeleteMapping("/deleteGenre/{genreId}")
    public String deleteGenre(@PathVariable int genreId) {
        Optional optGenre = genreRepository.findById(genreId);
        if (optGenre.isPresent()) {
            Genre genre = (Genre) optGenre.get();
            genreRepository.deleteById(genreId);
        }
        return "Genre deleted";
   }

   //Users can update a particular genre in their profile
   @PutMapping("/updateGenre/{genreId}")
   public String updateGenre(@PathVariable int genreId, @RequestBody String genreName) {
       Optional<Genre> optGenre = genreRepository.findById(genreId);
       if (optGenre.isPresent()) {
           Genre genre = (Genre) optGenre.get();
           genre.setGenreName(genreName);
           genreRepository.save(genre);
       } else {
           return "Genre not found";
       }
       return "Genre updated";
   }

   //Users can see their username in their profile
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

