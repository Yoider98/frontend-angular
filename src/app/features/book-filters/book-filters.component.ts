import { Component, Output, EventEmitter } from '@angular/core';

export interface BookFilters {
  category?: string;
  priceMin?: number;
  priceMax?: number;
}

@Component({
  selector: 'app-book-filters',
  templateUrl: './book-filters.component.html',
  styleUrls: ['./book-filters.component.scss']
})
export class BookFiltersComponent {
  category: string = '';
  priceMin: number | null = null;
  priceMax: number | null = null;

  @Output() filtersChanged = new EventEmitter<any>();

  filtrar() {
    this.filtersChanged.emit({
      category: this.category,
      priceMin: this.priceMin,
      priceMax: this.priceMax
    });
  }
}
