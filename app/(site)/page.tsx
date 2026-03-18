import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/properties/property-card";
import { properties, services, testimonials } from "@/lib/data";

export default function HomePage() {
  const featuredProperties = properties.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury home exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center text-white space-y-8 max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight drop-shadow-lg">
            Find Your <span className="text-primary italic">Dream Home</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-200 drop-shadow max-w-2xl mx-auto font-light">
            Discover a curated collection of India's most exclusive premium real estate. We don't just sell houses, we find your sanctuary.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full" asChild>
              <Link href="/properties">
                Browse Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-md text-lg px-8 py-6 rounded-full" asChild>
              <Link href="/contact">Speak to an Advisor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-primary-foreground/20">
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold font-serif tabular-nums">1.2K+</h3>
              <p className="text-primary-foreground/80 font-medium">Premium Properties</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold font-serif tabular-nums">850+</h3>
              <p className="text-primary-foreground/80 font-medium">Happy Families</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold font-serif tabular-nums">15+</h3>
              <p className="text-primary-foreground/80 font-medium">Cities Covered</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold font-serif tabular-nums">20 Yrs</h3>
              <p className="text-primary-foreground/80 font-medium">Industry Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Exclusive Collection</span>
              <h2 className="font-serif text-4xl font-bold mt-2">Featured Properties</h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Hand-picked luxury homes offering unmatched elegance and prime locations.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/properties">View All Properties</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white dark:bg-zinc-900 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">What We Offer</span>
          <h2 className="font-serif text-4xl font-bold mt-2 mb-16">Comprehensive Real Estate Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <div key={service.id} className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="h-12 w-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                  {/* Icon placeholder since we cant dynamically load lucide icons easily by string name without a map, we'll use a generic one */}
                   <ArrowRight className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="ghost" className="font-semibold text-primary" asChild>
               <Link href="/services">
                 Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="font-serif text-4xl font-bold mt-2 mb-16 text-white">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50 relative">
                <div className="text-primary mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.floor(t.rating) ? 'fill-primary' : 'text-zinc-600'}`} />
                  ))}
                </div>
                <p className="text-zinc-300 italic mb-6 relative z-10">"{t.content}"</p>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-zinc-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
