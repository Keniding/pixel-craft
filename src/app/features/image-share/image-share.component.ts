import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-share',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-share.component.html'
})
export class ImageShareComponent {
  @Input() imageUrl: string | null = null;
  publicUrl: string = '';
  isGeneratingUrl: boolean = false;

  async generatePublicUrl(): Promise<void> {
    this.isGeneratingUrl = true;
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.publicUrl = 'https://ejemplo.com/imagen-compartida';
    } catch (error) {
      console.error('Error al generar URL pública:', error);
    } finally {
      this.isGeneratingUrl = false;
    }
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.publicUrl);
  }
}
