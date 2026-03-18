import { notFound } from "next/navigation";
import { Bed, Bath, Square, MapPin, Check } from "lucide-react";
import { properties, agents } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default async function PropertyDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await props.params;
  const property = properties.find((p) => p.id === resolvedParams.id);
  
  if (!property) {
    notFound();
  }

  const agent = agents.find((a) => a.id === property.agentId);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-24">
      {/* Hero Image Gallery */}
      <div className="w-full h-[60vh] md:h-[70vh] relative bg-zinc-900 group">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="container mx-auto">
            <div className="flex gap-2 mb-4">
              <Badge className="bg-primary hover:bg-primary font-medium tracking-wide shadow-md uppercase">
                {property.status}
              </Badge>
              <Badge variant="secondary" className="font-medium tracking-wide shadow-md capitalize bg-white/90 text-zinc-900 border-none">
                {property.type}
              </Badge>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">
              {property.title}
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl flex items-center gap-2 drop-shadow-md">
              <MapPin className="h-5 w-5" />
              {property.location}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview Bar */}
            <div className="flex flex-wrap items-center justify-between gap-6 p-6 md:p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-border">
              <div className="space-y-1 text-center md:text-left">
                <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">Price</p>
                <p className="text-3xl font-bold text-primary">
                  {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(property.price)}
                </p>
              </div>
              <div className="h-12 w-[1px] bg-border hidden md:block" />
              <div className="flex gap-8">
                {property.bedrooms > 0 && (
                  <div className="space-y-1 text-center">
                    <Bed className="h-6 w-6 mx-auto text-muted-foreground" />
                    <p className="font-semibold text-lg">{property.bedrooms}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Beds</p>
                  </div>
                )}
                {property.bathrooms > 0 && (
                  <div className="space-y-1 text-center">
                    <Bath className="h-6 w-6 mx-auto text-muted-foreground" />
                    <p className="font-semibold text-lg">{property.bathrooms}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Baths</p>
                  </div>
                )}
                <div className="space-y-1 text-center">
                  <Square className="h-6 w-6 mx-auto text-muted-foreground" />
                  <p className="font-semibold text-lg">{property.area}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Sq.Ft.</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">About this property</h2>
              <div className="prose prose-zinc dark:prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
                <p>{property.description}</p>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Gallery Grid */}
            {property.images.length > 1 && (
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  {property.images.slice(1).map((src, idx) => (
                    <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt={`${property.title} - Image ${idx + 2}`} className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar / Contact Agent */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <Card className="border-border shadow-md">
                <CardContent className="p-6 md:p-8">
                  <h3 className="font-serif text-2xl font-bold mb-6 text-center">Interested?</h3>
                  
                  {agent && (
                    <div className="flex items-center gap-4 mb-8 p-4 bg-muted/50 rounded-xl border border-border/50">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={agent.imageUrl} alt={agent.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
                      <div>
                        <p className="font-bold text-lg">{agent.name}</p>
                        <p className="text-sm text-primary font-medium">{agent.role}</p>
                      </div>
                    </div>
                  )}

                  <form className="space-y-4" action="javascript:void(0)">
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="name">Full Name</label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="email">Email Address</label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="phone">Phone Number</label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="message">Message</label>
                      <Textarea 
                        id="message" 
                        placeholder="I'm interested in this property..." 
                        defaultValue={`Hi, I'm interested in the "${property.title}" and would like to schedule a viewing.`} 
                        rows={4}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full text-base">
                      Contact Agent
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
