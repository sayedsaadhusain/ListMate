import { Button, buttonVariants } from "@/components/ui/button";
import { CheckCircle2, Clock, UploadCloud, MessageCircle, BarChart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  return (
    <div className="max-w-5xl space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold mb-1">Welcome back, Cafe Aroma 👋</h1>
          <p className="text-muted-foreground">Here is what is happening with your listings today.</p>
        </div>
        <Button className="shrink-0 gap-2">
          <MessageCircle className="h-4 w-4" />
          Chat with Support
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 border border-white/10 bg-card rounded-2xl p-6">
          <h2 className="font-heading font-semibold text-lg mb-6">Onboarding Status</h2>
          
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute left-[11px] top-6 bottom-[-24px] w-0.5 bg-primary/20"></div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full p-1 mt-1 z-10 ring-4 ring-card">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">Account Created</h3>
                  <p className="text-sm text-muted-foreground mt-1">Your ListMate account is ready.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-[11px] top-6 bottom-[-24px] w-0.5 bg-white/10"></div>
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500/20 text-yellow-500 rounded-full p-1 mt-1 z-10 ring-4 ring-card">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">Documents Review</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-3">We are waiting for your FSSAI and Menu.</p>
                  <Link href="/dashboard/documents" className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
                    <UploadCloud className="h-4 w-4 mr-2" />
                    Upload Documents
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-[11px] top-6 bottom-[-24px] w-0.5 bg-white/10"></div>
              <div className="flex items-start gap-4 opacity-50">
                <div className="bg-white/10 text-muted-foreground rounded-full p-1 mt-1 z-10 ring-4 ring-card">
                  <div className="h-4 w-4 rounded-full border-2 border-current"></div>
                </div>
                <div>
                  <h3 className="font-medium">Menu Optimization</h3>
                  <p className="text-sm mt-1">We will format your menu for maximum orders.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="flex items-start gap-4 opacity-50">
                <div className="bg-white/10 text-muted-foreground rounded-full p-1 mt-1 z-10 ring-4 ring-card">
                  <div className="h-4 w-4 rounded-full border-2 border-current"></div>
                </div>
                <div>
                  <h3 className="font-medium">Live on Platforms</h3>
                  <p className="text-sm mt-1">Ready to receive orders!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border border-white/10 bg-card rounded-2xl p-6">
            <h2 className="font-heading font-semibold text-lg mb-4">Platforms</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="font-medium">Swiggy</span>
                <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded-full font-medium">Pending</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="font-medium">Zomato</span>
                <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded-full font-medium">Pending</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 opacity-50">
                <span className="font-medium">Blinkit</span>
                <span className="text-xs px-2 py-1 bg-white/10 text-muted-foreground rounded-full font-medium">Not Selected</span>
              </div>
            </div>
          </div>
          
          <div className="border border-primary/20 bg-primary/5 rounded-2xl p-6 text-center">
            <div className="bg-primary/20 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold mb-2">Upgrade to Growth</h3>
            <p className="text-sm text-muted-foreground mb-4">Get unlimited menu updates and review management.</p>
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
              View Plans
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
