package org.launchcode.bookshelfcorner.models;

        import jakarta.persistence.GeneratedValue;
        import jakarta.persistence.Id;
        import jakarta.persistence.MappedSuperclass;

        import java.util.Objects;

@MappedSuperclass
public abstract class BookAbstractEntity {
    @Id
    @GeneratedValue
    private int id;




    @Override
    public String toString() {
        Book book = new Book();
        book.setTitle("The Great Gatsby");
        book.setBook_Category("Non-fiction");
        book.setTag_type("MustRead");
        return super.toString();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BookAbstractEntity entity = (BookAbstractEntity) o;
        return id == entity.id;
    }
    @Override
    public int hashCode() {
        return Objects.hash(id);
    }


}