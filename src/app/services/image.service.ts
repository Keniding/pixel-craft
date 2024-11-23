import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imageSource = new BehaviorSubject<string | null>(null);
  currentImage$ = this.imageSource.asObservable();

  loadImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageSource.next(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }

  resetImage() {
    this.imageSource.next(null);
  }
}
