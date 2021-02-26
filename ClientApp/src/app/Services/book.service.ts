import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  _baseURL: string = "api/Books";

  constructor(private http:HttpClient) { }

  getAllBooks(){
    return this.http.get<Book[]>(this._baseURL+"/GetBooks");
  }

  addBook(book:Book){
    return this.http.post<Book[]>(this._baseURL+"/AddBook/", book);
  }


}
