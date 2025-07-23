import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../core/models/book.model';

@Component({
  selector: 'app-book-card',
  template: `
    <div class="book-card" (click)="onCardClick()">
      <h3>{{ book.title }}</h3>
      <p>Precio: {{ book.price | currency:'USD' }}</p>
      <p>Rating: {{ book.rating }}</p>
      <p>Stock: {{ book.stock }}</p>
      <p>Categoría: {{ book.category }}</p>
    </div>
  `,
  styles: []
})
export class BookCardComponent {
  @Input() book!: Book;
  @Output() cardClicked = new EventEmitter<number>();

  onCardClick() {
    this.cardClicked.emit(this.book.id);
  }
}
