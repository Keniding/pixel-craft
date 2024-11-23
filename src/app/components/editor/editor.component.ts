import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  constructor(public imageService: ImageService) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageService.loadImage(file);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    if (file) {
      this.imageService.loadImage(file);
    }
  }

  adjustBrightness(event: any) {
    console.log('Brillo:', event.target.value);
  }

  adjustContrast(event: any) {
    console.log('Contraste:', event.target.value);
  }
}
