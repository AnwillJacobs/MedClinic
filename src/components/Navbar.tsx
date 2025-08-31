import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, FileText, LayoutDashboard, History } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/patients", label: "Patients", icon: Users },
    { href: "/prescriptions", label: "Prescriptions", icon: FileText },
  ];

  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h2 className="text-xl font-bold text-primary">MedSystem</h2>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.href} to={item.href}>
                    <Button
                      variant={location.pathname === item.href ? "default" : "ghost"}
                      className={cn(
                        "flex items-center space-x-2",
                        location.pathname === item.href && "bg-primary text-primary-foreground"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="outline">Dr. Johnson</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;