import { Button } from "@/components/ui/button";
import { UploadCloud, CheckCircle2, AlertCircle, Clock } from "lucide-react";

export default function DocumentsPage() {
  const documents = [
    { id: 'fssai', name: 'FSSAI Certificate', status: 'approved', icon: <CheckCircle2 className="h-5 w-5 text-green-500" /> },
    { id: 'gst', name: 'GST Certificate (Optional)', status: 'pending', icon: <Clock className="h-5 w-5 text-yellow-500" /> },
    { id: 'pan', name: 'PAN Card', status: 'missing', icon: <AlertCircle className="h-5 w-5 text-muted-foreground" /> },
    { id: 'bank', name: 'Cancelled Cheque', status: 'missing', icon: <AlertCircle className="h-5 w-5 text-muted-foreground" /> },
    { id: 'menu', name: 'Menu PDF / Photos', status: 'rejected', icon: <AlertCircle className="h-5 w-5 text-red-500" /> },
    { id: 'outlet', name: 'Outlet Exterior & Interior Photos', status: 'missing', icon: <AlertCircle className="h-5 w-5 text-muted-foreground" /> },
  ];

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold mb-2">Documents</h1>
        <p className="text-muted-foreground">Upload and manage your required documents for platform onboarding.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {documents.map((doc) => (
          <div key={doc.id} className="border border-white/10 bg-card rounded-2xl p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/5 p-3 rounded-xl">
                  <FileIcon />
                </div>
                <div>
                  <h3 className="font-medium">{doc.name}</h3>
                  <div className="flex items-center gap-1 mt-1 text-sm">
                    {doc.icon}
                    <span className="capitalize text-muted-foreground">{doc.status}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-auto pt-4">
              {doc.status === 'approved' ? (
                <Button variant="outline" className="w-full" disabled>Verified</Button>
              ) : (
                <div className="border-2 border-dashed border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 hover:border-primary/50 transition-colors cursor-pointer group">
                  <UploadCloud className="h-8 w-8 text-muted-foreground group-hover:text-primary mb-2 transition-colors" />
                  <p className="text-sm font-medium mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground">PDF, JPG or PNG (max. 10MB)</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FileIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
    </svg>
  );
}
