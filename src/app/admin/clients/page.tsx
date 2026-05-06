import { Button } from "@/components/ui/button";
import { Search, Plus, Filter, MoreHorizontal } from "lucide-react";

export default function AdminClientsPage() {
  const clients = [
    { id: 1, name: "Cafe Aroma", city: "Lucknow", plan: "Growth", mrr: "₹3,500", platforms: ["Swiggy", "Zomato"], status: "Onboarding" },
    { id: 2, name: "Tandoori Nights", city: "Lucknow", plan: "Launchpad", mrr: "₹0", platforms: ["Zomato"], status: "Live" },
    { id: 3, name: "The Burger Joint", city: "Kanpur", plan: "Full Stack", mrr: "₹8,000", platforms: ["Swiggy", "Zomato", "Blinkit"], status: "Live" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="font-heading text-3xl font-bold">Clients</h1>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Client
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search clients..." 
            className="w-full h-10 bg-background border border-white/10 rounded-lg pl-10 pr-4 text-sm focus:outline-none focus:border-primary"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="border border-white/10 rounded-2xl bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-white/5 border-b border-white/10 text-muted-foreground">
              <tr>
                <th className="px-6 py-4 font-medium">Business Name</th>
                <th className="px-6 py-4 font-medium">City</th>
                <th className="px-6 py-4 font-medium">Plan</th>
                <th className="px-6 py-4 font-medium">Platforms</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">MRR</th>
                <th className="px-6 py-4 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">{client.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{client.city}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                      {client.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {client.platforms.join(", ")}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                      client.status === 'Live' ? 'bg-green-500/10 text-green-500 ring-green-500/20' : 'bg-yellow-500/10 text-yellow-500 ring-yellow-500/20'
                    }`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{client.mrr}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-muted-foreground hover:text-foreground">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
