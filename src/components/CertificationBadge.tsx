import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface CertificationBadgeProps {
  certification: {
    name: string;
    type: 'organic' | 'iso' | 'safety' | 'quality';
    verified: boolean;
  };
  className?: string;
}

export const CertificationBadge = ({ certification, className }: CertificationBadgeProps) => {
  const getIcon = () => {
    switch (certification.type) {
      case 'organic':
        return <CheckCircle className="w-3 h-3" />;
      case 'iso':
        return <Award className="w-3 h-3" />;
      case 'safety':
      case 'quality':
        return <Shield className="w-3 h-3" />;
      default:
        return <CheckCircle className="w-3 h-3" />;
    }
  };

  const getVariant = () => {
    if (!certification.verified) return 'secondary';
    
    switch (certification.type) {
      case 'organic':
        return 'default'; // Uses primary color
      case 'iso':
        return 'secondary';
      case 'safety':
        return 'outline';
      case 'quality':
        return 'outline';
      default:
        return 'default';
    }
  };

  const getBadgeColor = () => {
    if (!certification.verified) return 'bg-muted text-muted-foreground';
    
    switch (certification.type) {
      case 'organic':
        return 'bg-leaf-green text-primary-foreground';
      case 'iso':
        return 'bg-harvest-gold text-foreground';
      case 'safety':
        return 'border-sky-blue text-sky-blue';
      case 'quality':
        return 'border-earth-brown text-earth-brown';
      default:
        return 'bg-primary text-primary-foreground';
    }
  };

  return (
    <Badge
      variant={getVariant()}
      className={cn(
        "flex items-center gap-1 text-xs font-medium px-2 py-1",
        getBadgeColor(),
        !certification.verified && "opacity-60",
        className
      )}
    >
      {getIcon()}
      {certification.name}
      {certification.verified && (
        <CheckCircle className="w-2.5 h-2.5 ml-1 text-current" />
      )}
    </Badge>
  );
};