import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import { Property } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="group overflow-hidden border-transparent hover:border-border hover:shadow-xl transition-all duration-300">
      <Link href={`/properties/${property.id}`}>
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={property.images[0]}
            alt={property.title}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            {property.featured && (
              <Badge className="bg-primary hover:bg-primary font-medium tracking-wide shadow-md">
                FEATURED
              </Badge>
            )}
            <Badge variant="secondary" className="font-medium tracking-wide shadow-md capitalize bg-white/90 text-zinc-900 border-none">
              {property.type}
            </Badge>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
            <p className="text-2xl font-bold text-white tracking-tight">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
              }).format(property.price)}
            </p>
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="font-serif text-xl font-bold text-foreground line-clamp-1 mb-2 group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          <p className="text-muted-foreground text-sm flex items-center gap-1.5 line-clamp-1">
            <MapPin className="h-4 w-4 shrink-0" />
            {property.location}
          </p>
        </CardContent>
        <CardFooter className="p-5 pt-0 flex justify-between items-center text-sm text-muted-foreground border-t border-border/50 mt-2 pb-5">
          {property.type !== "plot" && property.type !== "commercial" ? (
            <>
              <div className="flex items-center gap-1.5 flex-1 justify-center first:justify-start">
                <Bed className="h-4 w-4" />
                <span>{property.bedrooms} Beds</span>
              </div>
              <div className="h-4 w-[1px] bg-border/50 mx-2" />
              <div className="flex items-center gap-1.5 flex-1 justify-center">
                <Bath className="h-4 w-4" />
                <span>{property.bathrooms} Baths</span>
              </div>
            </>
          ) : null}
          <div className="h-4 w-[1px] bg-border/50 mx-2 hidden sm:block" />
          <div className="flex items-center gap-1.5 flex-1 justify-center last:justify-end">
            <Square className="h-4 w-4" />
            <span>{property.area} sq.ft</span>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
