package org.launchcode.bookshelfcorner.models.dto;

public class RegisterFormDTO extends LoginRequestDTO {

    private String verifyPassword;

    public String getVerifyPassword() {
        return verifyPassword;
    }

    public void setVerifyPassword(String verifyPassword) {
        this.verifyPassword = verifyPassword;
    }
}
