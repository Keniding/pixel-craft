// types/filters.interface.ts
export interface FilterConfig {
  name: FilterType;
  label: string;
  min: number;
  max: number;
  default: number;
  unit: string;
  icon: string;
}

export type FilterType = 'brightness' | 'contrast' | 'saturation' | 'blur' | 'hueRotate' | 'sepia' | 'grayscale' | 'invert' | 'opacity';

export interface Filters {
  [key: string]: number;
  brightness: number;
  contrast: number;
  saturation: number;
  blur: number;
  hueRotate: number;
  sepia: number;
  grayscale: number;
  invert: number;
  opacity: number;
}
