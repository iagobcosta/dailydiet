import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.100.76:3333',
  withCredentials: true, // Isso permite que o axios envie e receba cookies
  headers: {
    Cookie: 'session_id=a27c73bf-e6af-46c2-90d0-b685bc2b25ab'
  }
});

// Tipo para a resposta da API
export type Meal = {
  id: string;
  user_id: string;
  name: string;
  description: string;
  is_on_diet: boolean;
  date: string;
  time: string;
  created_at: string;
};

export type MealsResponse = {
  meals: Meal[];
};

export type MetricsResponse = {
  total: number;
  totalOnDiet: number;
  totalOffDiet: number;
  bestOnDietSequence: number;
}; 