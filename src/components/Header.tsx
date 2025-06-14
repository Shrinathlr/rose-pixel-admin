
import { Camera, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <Camera className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">Photographer Hub</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="transition-colors hover:text-foreground/80 text-foreground/60">Dashboard</Link>
            <Link to="/onboarding" className="transition-colors hover:text-foreground/80 text-foreground/60">Onboarding</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link to="/" className="flex items-center space-x-2 text-lg font-medium">
                    <Camera className="h-6 w-6 text-primary" />
                    <span>Photographer Hub</span>
                  </Link>
                  <Link to="/" className="block px-2 py-1 text-lg">Dashboard</Link>
                  <Link to="/onboarding" className="block px-2 py-1 text-lg">Onboarding</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="flex items-center">
            <Button>Get Started</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
