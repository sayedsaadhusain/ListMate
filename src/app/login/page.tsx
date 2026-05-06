import Link from "next/link";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <Rocket className="h-8 w-8 text-primary" />
            <span className="font-heading font-bold text-2xl tracking-tight">Antigravity</span>
          </Link>
          <h2 className="font-heading text-3xl font-bold mb-2">Welcome Back</h2>
          <p className="text-muted-foreground">Sign in to manage your restaurant listings.</p>
        </div>

        <div className="bg-card border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">WhatsApp / Phone Number</label>
              <input 
                id="phone" 
                type="tel" 
                placeholder="+91 98765 43210" 
                className="w-full h-12 bg-background border border-white/10 rounded-lg px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                required
              />
            </div>
            
            <Button type="button" className="w-full h-12 text-base font-semibold">
              Send OTP
            </Button>
            
            <p className="text-xs text-center text-muted-foreground">
              By signing in, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
