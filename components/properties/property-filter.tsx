"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PropertyFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [city, setCity] = React.useState(searchParams.get("city") || "");
  const [type, setType] = React.useState(searchParams.get("type") || "");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (city) params.set("city", city);
    if (type) params.set("type", type);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="bg-white dark:bg-zinc-950 p-4 rounded-xl shadow-lg border border-border/50 -mt-8 relative z-10 max-w-4xl mx-auto w-full">
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="city" className="sr-only">City</label>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full h-12 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Any City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Goa">Goa</option>
            <option value="Pune">Pune</option>
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="type" className="sr-only">Property Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full h-12 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Any Type</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="commercial">Commercial</option>
            <option value="plot">Plot</option>
          </select>
        </div>
        <Button size="lg" type="submit" className="h-12 w-full sm:w-auto px-8 gap-2">
          <Search className="h-4 w-4" />
          Search
        </Button>
      </form>
    </div>
  );
}
