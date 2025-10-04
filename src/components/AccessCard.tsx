import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface AccessCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  link: string;
  iconColor?: string;
}

const AccessCard = ({ icon: Icon, title, description, link, iconColor = "text-primary" }: AccessCardProps) => {
  return (
    <Card className="group p-6 transition-all duration-300 hover:shadow-[0_8px_30px_-4px_hsl(var(--primary)/0.2)] hover:-translate-y-1 bg-card border-border">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 ${iconColor} transition-transform duration-300 group-hover:scale-110`}>
          <Icon size={40} strokeWidth={2} />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground leading-tight">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        <Button 
          asChild
          size="lg"
          className="w-full mt-4 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold shadow-md transition-all duration-300 hover:shadow-lg"
        >
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center"
          >
            Acessar Agora
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default AccessCard;
