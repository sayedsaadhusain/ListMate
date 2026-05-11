import Link from "next/link";
import { Rocket, FileText, Home, LogOut, BarChart3 } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-card hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="font-heading font-bold text-xl tracking-tight">ListMate</span>
          </Link>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors">
            <Home className="h-5 w-5" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link href="/dashboard/documents" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary transition-colors">
            <FileText className="h-5 w-5" />
            <span className="font-medium">Documents</span>
          </Link>
          <Link href="/dashboard/analytics" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors">
            <BarChart3 className="h-5 w-5" />
            <span className="font-medium">Analytics</span>
          </Link>
        </nav>
        
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              CA
            </div>
            <div>
              <p className="font-medium text-sm">Cafe Aroma</p>
              <p className="text-xs text-muted-foreground">Free Plan</p>
            </div>
          </div>
          <button className="flex w-full items-center gap-3 px-3 py-2 mt-4 rounded-lg text-muted-foreground hover:bg-white/5 hover:text-red-400 transition-colors">
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-white/10 flex items-center px-6 md:hidden">
          <Rocket className="h-6 w-6 text-primary mr-2" />
          <span className="font-heading font-bold text-xl">ListMate</span>
        </header>
        <div className="flex-1 p-6 lg:p-10 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
