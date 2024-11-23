import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  currentImage$ = new BehaviorSubject<string | null>(null);

  filters$ = new BehaviorSubject<{
    brightness: number,
    contrast: number,
    saturation: number,
    blur: number,
    hueRotate: number,
    sepia: number,
    grayscale: number,
    invert: number,
    opacity: number,
  }>({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    blur: 0,
    hueRotate: 0,
    sepia: 0,
    grayscale: 0,
    invert: 0,
    opacity: 100
  });

  loadImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.currentImage$.next(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }

  updateFilter(filterName: string, value: number) {
    const currentFilters = this.filters$.value;
    this.filters$.next({
      ...currentFilters,
      [filterName]: value
    });
  }

  resetFilters() {
    this.filters$.next({
      brightness: 100,
      contrast: 100,
      saturation: 100,
      blur: 0,
      hueRotate: 0,
      sepia: 0,
      grayscale: 0,
      invert: 0,
      opacity: 100
    });
  }
}
