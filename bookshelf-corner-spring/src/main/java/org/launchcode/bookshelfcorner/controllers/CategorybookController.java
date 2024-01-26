//package org.launchcode.bookshelfcorner.Controllers;
//
//import org.launchcode.bookshelfcorner.exceptions.BookNotFoundException;
//import org.launchcode.bookshelfcorner.models.Categorybook;
//import org.launchcode.bookshelfcorner.repository.CategorybookRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@CrossOrigin(origins = "*")
//@RestController
//@RequestMapping("BookCategories")
//public class CategorybookController {
//
//    @Autowired
//    private CategorybookRepository categorybookRepository;
//
//    private Categorybook categorybook;
//
//
//    @GetMapping
//    public List<Categorybook> getAllBookCategory() {
//        return (List<Categorybook>) categorybookRepository.findAll();
//    }
//
////    @GetMapping
////    public ResponseEntity<?> getAllClothCategory() {
////
////        List<ClothCategory> artworks = (List<ClothCategory>) clothCategoryRepository.findAll();
////        return new ResponseEntity<>(artworks, HttpStatus.OK);
////    }
//
//    @PostMapping("create")
//    public Categorybook addBookCategory(@RequestBody Categorybook categorybook) {
//        return categorybookRepository.save(categorybook);
//    }
//
//    @GetMapping("/{id}")
//    public Categorybook getBookCategoryById(@PathVariable int id) {
//        return categorybookRepository.findById(id)
//                .orElseThrow(() -> new BookNotFoundException(id));
//    }
//
//    @PutMapping("/{id}")
//    public Categorybook updateCategorybook(@RequestBody Categorybook categorybook, @PathVariable int id) {
//        return categorybookRepository.findById(id)
//                .map(bookCategory1 -> {
//                    bookCategory1.getId(categorybook.getById());
//                    return categorybookRepository.save(bookCategory1);
//                }).orElseThrow(() -> new BookNotFoundException(id));
//    }
//    @DeleteMapping("/{id}")
//    public String deletecategorybook(@PathVariable int id){
//        if(!categorybookRepository.existsById(id)){
//            throw new BookNotFoundException(id);
//        }
//        categorybookRepository.deleteById(id);
//        return  "BookCategory with id "+id+" has been deleted success.";
//    }
//
//
//}
