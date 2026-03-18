import { inquiries } from "@/lib/data";
import { Search, MoreVertical, Mail, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function InquiriesPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-serif tracking-tight">Inquiries</h2>
          <p className="text-muted-foreground mt-1">Review and respond to client messages.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-950 border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-border bg-zinc-50/50 dark:bg-zinc-900/50 flex items-center justify-between gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search inquiries..." className="pl-9 bg-white dark:bg-zinc-900 w-full" />
          </div>
          <div className="flex items-center gap-2">
            <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background md:w-[150px]">
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-zinc-50 dark:bg-zinc-900 border-b border-border">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium">Client Info</th>
                <th scope="col" className="px-6 py-4 font-medium hidden md:table-cell">Property ID</th>
                <th scope="col" className="px-6 py-4 font-medium">Message</th>
                <th scope="col" className="px-6 py-4 font-medium">Date</th>
                <th scope="col" className="px-6 py-4 font-medium">Status</th>
                <th scope="col" className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {inquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-muted/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">{inquiry.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <Mail className="h-3 w-3" />
                      {inquiry.email}
                    </div>
                    {inquiry.phone && (
                      <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <Phone className="h-3 w-3" />
                        {inquiry.phone}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-muted-foreground hidden md:table-cell">
                    {inquiry.propertyId || "General"}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    <div className="line-clamp-2 max-w-xs" title={inquiry.message}>
                      {inquiry.message}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                    {new Date(inquiry.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider
                      ${inquiry.status === 'new' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' : 
                        inquiry.status === 'contacted' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300' : 
                        'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'}`}>
                      {inquiry.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {inquiry.status !== 'closed' && (
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-green-600" title="Mark as closed">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      )}
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary" title="Reply">
                        <Mail className="h-4 w-4" />
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
          <span>Showing 1 to {inquiries.length} of {inquiries.length} entries</span>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm" disabled>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
