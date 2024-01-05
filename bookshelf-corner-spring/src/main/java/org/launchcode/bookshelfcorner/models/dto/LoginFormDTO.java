package org.launchcode.bookshelfcorner.models.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class LoginFormDTO {

//    @NotNull(message = "Username is required")
//    @NotBlank
//    @Size(min = 3, message = "Invalid username. Must be between 3 and 20 characters.")
//    private String username;

    @NotNull(message = "Password is required.")
    @NotBlank
    @Size(min = 8, message = "Invalid password. Must be 8 or more characters.")
    private String password;

    @Email(message = "Email is not properly formatted")
    @NotNull(message = "Email is required")
    @NotBlank
    private String email;

//    public String getUsername() {
//        return username;
//    }
//
//    public void setUsername(String username) {
//        this.username = username;
//    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
