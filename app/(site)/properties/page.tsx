import { Suspense } from "react";
import { properties } from "@/lib/data";
import { PropertyCard } from "@/components/properties/property-card";
import { PropertyFilter } from "@/components/properties/property-filter";

export default async function PropertiesPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const cityQuery = searchParams?.city as string;
  const typeQuery = searchParams?.type as string;

  let filteredProperties = properties;

  if (cityQuery) {
    filteredProperties = filteredProperties.filter((p) => p.city.toLowerCase() === cityQuery.toLowerCase());
  }

  if (typeQuery) {
    filteredProperties = filteredProperties.filter((p) => p.type.toLowerCase() === typeQuery.toLowerCase());
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header Banner */}
      <section className="bg-zinc-900 text-white pt-10 pb-20 px-4 sm:px-6 lg:px-8 text-center relative">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Properties</h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          Explore our exclusive portfolio of premium residential and commercial spaces across India.
        </p>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <Suspense fallback={<div className="h-16 w-full -mt-8 relative z-10" />}>
          <PropertyFilter />
        </Suspense>

        <div className="mt-12 flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-bold text-foreground">{filteredProperties.length}</span> properties
            {(cityQuery || typeQuery) && " matching your criteria"}
          </p>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white dark:bg-zinc-900 rounded-2xl border border-dashed">
            <h3 className="text-xl font-bold mb-2">No properties found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </div>
  );
}
