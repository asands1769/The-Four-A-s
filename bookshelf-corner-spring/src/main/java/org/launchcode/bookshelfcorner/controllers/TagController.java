package org.launchcode.bookshelfcorner.Controllers;

//import org.launchcode.bookshelfcorner.models.Tag;
//import org.launchcode.bookshelfcorner.models.data.TagRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/api/tags")
//public class TagController {
//
//    @Autowired
//    private TagRepository tagRepository;
//
//    @Autowired
//    private BookListRepository bookListRepository;
//
//    @PostMapping
//    public ResponseEntity<Tag> createTag(@RequestBody Tag tag) {
//        Tag createdTag = tagRepository.save(tag);
//        return new ResponseEntity<>(createdTag, HttpStatus.CREATED);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Tag> getTagById(@PathVariable Long id) {
//        Optional<Tag> tag = tagRepository.findById(id);
//        return tag.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
//                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<Tag> updateTag(@PathVariable Long id, @RequestBody Tag tag) {
//        if (tagRepository.existsById(id)) {
//            tag.setId(id);
//            Tag updatedTag = tagRepository.save(tag);
//            return new ResponseEntity<>(updatedTag, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteTag(@PathVariable Long id) {
//        if (tagRepository.existsById(id)) {
//            tagRepository.deleteById(id);
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//
//    @PostMapping("/{tagId}/assignBook/{bookId}")
//    public ResponseEntity<Void> assignTagToBook(@PathVariable Long tagId, @PathVariable Long bookId) {
//        Optional<Tag> tag = tagRepository.findById(tagId);
//        Optional<BookList> book = bookListRepository.findById(bookId);
//
//        if (tag.isPresent() && book.isPresent()) {
//            tag.get().getBooks().add(book.get());
//            tagRepository.save(tag.get());
//            return new ResponseEntity<>(HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//
//    @GetMapping("/filterBooks/{tagId}")
//    public ResponseEntity<Set<BookList>> filterBooksByTag(@PathVariable Long tagId) {
//        Optional<Tag> tag = tagRepository.findById(tagId);
//
//        return tag.map(value -> new ResponseEntity<>(value.getBooks(), HttpStatus.OK))
//                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//    }
//}
