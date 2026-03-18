import { properties, inquiries, agents } from "@/lib/data";
import { Building, MessageSquare, IndianRupee, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  const activeListings = properties.length;
  const newInquiries = inquiries.filter(i => i.status === "new").length;
  
  // Calculate total portfolio value
  const totalValue = properties.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold font-serif tracking-tight">Overview</h2>
        <p className="text-muted-foreground mt-2">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-none border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeListings}</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-none border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Inquiries</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{newInquiries}</div>
            <p className="text-xs text-muted-foreground">Requiring attention</p>
          </CardContent>
        </Card>

        <Card className="shadow-none border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ₹{(totalValue / 10000000).toFixed(1)} Cr
            </div>
            <p className="text-xs text-muted-foreground">Cumulative valuation</p>
          </CardContent>
        </Card>

        <Card className="shadow-none border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{agents.length}</div>
            <p className="text-xs text-muted-foreground">Across all locations</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent Inquiries Quick View */}
      <h3 className="text-xl font-bold font-serif mt-12 mb-4">Recent Inquiries</h3>
      <div className="rounded-xl border border-border bg-white dark:bg-zinc-950 overflow-hidden shadow-sm">
        <div className="divide-y divide-border">
          {inquiries.slice(0, 3).map((inquiry) => (
            <div key={inquiry.id} className="p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
              <div>
                <p className="font-semibold">{inquiry.name}</p>
                <p className="text-sm text-muted-foreground">{inquiry.email}</p>
              </div>
              <div className="text-right">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium uppercase
                  ${inquiry.status === 'new' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' : 
                    inquiry.status === 'contacted' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300' : 
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'}`}>
                  {inquiry.status}
                </span>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(inquiry.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
