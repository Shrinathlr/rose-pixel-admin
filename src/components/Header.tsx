import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const LOGO_URL = "/lovable-uploads/478bb9cd-5f6d-40e7-b38f-e8debfb90c53.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let mounted = true;
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) setIsLoggedIn(!!session?.user);
    });
    supabase.auth.getSession().then(({ data }) => {
      if (mounted) setIsLoggedIn(!!data.session?.user);
    });
    return () => { mounted = false; listener.subscription.unsubscribe(); }
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <img
              src={LOGO_URL}
              alt="REELSSTUDIOS Logo"
              className="h-16 w-16 rounded-full border border-gray-200 shadow-sm bg-white object-cover"
              style={{ minWidth: 64, minHeight: 64 }}
            />
            <span className="hidden font-bold sm:inline-block text-lg ml-2 tracking-wide">
              REELSSTUDIOS
            </span>
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
                  {/* The menu icon remains for mobile */}
                  <span className="sr-only">Toggle Menu</span>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link to="/" className="flex items-center space-x-2 text-lg font-medium">
                    <img
                      src={LOGO_URL}
                      alt="REELSSTUDIOS Logo"
                      className="h-16 w-16 rounded-full border border-gray-200 shadow-sm bg-white object-cover"
                    />
                    <span className="ml-2">REELSSTUDIOS</span>
                  </Link>
                  <Link to="/" className="block px-2 py-1 text-lg">Dashboard</Link>
                  <Link to="/onboarding" className="block px-2 py-1 text-lg">Onboarding</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="flex items-center">
            {!isLoggedIn ? (
              <Button asChild>
                <a href="/auth">Sign In</a>
              </Button>
            ) : (
              <Button
                variant="outline"
                onClick={async () => {
                  await supabase.auth.signOut();
                  window.location.href = "/auth";
                }}
              >
                Logout
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
