package org.launchcode.bookshelfcorner.exceptions;

public class BookShelfNotFoundException extends RuntimeException{
    public BookShelfNotFoundException(int id){
        super("Could not found the Bookshelf with id "+ id);
    }
}
