
export interface Note {
  pitch: number;
  duration: number;
  name: string;
}

export interface Hymn {
  id: number;
  number: number;
  title: string;
  category: string;
  verses: string[];
  chorus?: string;
  author?: string;
  tune?: string;
  melody?: Note[];
}

export type ViewState = 'list' | 'detail' | 'favorites' | 'categories' | 'ai-reflection';

export interface AppState {
  currentView: ViewState;
  selectedHymn: Hymn | null;
  searchQuery: string;
  favorites: number[];
  selectedCategory: string | null;
}
