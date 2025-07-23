import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BookService {
  private apiUrl = 'http://localhost:3000'; // URL base de tu backend

  constructor(private http: HttpClient) {}

  getBooks(category?: string, priceMin?: number, priceMax?: number): Observable<Book[]> {
    let params = new HttpParams();
    if (category) params = params.set('category', category);
    if (priceMin !== undefined) params = params.set('priceMin', priceMin.toString());
    if (priceMax !== undefined) params = params.set('priceMax', priceMax.toString());
    const url = `${this.apiUrl}/books`;
    console.log('URL final:', url); // Debug
    return this.http.get<Book[]>(url, { params }).pipe(
      tap(response => {
        console.log('[DEBUG] Respuesta de getBooks:', response);
      })
    );
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/books/${id}`).pipe(
      tap(response => {
        console.log(`[DEBUG] Respuesta de getBook(${id}):`, response);
      })
    );
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/books/${id}`).pipe(
      tap(response => {
        console.log(`[DEBUG] Respuesta de deleteBook(${id}):`, response);
      })
    );
  }

  scrapeBooks(): Observable<any> {
    return this.http.post(`${this.apiUrl}/books/scrape-books`, {}).pipe(
      tap(response => {
        console.log('[DEBUG] Respuesta de scrapeBooks:', response);
      })
    );
  }
} 