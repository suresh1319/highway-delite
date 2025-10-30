import axios from 'axios';
import { Experience, Booking } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const experienceService = {
  getAll: () => api.get<Experience[]>('/experiences'),
  getById: (id: string) => api.get<Experience>(`/experiences/${id}`),
};

export const bookingService = {
  create: (booking: Omit<Booking, 'id'>) => api.post<Booking>('/bookings', booking),
};

export const promoService = {
  validate: (code: string) => api.post<{ valid: boolean; discount: number }>('/promo/validate', { code }),
};