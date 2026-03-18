import type { Metadata } from "next";
import Link from "next/link";
import { Building2, LayoutDashboard, Home, MessageSquare, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Dashboard - Infinity Realtors",
  description: "Manage your properties and inquiries",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-border hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-border">
          <Link href="/" className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="font-serif text-xl font-bold tracking-tight">Infinity</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link 
            href="/dashboard" 
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          >
            <LayoutDashboard className="h-5 w-5" />
            Overview
          </Link>
          <Link 
            href="/dashboard/listings" 
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          >
            <Home className="h-5 w-5" />
            Listings
          </Link>
          <Link 
            href="/dashboard/inquiries" 
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          >
            <MessageSquare className="h-5 w-5" />
            Inquiries
          </Link>
        </nav>

        <div className="p-4 border-t border-border space-y-2">
          <Link 
            href="#" 
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/50 dark:hover:text-red-500 text-muted-foreground transition-colors">
            <LogOut className="h-5 w-5" />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content Context */}
      <div className="flex-1 flex flex-col">
        <header className="h-20 bg-white dark:bg-zinc-900 border-b border-border flex items-center justify-end px-8 md:hidden">
            <Link href="/" className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
            </Link>
        </header>
        <main className="flex-1 p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
