export interface Experience {
  id: string;
  title: string;
  location: string;
  description: string;
  price: number;
  image: string;
  availableDates: string[];
  timeSlots: TimeSlot[];
}

export interface TimeSlot {
  time: string;
  available: boolean;
  spotsLeft?: number;
}

export interface Booking {
  id: string;
  experienceId: string;
  date: string;
  time: string;
  quantity: number;
  fullName: string;
  email: string;
  promoCode?: string;
  total: number;
  createdAt: Date;
}