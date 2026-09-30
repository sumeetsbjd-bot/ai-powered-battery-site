export interface ProductSpec {
  voltage: string;
  capacity: string;
  cca: string;
  size: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  warranty: string;
  specs: ProductSpec;
  fitsCars: string[];
  badge: string;
  description: string;
  descriptionBM: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  nameBM: string;
  icon: string;
  description: string;
  descriptionBM: string;
  count?: number;
}

export const categories: Category[] = [
  { id: "car", name: "Car Batteries", nameBM: "Bateri Kereta", icon: "🚗", description: "Premium batteries for all car brands", descriptionBM: "Bateri premium untuk semua jenama kereta" },
  { id: "motorcycle", name: "Motorcycle Batteries", nameBM: "Bateri Motosikal", icon: "🏍️", description: "Reliable power for your ride", descriptionBM: "Kuasa boleh dipercayai untuk tunggangan anda" },
  { id: "truck", name: "Truck & Commercial", nameBM: "Trak & Komersial", icon: "🚛", description: "Heavy-duty for commercial vehicles", descriptionBM: "Tugas berat untuk kenderaan komersial" },
  { id: "marine", name: "Marine Batteries", nameBM: "Bateri Marin", icon: "⛵", description: "Deep cycle batteries for boats", descriptionBM: "Bateri kitaran dalam untuk bot" },
];

export const products: Product[] = [
  {
    id: "amaron-go-ns60", name: "Amaron GO NS60", category: "car",
    price: 235, originalPrice: 280, rating: 4.8, reviews: 342, warranty: "24 months",
    specs: { voltage: "12V", capacity: "45Ah", cca: "400A", size: "NS60" },
    fitsCars: ["Perodua Myvi", "Perodua Axia", "Proton Saga", "Honda City", "Toyota Vios"],
    badge: "Best Seller", inStock: true,
    description: "High-performance maintenance-free battery with superior cranking power.",
    descriptionBM: "Bateri tanpa penyelenggaraan berprestasi tinggi dengan kuasa pencucuhan unggul."
  },
  {
    id: "century-ns70", name: "Century Marathon NS70", category: "car",
    price: 310, originalPrice: 365, rating: 4.7, reviews: 218, warranty: "18 months",
    specs: { voltage: "12V", capacity: "65Ah", cca: "480A", size: "NS70" },
    fitsCars: ["Toyota Camry", "Honda Accord", "Proton Perdana", "Nissan X-Trail", "Mazda CX-5"],
    badge: "Popular", inStock: true,
    description: "Reliable battery for medium to large sedans and SUVs.",
    descriptionBM: "Bateri yang boleh dipercayai untuk sedan sederhana hingga besar dan SUV."
  },
  {
    id: "varta-din66", name: "VARTA Blue Dynamic DIN66", category: "car",
    price: 420, originalPrice: 490, rating: 4.9, reviews: 156, warranty: "30 months",
    specs: { voltage: "12V", capacity: "66Ah", cca: "570A", size: "DIN66" },
    fitsCars: ["BMW 3 Series", "Mercedes C-Class", "Volkswagen Passat", "Audi A4", "Volvo S60"],
    badge: "Premium", inStock: true,
    description: "European quality battery for continental vehicles.",
    descriptionBM: "Bateri berkualiti Eropah untuk kenderaan continental."
  },
  {
    id: "yokohama-ytx7", name: "Yokohama YTX7A-BS", category: "motorcycle",
    price: 85, originalPrice: 110, rating: 4.6, reviews: 189, warranty: "12 months",
    specs: { voltage: "12V", capacity: "6Ah", cca: "105A", size: "YTX7A-BS" },
    fitsCars: ["Honda Wave", "Yamaha LC135", "Yamaha Y15ZR", "Honda EX5", "Modenas Kriss"],
    badge: "Value Pick", inStock: true,
    description: "Affordable motorcycle battery for daily commuting.",
    descriptionBM: "Bateri motosikal mampu milik untuk perjalanan harian."
  },
  {
    id: "yuasa-ytx9", name: "Yuasa YTX9-BS", category: "motorcycle",
    price: 125, originalPrice: 155, rating: 4.8, reviews: 97, warranty: "12 months",
    specs: { voltage: "12V", capacity: "8Ah", cca: "135A", size: "YTX9-BS" },
    fitsCars: ["Kawasaki Z250", "Honda CBR250", "Yamaha R25", "KTM Duke 200"],
    badge: "Best Seller", inStock: true,
    description: "Premium motorcycle battery for sport bikes.",
    descriptionBM: "Bateri motosikal premium untuk motosikal sukan."
  },
  {
    id: "century-n120", name: "Century N120 Heavy Duty", category: "truck",
    price: 580, originalPrice: 680, rating: 4.7, reviews: 64, warranty: "18 months",
    specs: { voltage: "12V", capacity: "120Ah", cca: "750A", size: "N120" },
    fitsCars: ["Isuzu NPR", "Hino 300", "Mitsubishi Canter", "Toyota Dyna"],
    badge: "Heavy Duty", inStock: true,
    description: "High-capacity battery for trucks and commercial vehicles.",
    descriptionBM: "Bateri berkapasiti tinggi untuk trak dan kenderaan komersial."
  },
  {
    id: "optima-d31m", name: "Optima Blue Top D31M", category: "marine",
    price: 950, originalPrice: 1100, rating: 4.9, reviews: 38, warranty: "36 months",
    specs: { voltage: "12V", capacity: "75Ah", cca: "900A", size: "D31M" },
    fitsCars: ["Fishing Boats", "Yachts", "Jet Skis", "Pontoon Boats"],
    badge: "Premium", inStock: true,
    description: "Ultimate dual-purpose marine battery.",
    descriptionBM: "Bateri marin dwi-guna terbaik."
  },
  {
    id: "amaron-din55", name: "Amaron PRO DIN55", category: "car",
    price: 340, originalPrice: 399, rating: 4.7, reviews: 201, warranty: "24 months",
    specs: { voltage: "12V", capacity: "55Ah", cca: "480A", size: "DIN55" },
    fitsCars: ["Hyundai Elantra", "Kia Cerato", "Peugeot 308", "Renault Fluence"],
    badge: "Top Rated", inStock: true,
    description: "Versatile DIN battery for Asian and European cars.",
    descriptionBM: "Bateri DIN serba boleh untuk kereta Asia dan Eropah."
  },
];
