package org.launchcode.bookshelfcorner;

import org.launchcode.bookshelfcorner.models.Book;
import org.launchcode.bookshelfcorner.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BookshelfCornerApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookshelfCornerApplication.class, args);
	}


}
