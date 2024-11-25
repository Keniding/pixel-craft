import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.css']
})
export class ImageEditorComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  isDragging = false;
  selectedImage: string | null = null;

  @HostListener('window:paste', ['$event'])
  onPaste(event: ClipboardEvent): void {
    const items = event.clipboardData?.items;

    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const file = items[i].getAsFile();
          if (file) {
            this.handleFile(file);
          }
        }
      }
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;

    const files = event.dataTransfer?.files;
    if (files?.length) {
      this.handleFile(files[0]);
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.handleFile(input.files[0]);
    }
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  onImgLoading(): void {
    console.log('Imagen cargando...');
  }

  private handleFile(file: File): void {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedImage = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    } else {
      alert('Por favor, selecciona un archivo de imagen válido');
    }
  }
}
