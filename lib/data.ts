import { Property, Agent, Service, Testimonial, Inquiry } from "@/types";

export const agents: Agent[] = [
  {
    id: "agent-1",
    name: "Vikram Sharma",
    role: "Senior Partner",
    phone: "+91 98765 43210",
    email: "vikram@infinityrealtors.in",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256",
  },
  {
    id: "agent-2",
    name: "Neha Desai",
    role: "Luxury Property Consultant",
    phone: "+91 98765 43211",
    email: "neha@infinityrealtors.in",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256&h=256",
  },
  {
    id: "agent-3",
    name: "Rahul Verma",
    role: "Commercial Specialist",
    phone: "+91 98765 43212",
    email: "rahul@infinityrealtors.in",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256&h=256",
  },
  {
    id: "agent-4",
    name: "Pooja Singh",
    role: "Residential Advisor",
    phone: "+91 98765 43213",
    email: "pooja@infinityrealtors.in",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256&h=256",
  }
];

export const properties: Property[] = [
  {
    id: "prop-1",
    title: "Sea-facing Penthouse in Worli",
    description: "Experience unparalleled luxury in this exquiste sea-facing penthouse offering panoramic views of the Arabian Sea. Features include Italian marble flooring, a private terrace pool, and state-of-the-art home automation.",
    price: 450000000, // ₹45 Cr
    location: "Worli, Mumbai",
    city: "Mumbai",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200"
    ],
    bedrooms: 5,
    bathrooms: 6,
    area: 4500,
    type: "apartment",
    status: "available",
    amenities: ["Private Pool", "Sea View", "Home Theater", "Gym", "Smart Home"],
    agentId: "agent-1",
    featured: true,
  },
  {
    id: "prop-2",
    title: "Modern Villa in Assagao",
    description: "A beautifully designed modern Portuguese-style villa nestled in the lush greens of Assagao. Perfect as a vacation home or investment, featuring a private pool and landscaped gardens.",
    price: 120000000, // ₹12 Cr
    location: "Assagao, North Goa",
    city: "Goa",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=1200"
    ],
    bedrooms: 4,
    bathrooms: 4,
    area: 3200,
    type: "villa",
    status: "available",
    amenities: ["Private Pool", "Garden", "Servant Quarters", "Power Backup"],
    agentId: "agent-2",
    featured: true,
  },
  {
    id: "prop-3",
    title: "Premium Apartment in Koramangala",
    description: "Spacious and naturally lit 3BHK apartment in the heart of Bangalore's tech hub. Premium fittings, dedicated parking, and access to a clubhouse.",
    price: 35000000, // ₹3.5 Cr
    location: "Koramangala, Bangalore",
    city: "Bangalore",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200"
    ],
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    type: "apartment",
    status: "available",
    amenities: ["Clubhouse", "Swimming Pool", "Gym", "Security"],
    agentId: "agent-4",
  },
  {
    id: "prop-4",
    title: "Luxury Farmhouse Estate",
    description: "Spread over 2 acres, this grand farmhouse offers the ultimate escape from the city. Includes a sprawling lawn, a massive swimming pool, and a dedicated entertainment zone.",
    price: 280000000, // ₹28 Cr
    location: "Chattarpur, Delhi",
    city: "Delhi",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
    ],
    bedrooms: 6,
    bathrooms: 7,
    area: 8500,
    type: "villa",
    status: "available",
    amenities: ["Large Lawn", "Pool", "Guest House", "Staff Quarters", "Security"],
    agentId: "agent-1",
    featured: true,
  },
  {
    id: "prop-5",
    title: "Commercial Office Space",
    description: "Fully furnished grade-A office space in a prime business park. Ready to move in with cabins, workstations, and a high-tech conference room.",
    price: 85000000, // ₹8.5 Cr
    location: "Bandra Kurla Complex, Mumbai",
    city: "Mumbai",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
    ],
    bedrooms: 0,
    bathrooms: 2,
    area: 1500,
    type: "commercial",
    status: "available",
    amenities: ["Central AC", "Cafeteria", "Conference Room", "Covered Parking"],
    agentId: "agent-3",
  },
  {
    id: "prop-6",
    title: "Riverside Plot in Pune",
    description: "A rare opportunity to build your dream home on this premium riverside plot in a gated community.",
    price: 15000000, // ₹1.5 Cr
    location: "Koregaon Park Annex, Pune",
    city: "Pune",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200"
    ],
    bedrooms: 0,
    bathrooms: 0,
    area: 5000,
    type: "plot",
    status: "sold",
    amenities: ["Gated Community", "River View", "Clubhouse Access"],
    agentId: "agent-2",
  },
  {
    id: "prop-7",
    title: "Duplex in South Extension",
    description: "Elegant duplex apartment with a private terrace. Centrally located with easy access to premium markets and schools.",
    price: 65000000, // ₹6.5 Cr
    location: "South Extension, Delhi",
    city: "Delhi",
    images: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200"
    ],
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    type: "apartment",
    status: "available",
    amenities: ["Private Terrace", "Park Facing", "100% Power Backup"],
    agentId: "agent-4",
    featured: true,
  },
  {
    id: "prop-8",
    title: "Seaside Studio",
    description: "Compact and chic studio apartment right on the beach. Perfect for a bachelor pad or a high-yield rental investment.",
    price: 18000000, // ₹1.8 Cr
    location: "Candolim, Goa",
    city: "Goa",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1e0bc30e38?auto=format&fit=crop&q=80&w=1200"
    ],
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    type: "apartment",
    status: "available",
    amenities: ["Beach Access", "Fully Furnished", "Pool"],
    agentId: "agent-2",
  }
];

export const services: Service[] = [
  {
    id: "srv-1",
    title: "Property Buying",
    description: "Hand-picked premium listings tailored to your specific requirements and lifestyle.",
    icon: "home"
  },
  {
    id: "srv-2",
    title: "Property Selling",
    description: "Strategic marketing and wide network reach to ensure you get the best value for your property.",
    icon: "trending-up"
  },
  {
    id: "srv-3",
    title: "Luxury Rentals",
    description: "Curated collection of high-end apartments and villas available for short or long-term lease.",
    icon: "key"
  },
  {
    id: "srv-4",
    title: "Property Management",
    description: "End-to-end management of your asset including maintenance, tenant screening, and rent collection.",
    icon: "briefcase"
  },
  {
    id: "srv-5",
    title: "Legal Assistance",
    description: "Expert legal team to ensure seamless title verification, documentation, and compliance.",
    icon: "scale"
  },
  {
    id: "srv-6",
    title: "Interior Design",
    description: "Partner with top interior designers to transform your empty space into a bespoke home.",
    icon: "pen-tool"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Arjun Singhania",
    role: "CEO, TechVentures",
    content: "Infinity Realtors found us the perfect office space in BKC. Their understanding of commercial real estate and negotiation skills are unmatched.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Meera Kapoor",
    role: "Homeowner",
    content: "Selling our ancestral home was an emotional journey, but Vikram and his team handled everything with immense grace and professionalism.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Rohan & Priya",
    role: "First-time Buyers",
    content: "We felt completely supported throughout the buying process. They showed us properties we didn't even know existed and handled all the paperwork.",
    rating: 4.5
  },
  {
    id: "test-4",
    name: "Sarah Fernandes",
    role: "Investor",
    content: "I have diversified my portfolio with three properties through Infinity. Their property management service gives me complete peace of mind.",
    rating: 5
  }
];

export const inquiries: Inquiry[] = [
  {
    id: "inq-1",
    propertyId: "prop-1",
    name: "Amitabh Raj",
    email: "araj@example.com",
    phone: "+91 99999 88888",
    message: "I am interested in the Worli Penthouse. Can we schedule a viewing this weekend?",
    status: "new",
    createdAt: "2024-03-10T10:00:00Z"
  },
  {
    id: "inq-2",
    name: "Sunita Reddy",
    email: "s.reddy@example.com",
    phone: "+91 77777 66666",
    message: "Looking for a 3BHK in Bangalore, preferably near Indiranagar or Koramangala. Budget up to 4Cr.",
    status: "contacted",
    createdAt: "2024-03-09T14:30:00Z"
  },
  {
    id: "inq-3",
    propertyId: "prop-4",
    name: "Karan Johar",
    email: "kj@example.com",
    phone: "+91 88888 77777",
    message: "Is the Chattarpur farmhouse price negotiable?",
    status: "closed",
    createdAt: "2024-03-05T09:15:00Z"
  }
];

// Helper to simulate a latency if needed
export const db = {
  properties,
  agents,
  services,
  testimonials,
  inquiries
};
