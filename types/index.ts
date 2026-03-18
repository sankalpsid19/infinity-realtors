export interface Agent {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  imageUrl: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  city: string;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  area: number; // in sq ft
  type: "apartment" | "villa" | "plot" | "commercial";
  status: "available" | "sold" | "rented";
  amenities: string[];
  agentId: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // identifier for lucide-react icon
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Inquiry {
  id: string;
  propertyId?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: "new" | "contacted" | "closed";
  createdAt: string;
}
