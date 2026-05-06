import Link from "next/link";
import { Users, Briefcase, LayoutDashboard, Rocket } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Admin Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-card hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-white/10 bg-primary/5">
          <Link href="/admin" className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="font-heading font-bold text-xl tracking-tight text-primary">Admin</span>
          </Link>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors">
            <LayoutDashboard className="h-5 w-5" />
            <span className="font-medium">Overview</span>
          </Link>
          <Link href="/admin/clients" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/10 text-foreground transition-colors">
            <Users className="h-5 w-5" />
            <span className="font-medium">Clients</span>
          </Link>
          <Link href="/admin/onboarding" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors">
            <Briefcase className="h-5 w-5" />
            <span className="font-medium">Onboarding</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-white/10 flex items-center justify-between px-6">
          <div className="flex items-center md:hidden">
            <Rocket className="h-6 w-6 text-primary mr-2" />
            <span className="font-heading font-bold text-xl text-primary">Admin</span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <div className="text-sm text-muted-foreground">Admin User</div>
            <div className="h-8 w-8 rounded-full bg-white/10"></div>
          </div>
        </header>
        <div className="flex-1 p-6 lg:p-10 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
