import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BookService } from '../../core/services/book.service';
import { Book } from '../../core/models/book.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailModalComponent } from '../book-detail-modal/book-detail-modal.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnChanges {
  @Input() filters: any;
  books: Book[] = [];
  allBooks: Book[] = [];

  constructor(private bookService: BookService, private dialog: MatDialog) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe((data) => {
      this.allBooks = data;
      this.books = data; 
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filters'] && !changes['filters'].firstChange) {
      this.aplicarFiltros();
    }
  }

  aplicarFiltros() {
    if (!this.filters) {
      this.books = this.allBooks;
      return;
    }
    this.books = this.allBooks.filter(book => {
      const matchCategory = this.filters.category
        ? (book.category || '').toLowerCase().includes(this.filters.category.toLowerCase())
        : true;
      const matchMin = this.filters.priceMin
        ? book.price >= this.filters.priceMin
        : true;
      const matchMax = this.filters.priceMax
        ? book.price <= this.filters.priceMax
        : true;
      return matchCategory && matchMin && matchMax;
    });
  }

  verDetalle(book: Book) {
    this.dialog.open(BookDetailModalComponent, {
      data: { book }
    });
  }
}
