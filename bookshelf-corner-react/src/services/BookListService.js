import axios from "axios";

const BOOKLIST_API_BASE_URL ="http://localhost:8080/api/books";

class BookListservice {
    //create method
    getBookList(){
        return axios.get(BOOKLIST_API_BASE_URL);
    }

    addBook(bookList){
        return axios.post(BOOKLIST_API_BASE_URL, bookList);
    }
}

export default new BookListservice()