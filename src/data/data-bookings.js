import { add } from 'date-fns';

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

export const bookings = [
  // CABIN 001
  {
    created_at: fromToday(-20, true),
    start_date: fromToday(0),
    end_date: fromToday(7),
    cabinId: 1,
    guestId: 2,
    has_breakfast: true,
    observations:
      'I have a gluten allergy and would like to request a gluten-free breakfast.',
    is_paid: false,
    num_guests: 1
  },
  {
    created_at: fromToday(-33, true),
    start_date: fromToday(-23),
    end_date: fromToday(-13),
    cabinId: 1,
    guestId: 3,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 2
  },
  {
    created_at: fromToday(-27, true),
    start_date: fromToday(12),
    end_date: fromToday(18),
    cabinId: 1,
    guestId: 4,
    has_breakfast: false,
    observations: '',
    is_paid: false,
    num_guests: 2
  },

  // CABIN 002
  {
    created_at: fromToday(-45, true),
    start_date: fromToday(-45),
    end_date: fromToday(-29),
    cabinId: 2,
    guestId: 5,
    has_breakfast: false,
    observations: '',
    is_paid: true,
    num_guests: 2
  },
  {
    created_at: fromToday(-2, true),
    start_date: fromToday(15),
    end_date: fromToday(18),
    cabinId: 2,
    guestId: 6,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 2
  },
  {
    created_at: fromToday(-5, true),
    start_date: fromToday(33),
    end_date: fromToday(48),
    cabinId: 2,
    guestId: 7,
    has_breakfast: true,
    observations: '',
    is_paid: false,
    num_guests: 2
  },

  // CABIN 003
  {
    created_at: fromToday(-65, true),
    start_date: fromToday(-25),
    end_date: fromToday(-20),
    cabinId: 3,
    guestId: 8,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 4
  },
  {
    created_at: fromToday(-2, true),
    start_date: fromToday(-2),
    end_date: fromToday(0),
    cabinId: 3,
    guestId: 9,
    has_breakfast: false,
    observations: 'We will be bringing our small dog with us',
    is_paid: true,
    num_guests: 3
  },
  {
    created_at: fromToday(-14, true),
    start_date: fromToday(-14),
    end_date: fromToday(-11),
    cabinId: 3,
    guestId: 10,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 4
  },

  // CABIN 004
  {
    created_at: fromToday(-30, true),
    start_date: fromToday(-4),
    end_date: fromToday(8),
    cabinId: 4,
    guestId: 11,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 4
  },
  {
    created_at: fromToday(-1, true),
    start_date: fromToday(12),
    end_date: fromToday(17),
    cabinId: 4,
    guestId: 12,
    has_breakfast: true,
    observations: '',
    is_paid: false,
    num_guests: 4
  },
  {
    created_at: fromToday(-3, true),
    start_date: fromToday(18),
    end_date: fromToday(19),
    cabinId: 4,
    guestId: 13,
    has_breakfast: false,
    observations: '',
    is_paid: true,
    num_guests: 1
  },

  // CABIN 005
  {
    created_at: fromToday(0, true),
    start_date: fromToday(14),
    end_date: fromToday(21),
    cabinId: 5,
    guestId: 14,
    has_breakfast: true,
    observations: '',
    is_paid: false,
    num_guests: 5
  },
  {
    created_at: fromToday(-6, true),
    start_date: fromToday(-6),
    end_date: fromToday(-4),
    cabinId: 5,
    guestId: 15,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 4
  },
  {
    created_at: fromToday(-4, true),
    start_date: fromToday(-4),
    end_date: fromToday(-1),
    cabinId: 5,
    guestId: 16,
    has_breakfast: false,
    observations: '',
    is_paid: true,
    num_guests: 6
  },

  // CABIN 006
  {
    created_at: fromToday(-3, true),
    start_date: fromToday(0),
    end_date: fromToday(11),
    cabinId: 6,
    guestId: 17,
    has_breakfast: false,
    observations:
      "We will be checking in late, around midnight. Hope that's okay :)",
    is_paid: true,
    num_guests: 6
  },
  {
    created_at: fromToday(-16, true),
    start_date: fromToday(-16),
    end_date: fromToday(-9),
    cabinId: 6,
    guestId: 18,
    has_breakfast: true,
    observations: 'I will need a rollaway bed for one of the guests',
    is_paid: true,
    num_guests: 4
  },
  {
    created_at: fromToday(-18, true),
    start_date: fromToday(-4),
    end_date: fromToday(-1),
    cabinId: 6,
    guestId: 19,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 6
  },

  // CABIN 007
  {
    created_at: fromToday(-2, true),
    start_date: fromToday(17),
    end_date: fromToday(23),
    cabinId: 7,
    guestId: 20,
    has_breakfast: false,
    observations: '',
    is_paid: false,
    num_guests: 8
  },
  {
    created_at: fromToday(-7, true),
    start_date: fromToday(40),
    end_date: fromToday(50),
    cabinId: 7,
    guestId: 21,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 7
  },
  {
    created_at: fromToday(-55, true),
    start_date: fromToday(32),
    end_date: fromToday(37),
    cabinId: 7,
    guestId: 22,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 6
  },

  // CABIN 008
  {
    created_at: fromToday(-8, true),
    start_date: fromToday(-5),
    end_date: fromToday(0),
    cabinId: 8,
    guestId: 1,
    has_breakfast: true,
    observations:
      'My wife has a gluten allergy so I would like to request a gluten-free breakfast if possible',
    is_paid: true,
    num_guests: 9
  },
  {
    created_at: fromToday(0, true),
    start_date: fromToday(0),
    end_date: fromToday(5),
    cabinId: 8,
    guestId: 23,
    has_breakfast: true,
    observations:
      'I am celebrating my anniversary, can you arrange for any special amenities or decorations?',
    is_paid: true,
    num_guests: 10
  },
  {
    created_at: fromToday(-10, true),
    start_date: fromToday(10),
    end_date: fromToday(13),
    cabinId: 8,
    guestId: 24,
    has_breakfast: false,
    observations: '',
    is_paid: true,
    num_guests: 7
  }
];
