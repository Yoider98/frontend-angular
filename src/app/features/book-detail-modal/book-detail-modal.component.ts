import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Book } from '../../core/models/book.model';
import Swal from 'sweetalert2';
import { BookService } from '../../core/services/book.service';

@Component({
  selector: 'app-book-detail-modal',
  templateUrl: './book-detail-modal.component.html',
  styleUrls: ['./book-detail-modal.component.scss'],
})
export class BookDetailModalComponent {
  deleting = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { book: Book },
    public dialogRef: MatDialogRef<BookDetailModalComponent>,
    private bookService: BookService
  ) {}

  async onDelete() {
    const result = await Swal.fire({
      title: '¿Seguro que deseas eliminar este libro?',
      text: '¡Esta acción no se puede deshacer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e53935',
      cancelButtonColor: '#1976d2',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      this.deleting = true;
      this.bookService.deleteBook(this.data.book.id).subscribe({
        next: () => {
          this.deleting = false;
          Swal.fire('Eliminado', 'El libro ha sido eliminado.', 'success');
          this.dialogRef.close(true);
          window.location.reload();
        },
        error: () => {
          this.deleting = false;
          Swal.fire('Error', 'No se pudo eliminar el libro', 'error');
        }
      });
    }
  }
} 