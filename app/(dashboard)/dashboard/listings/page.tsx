import { properties } from "@/lib/data";
import { Plus, Search, MoreVertical, Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function ListingsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-serif tracking-tight">Properties</h2>
          <p className="text-muted-foreground mt-1">Manage your real estate portfolio.</p>
        </div>
        <Button className="shrink-0 gap-2">
          <Plus className="h-4 w-4" />
          Add Property
        </Button>
      </div>

      <div className="bg-white dark:bg-zinc-950 border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-border bg-zinc-50/50 dark:bg-zinc-900/50 flex items-center justify-between gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search properties..." className="pl-9 bg-white dark:bg-zinc-900 w-full" />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden sm:flex">Filter</Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-zinc-50 dark:bg-zinc-900 border-b border-border">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium">Property</th>
                <th scope="col" className="px-6 py-4 font-medium">Location</th>
                <th scope="col" className="px-6 py-4 font-medium">Price</th>
                <th scope="col" className="px-6 py-4 font-medium">Status</th>
                <th scope="col" className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {properties.map((property) => (
                <tr key={property.id} className="hover:bg-muted/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 shrink-0 rounded-md overflow-hidden bg-zinc-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={property.images[0]} alt={property.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="font-medium text-foreground line-clamp-1 max-w-[200px]" title={property.title}>
                        {property.title}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {property.city}
                  </td>
                  <td className="px-6 py-4 font-medium whitespace-nowrap">
                    {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(property.price)}
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={property.status === 'available' ? 'success' : 'secondary'} className="uppercase text-[10px]">
                      {property.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-red-600">
                        <Trash className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground md:hidden opacity-100">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-border bg-zinc-50/50 dark:bg-zinc-900/50 text-xs text-muted-foreground flex items-center justify-between">
          <span>Showing 1 to {properties.length} of {properties.length} entries</span>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm" disabled>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
