import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ExportOptions {
  format: 'png' | 'jpeg' | 'webp';
  quality: number;
  fileName: string;
}

@Component({
  selector: 'app-image-export',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './image-export.component.html'
})
export class ImageExportComponent {
  @Input() imageData: string | null = null;

  exportOptions: ExportOptions = {
    format: 'png',
    quality: 90,
    fileName: 'imagen-editada'
  };

  private async convertToFormat(format: string, quality: number): Promise<Blob> {
    return new Promise((resolve, reject) => {
      if (!this.imageData) {
        reject(new Error('No hay imagen para exportar'));
        return;
      }

      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('No se pudo crear el contexto 2D'));
          return;
        }

        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Error al convertir la imagen'));
            }
          },
          `image/${format}`,
          quality / 100
        );
      };

      img.src = this.imageData;
    });
  }

  updateFileName(): void {
    const baseName = this.exportOptions.fileName.replace(/\.(png|jpeg|webp)$/, '');
    this.exportOptions.fileName = `${baseName}.${this.exportOptions.format}`;
  }

  async saveImage(): Promise<void> {
    try {
      const blob = await this.convertToFormat(
        this.exportOptions.format,
        this.exportOptions.quality
      );

      // Aquí iría la lógica para guardar en el almacenamiento local o backend
      console.log('Imagen guardada', blob);

    } catch (error) {
      console.error('Error al guardar la imagen:', error);
      alert('Error al guardar la imagen');
    }
  }

  async downloadImage(): Promise<void> {
    try {
      const blob = await this.convertToFormat(
        this.exportOptions.format,
        this.exportOptions.quality
      );

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = this.exportOptions.fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Error al descargar la imagen:', error);
      alert('Error al descargar la imagen');
    }
  }
}
