import { Component } from '@angular/core';
import { BookService } from '../../core/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  categoria: string = '';
  precioMin: number | null = null;
  precioMax: number | null = null;
  scraping: boolean = false;
  filters: any = {};

  constructor(private bookService: BookService) { }

  filtrar() {
    this.filters = {
      category: this.categoria,
      priceMin: this.precioMin,
      priceMax: this.precioMax
    };
  }

  iniciarScraping() {
    this.scraping = true;
    this.bookService.scrapeBooks().subscribe({
      next: () => {
        this.scraping = false;
        alert('✅ Libros scrapeados correctamente'); // ← Alerta de éxito
        window.location.reload();
      },
      error: () => {
        this.scraping = false;
        alert('❌ Error al scrapear libros'); // ← Alerta de error
      }
    });
  }
  
}
