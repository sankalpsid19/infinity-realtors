import { agents } from "@/lib/data";
import { CheckCircle2, ShieldCheck, Trophy } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-zinc-900 text-white pt-20 pb-32 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Setting the Standard in Luxury Real Estate</h1>
          <p className="text-xl text-zinc-300 font-light leading-relaxed">
            For over two decades, Infinity Realtors has been synonymous with premium properties, 
            transparent dealings, and unparalleled client service across India.
          </p>
        </div>
      </section>

      {/* Our Story / Values */}
      <section className="py-24 bg-white dark:bg-zinc-950 -mt-12 relative z-10 rounded-t-[3rem]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold">Integrity</h3>
              <p className="text-muted-foreground">Complete transparency in every transaction, ensuring our clients' interests always come first.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold">Excellence</h3>
              <p className="text-muted-foreground">A curated portfolio of only the finest properties meeting rigorous quality standards.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold">Reliability</h3>
              <p className="text-muted-foreground">A proven track record of delivering successful outcomes for over 850 families and investors.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2004, Infinity Realtors began with a simple mission: to elevate the real estate 
                  experience for buyers and sellers of premium properties in India. What started as a small 
                  boutique agency in Mumbai has grown into a nationwide network of elite property consultants.
                </p>
                <p>
                  We understand that a home is more than an asset—it's a sanctuary, a legacy, and a reflection 
                  of your achievements. That's why we take a highly personalized approach, taking the time to 
                  understand your unique lifestyle and investment goals before presenting tailored options.
                </p>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Architecture" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Meet the Experts</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our seasoned advisors bring decades of combined experience and deep market insights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {agents.map((agent) => (
              <div key={agent.id} className="group">
                <div className="relative aspect-[3/4] mb-6 rounded-2xl overflow-hidden bg-zinc-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={agent.imageUrl} 
                    alt={agent.name} 
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <a href={`tel:${agent.phone}`} className="text-white text-sm hover:text-primary mb-1 block">{agent.phone}</a>
                    <a href={`mailto:${agent.email}`} className="text-white text-sm hover:text-primary block">{agent.email}</a>
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">{agent.name}</h3>
                <p className="text-muted-foreground font-medium">{agent.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
