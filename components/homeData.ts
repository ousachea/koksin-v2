import type { IconName } from "./Icons";

// Content shared by both homepage layouts.

export const popularSearches = [
  "Hair Salon",
  "Barbershop",
  "Nail Salon",
  "Facial & Skincare",
  "Waxing & Hair Removal",
  "Tattoo & Piercing",
  "Massage & Spa",
  "Brows & Lashes",
];

export const categories: { icon: IconName; label: string }[] = [
  { icon: "grid", label: "All" },
  { icon: "hair", label: "Hair" },
  { icon: "barber", label: "Barber" },
  { icon: "nails", label: "Nails" },
  { icon: "facial", label: "Facial" },
  { icon: "waxing", label: "Waxing" },
  { icon: "tattoo", label: "Tattoo" },
  { icon: "massage", label: "Massage" },
  { icon: "brows", label: "Brows" },
  { icon: "makeup", label: "Makeup" },
  { icon: "cleaning", label: "Cleaning" },
  { icon: "yoga", label: "Yoga" },
  { icon: "pilates", label: "Pilates" },
  { icon: "gym", label: "Gym" },
  { icon: "physio", label: "Physio" },
  { icon: "laundry", label: "Laundry" },
  { icon: "repairs", label: "Repairs" },
  { icon: "pest", label: "Pest" },
  { icon: "pet", label: "Pet" },
  { icon: "auto", label: "Auto" },
];

export const steps = [
  {
    numeral: "១",
    title: "Search what you need",
    text: "Haircut, massage, house cleaning, pet grooming, car wash. Tell us the service, your city, and the time that suits you. We only show partners who really have a slot free.",
  },
  {
    numeral: "២",
    title: "Pick a time that suits you",
    text: "You see live availability, not a request form. Pick your time, pick your favourite staff member, and we hold the slot for you.",
  },
  {
    numeral: "៣",
    title: "We tell you when it's confirmed",
    text: "As soon as the partner confirms, you get an SMS or Telegram message with the address, plus a friendly reminder before you go. Need to change it? Reschedule or cancel in a tap.",
  },
];

export const cities = ["Phnom Penh", "Siem Reap", "Preah Sihanouk", "Battambang", "Kampot", "Kandal"];

export const faqs = [
  {
    q: "What is KOKSIN?",
    a: "KOKSIN is Cambodia's appointments marketplace. Browse verified partners for beauty, wellness, fitness, home, pet, and auto services, see their real availability, and book a slot in seconds.",
  },
  {
    q: "Where in Cambodia does KOKSIN operate?",
    a: "We are starting in Phnom Penh, with Siem Reap, Preah Sihanouk, Battambang, Kampot, and Kandal coming next.",
  },
  {
    q: "What kinds of services can I book?",
    a: "Hair, barber, nails, facial and skincare, waxing, tattoo, massage and spa, brows and lashes, makeup, cleaning, yoga, pilates, gym, physio, laundry, repairs, pest control, pet grooming, and car wash.",
  },
  {
    q: "How do I pay?",
    a: "Most bookings are paid at the shop. Where a partner asks for a deposit, you pay online with ABA PayWay or KHQR and the rest on the day.",
  },
  {
    q: "Can I pay with KHQR?",
    a: "Yes. Scan the KHQR code with any Cambodian banking app to pay a deposit or settle a booking.",
  },
  {
    q: "How do ABA PayWay deposits work?",
    a: "The partner sets the deposit amount. You pay it when you book, it comes off your final bill, and it is refunded under the partner's cancellation policy.",
  },
  {
    q: "What is a group booking?",
    a: "Some partners run classes and group sessions — yoga, pilates, group training. You book a seat in the session instead of a private appointment.",
  },
  {
    q: "How are partners verified?",
    a: "We check the business, its location, and its contact details before it goes live, and we keep watching reviews and no-shows afterwards.",
  },
  {
    q: "I run an appointment-based business. How do I list?",
    a: "Apply to list and we will set up your booking page, staff schedule, and Telegram alerts. Setup fees are waived for launch partners.",
  },
];

export const partnerFeatures: { icon: IconName; label: string }[] = [
  { icon: "page", label: "Your own booking page" },
  { icon: "card", label: "Deposits via ABA PayWay" },
  { icon: "users", label: "Group sessions, multi-staff" },
  { icon: "telegram", label: "Telegram alerts for staff" },
  { icon: "bell", label: "Automatic booking reminders" },
  { icon: "clock", label: "Apply in under 2 minutes" },
];

export const appFeatures: { icon: IconName; label: string }[] = [
  { icon: "phone", label: "Book in a few taps" },
  { icon: "bell", label: "Reminders before every visit" },
  { icon: "clock", label: "Reschedule on the go" },
  { icon: "user", label: "Same account as the web" },
];

// ── Discovery layout only ────────────────────────────────────────────
export type Partner = {
  name: string;
  area: string;
  category: string;
  reviews: number;
  rating: string;
  tone: string;
  badge?: string;
};

export const recommended: Partner[] = [
  { name: "Aura Spa & Wellness", area: "BKK1, Phnom Penh", category: "Massage & Spa", reviews: 128, rating: "5.0", tone: "a", badge: "Featured" },
  { name: "Sharp Fade Barbers", area: "Toul Kork, Phnom Penh", category: "Barbershop", reviews: 96, rating: "4.9", tone: "b", badge: "Featured" },
  { name: "Polished Nail Atelier", area: "Aeon 1, Phnom Penh", category: "Nail Salon", reviews: 214, rating: "4.8", tone: "c", badge: "Featured" },
  { name: "Serenity Spa Lounge", area: "Riverside, Phnom Penh", category: "Massage & Spa", reviews: 342, rating: "5.0", tone: "d", badge: "Featured" },
];

export const newToKoksin: Partner[] = [
  { name: "Furry Friends Spa", area: "Wat Bo, Siem Reap", category: "Pet Grooming", reviews: 12, rating: "5.0", tone: "c", badge: "New" },
  { name: "Riverside Med Spa", area: "Riverside, Phnom Penh", category: "Facial & Skincare", reviews: 8, rating: "4.9", tone: "d", badge: "New" },
  { name: "Sun Salutation Yoga", area: "BKK3, Phnom Penh", category: "Yoga Studio", reviews: 21, rating: "5.0", tone: "a", badge: "New" },
  { name: "Bright Home Services", area: "Chamkarmon, Phnom Penh", category: "Cleaning Service", reviews: 15, rating: "4.8", tone: "b", badge: "New" },
];

export const trending: Partner[] = [
  { name: "Needle & Thread Studio", area: "Toul Tom Poung, Phnom Penh", category: "Tattoo & Piercing", reviews: 87, rating: "4.9", tone: "b" },
  { name: "Glow Brow Bar", area: "Daun Penh, Phnom Penh", category: "Brows & Lashes", reviews: 156, rating: "5.0", tone: "c" },
  { name: "Riverside Auto Detail", area: "Chroy Changvar, Phnom Penh", category: "Car Wash & Detailing", reviews: 64, rating: "4.8", tone: "d" },
  { name: "Iron House Gym", area: "Sen Sok, Phnom Penh", category: "Gym & Personal Training", reviews: 231, rating: "4.9", tone: "a" },
];

export const reviews = [
  {
    title: "Booked in under a minute",
    body: "I found a barber near my office, saw the real free slots, and had the confirmation on Telegram before I finished my coffee.",
    name: "Sokha",
    place: "Phnom Penh",
  },
  {
    title: "No more DM back-and-forth",
    body: "Before this I messaged three salons and waited all afternoon. Here I picked the time myself and it was held for me straight away.",
    name: "Chariya",
    place: "Siem Reap",
  },
  {
    title: "The reminders are the best part",
    body: "I get a message the day before every appointment, with the address. I have not missed a massage since I started using KOKSIN.",
    name: "Dara",
    place: "Battambang",
  },
  {
    title: "Great for the whole family",
    body: "Pet grooming, my daughter's nails, and the car wash — all booked from one account. Paying the deposit with KHQR is easy.",
    name: "Leakhena",
    place: "Kampot",
  },
];

export const cityLinks: { city: string; links: string[] }[] = [
  { city: "Phnom Penh", links: ["Hair Salons in Phnom Penh", "Nail Salons in Phnom Penh", "Barbers in Phnom Penh", "Massage in Phnom Penh", "Spas in Phnom Penh", "Gyms in Phnom Penh"] },
  { city: "Siem Reap", links: ["Hair Salons in Siem Reap", "Nail Salons in Siem Reap", "Barbers in Siem Reap", "Massage in Siem Reap", "Spas in Siem Reap", "Yoga in Siem Reap"] },
  { city: "Preah Sihanouk", links: ["Hair Salons in Sihanoukville", "Nail Salons in Sihanoukville", "Barbers in Sihanoukville", "Massage in Sihanoukville", "Spas in Sihanoukville", "Car Wash in Sihanoukville"] },
  { city: "Battambang", links: ["Hair Salons in Battambang", "Nail Salons in Battambang", "Barbers in Battambang", "Massage in Battambang", "Cleaning in Battambang", "Pet Grooming in Battambang"] },
  { city: "Kampot", links: ["Hair Salons in Kampot", "Nail Salons in Kampot", "Barbers in Kampot", "Massage in Kampot", "Spas in Kampot", "Laundry in Kampot"] },
];
