export interface User {
  id: string;
  email: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  rating: number;
  description?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface SearchResponse {
  products: Product[];
}

export interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
} 