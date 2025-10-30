import { images } from './images';

export const experiences = [
  {
    title: 'Kayaking',
    location: 'Udupi',
    description: 'Curated small-group experience. Certified guide. Safety first with gear included.',
    price: 999,
    image: images['udipi kayaking 1.jpg'],
    availableDates: ['2025-10-22', '2025-10-23', '2025-10-24', '2025-10-25', '2025-10-26'],
    timeSlots: [
      { time: '07:00 am', available: true, spotsLeft: 4 },
      { time: '09:00 am', available: true, spotsLeft: 2 },
      { time: '11:00 am', available: true, spotsLeft: 5 },
      { time: '1:00 pm', available: false }
    ]
  },
  {
    title: 'Nandi Hills Sunrise',
    location: 'Bangalore',
    description: 'Curated small-group experience. Certified guide. Safety first with gear included.',
    price: 899,
    image: images['Nandhi Hills 1.jpg'],
    availableDates: ['2025-10-22', '2025-10-23', '2025-10-24', '2025-10-25', '2025-10-26'],
    timeSlots: [
      { time: '05:00 am', available: true, spotsLeft: 3 },
      { time: '05:30 am', available: true, spotsLeft: 6 },
      { time: '06:00 am', available: false }
    ]
  },
  {
    title: 'Coffee Trail',
    location: 'Coorg',
    description: 'Curated small-group experience. Certified guide. Safety first with gear included.',
    price: 1299,
    image: images['Coffee Trail 1.jpg'],
    availableDates: ['2025-10-22', '2025-10-23', '2025-10-24', '2025-10-25', '2025-10-26'],
    timeSlots: [
      { time: '08:00 am', available: true, spotsLeft: 8 },
      { time: '10:00 am', available: true, spotsLeft: 4 },
      { time: '02:00 pm', available: true, spotsLeft: 2 }
    ]
  },
  {
    title: 'Kayaking',
    location: 'Udupi, Karnataka',
    description: 'Curated small-group experience. Certified guide. Safety first with gear included.',
    price: 999,
    image: images['Udipi Kayaking 2.jpg'],
    availableDates: ['2025-10-22', '2025-10-23', '2025-10-24', '2025-10-25', '2025-10-26'],
    timeSlots: [
      { time: '07:00 am', available: true, spotsLeft: 4 },
      { time: '09:00 am', available: true, spotsLeft: 2 },
      { time: '11:00 am', available: true, spotsLeft: 5 }
    ]
  },
  {
    title: 'Nandi Hills Sunrise',
    location: 'Bangalore',
    description: 'Curated small-group experience. Certified guide. Safety first with gear included.',
    price: 899,
    image: images['Nandhi Hills Sunrise 2.jpg'],
    availableDates: ['2025-10-22', '2025-10-23', '2025-10-24', '2025-10-25', '2025-10-26'],
    timeSlots: [
      { time: '05:00 am', available: true, spotsLeft: 3 },
      { time: '05:30 am', available: true, spotsLeft: 6 },
      { time: '06:00 am', available: false }
    ]
  },
  {
    title: 'Boat Cruise',
    location: 'Sunderban',
    description: 'Curated small-group experience. Certified guide. Safety first with gear included.',
    price: 1599,
    image: images['Boat Cruise.jpg'],
    availableDates: ['2025-10-22', '2025-10-23', '2025-10-24', '2025-10-25', '2025-10-26'],
    timeSlots: [
      { time: '09:00 am', available: true, spotsLeft: 12 },
      { time: '02:00 pm', available: true, spotsLeft: 8 },
      { time: '05:00 pm', available: false }
    ]
  },
  {
    title: 'Bunjee Jumping',
    location: 'Manali',
    description: 'Curated small-group experience. Certified guide. Safety first with gear included.',
    price: 2499,
    image: images['Bunje jump.jpg'],
    availableDates: ['2025-10-22', '2025-10-23', '2025-10-24', '2025-10-25', '2025-10-26'],
    timeSlots: [
      { time: '10:00 am', available: true, spotsLeft: 3 },
      { time: '12:00 pm', available: true, spotsLeft: 5 },
      { time: '03:00 pm', available: true, spotsLeft: 2 }
    ]
  },
  {
    title: 'Coffee Trail',
    location: 'Coorg',
    description: 'Curated small-group experience. Certified guide. Safety first with gear included.',
    price: 1299,
    image: images['coffee trail 2.jpg'],
    availableDates: ['2025-10-22', '2025-10-23', '2025-10-24', '2025-10-25', '2025-10-26'],
    timeSlots: [
      { time: '08:00 am', available: true, spotsLeft: 8 },
      { time: '10:00 am', available: true, spotsLeft: 4 },
      { time: '02:00 pm', available: true, spotsLeft: 2 }
    ]
  }
];