import { services } from "@/lib/data";
import { ArrowRight, Home, TrendingUp, Key, Briefcase, Scale, PenTool } from "lucide-react";

// Helper to map string identifiers to icons since we can't easily dynamically load them
const iconMap: Record<string, React.ReactNode> = {
  "home": <Home className="w-8 h-8" />,
  "trending-up": <TrendingUp className="w-8 h-8" />,
  "key": <Key className="w-8 h-8" />,
  "briefcase": <Briefcase className="w-8 h-8" />,
  "scale": <Scale className="w-8 h-8" />,
  "pen-tool": <PenTool className="w-8 h-8" />
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-zinc-900 text-white pt-20 pb-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed">
            A comprehensive suite of bespoke real estate services designed to fulfill 
            every requirement of the discerning client.
          </p>
        </div>
      </section>

      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:border-primary/50 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {iconMap[service.icon] || <ArrowRight className="w-8 h-8" />}
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  {service.description}
                </p>
                <div className="w-12 h-1 bg-primary/20 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
