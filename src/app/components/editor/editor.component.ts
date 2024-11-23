import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService } from '../../services/image.service';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  filterConfigs = [
    {
      name: 'brightness',
      label: 'Brillo',
      min: 0,
      max: 200,
      default: 100,
      unit: '%',
      icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707' // sol
    },
    {
      name: 'contrast',
      label: 'Contraste',
      min: 0,
      max: 200,
      default: 100,
      unit: '%',
      icon: 'M20 4v7m0 4v7M4 4v7m0 4v7M12 4v7m0 4v7' // barras verticales
    },
    {
      name: 'saturation',
      label: 'Saturación',
      min: 0,
      max: 200,
      default: 100,
      unit: '%',
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
    },
    {
      name: 'blur',
      label: 'Desenfoque',
      min: 0,
      max: 10,
      default: 0,
      unit: 'px',
      icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
    },
    {
      name: 'hueRotate',
      label: 'Tono',
      min: 0,
      max: 360,
      default: 0,
      unit: 'deg',
      icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
    },
    {
      name: 'sepia',
      label: 'Sepia',
      min: 0,
      max: 100,
      default: 0,
      unit: '%',
      icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
    },
    {
      name: 'grayscale',
      label: 'Escala de grises',
      min: 0,
      max: 100,
      default: 0,
      unit: '%',
      icon: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21l-7-7 7-7M5 21l7-7-7-7'
    },
    {
      name: 'invert',
      label: 'Invertir',
      min: 0,
      max: 100,
      default: 0,
      unit: '%',
      icon: 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4'
    },
    {
      name: 'opacity',
      label: 'Opacidad',
      min: 0,
      max: 100,
      default: 100,
      unit: '%',
      icon: 'M17 7l-5 5 5 5M7 7l5 5-5 5'
    }
  ];

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

  adjustFilter(event: any, filterName: string) {
    this.imageService.updateFilter(filterName, event.target.value);
  }

  resetFilters() {
    this.imageService.resetFilters();
  }

  getFilterStyle() {
    const filters = this.imageService.filters$.value;
    return {
      filter: `
        brightness(${filters.brightness}%)
        contrast(${filters.contrast}%)
        saturate(${filters.saturation}%)
        blur(${filters.blur}px)
        hue-rotate(${filters.hueRotate}deg)
        sepia(${filters.sepia}%)
        grayscale(${filters.grayscale}%)
        invert(${filters.invert}%)
        opacity(${filters.opacity}%)
      `
    };
  }
}
