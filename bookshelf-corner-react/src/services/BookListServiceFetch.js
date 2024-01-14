

const BOOKLIST_API_BASE_URL = "http://localhost:8080/api/books";

class BookListServiceFetch {
    getBookList() {
        return fetch(BOOKLIST_API_BASE_URL).then((response) => response.json());
    }
}

const bookListServiceInstance = new BookListServiceFetch();
export default bookListServiceInstance;
