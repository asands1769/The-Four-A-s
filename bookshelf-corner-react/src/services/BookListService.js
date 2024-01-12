import axios from "axios";

const BOOKLIST_API_BASE_URL ="http://localhost:8080/api/books";

class BookLisservice {
    //create method
    getBookList(){
        return axios.get(BOOKLIST_API_BASE_URL);
    }
}

export default new BookLisservice()