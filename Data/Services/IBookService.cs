using System.Collections.Generic;

namespace Summeries.Data
{
  public interface IBookService
  {
    List<Book> GetAllBooks();
    Book GetBookById(int id);
    void updateBook(int id, Book newBook);
    void DeleteBook(int id);
    void AddBook(Book newBook);

  }
}
