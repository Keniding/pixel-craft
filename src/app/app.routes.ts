import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditorComponent } from './components/editor/editor.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home - PixelCraft'
  },
  {
    path: 'editor',
    component: EditorComponent,
    title: 'Editor - PixelCraft'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
