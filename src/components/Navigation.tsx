import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouteLink, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

type NavItem =
  | { name: string; type: "scroll"; to: string }
  | { name: string; type: "route"; to: string };

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useLocation();
  const onHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: 'Home', type: onHome ? "scroll" : "route", to: onHome ? 'home' : '/' },
    { name: 'Publications', type: "route", to: '/publications' },
    { name: 'Software', type: "route", to: '/software' },
    { name: 'Teaching', type: "route", to: '/teaching' },
    { name: 'Contact', type: "route", to: '/contact' },
  ];

  const Logo = () => {
    const img = (
      <img
        src="/favicon.jpg"
        alt="Profile"
        className="w-10 h-10 rounded-full object-cover border border-primary/20 hover:scale-105 transition-transform"
      />
    );

    if (onHome) {
      return (
        <ScrollLink
          to="home"
          smooth
          duration={500}
          className="cursor-pointer"
        >
          {img}
        </ScrollLink>
      );
    }

    return (
      <button
        onClick={() => setLocation("/")}
        className="cursor-pointer"
      >
        {img}
      </button>
    );
  };

  const NavItemView = ({ item, mobile = false }: { item: NavItem; mobile?: boolean }) => {
    const commonClass = mobile
      ? "text-base font-medium text-foreground hover:text-primary py-2 border-b border-border/50 last:border-0"
      : "text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer relative group";

    if (item.type === "scroll") {
      const isHome = item.name === "Home";
      return (
        <ScrollLink
          to={item.to}
          spy={!isHome}
          smooth
          offset={-70}
          duration={500}
          className={cn(commonClass, !mobile && isHome && "text-primary font-semibold")}
          activeClass={!mobile && !isHome ? "text-primary font-semibold" : undefined}
          onClick={() => mobile && setIsOpen(false)}
        >
          {item.name}
          {!mobile && <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>}
        </ScrollLink>
      );
    }

    const isActive = item.type === "route" && (item.name === "Home" ? location === "/" : location === item.to);

    return (
      <RouteLink
        href={item.to}
        className={cn(commonClass, !mobile && isActive && "text-primary font-semibold")}
        onClick={() => mobile && setIsOpen(false)}
      >
        {item.name}
        {!mobile && (
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
        )}
      </RouteLink>
    );
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "glass-nav h-16" : "bg-transparent h-20"
    )}>
      <div className="container-custom h-full flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => <NavItemView key={item.name} item={item} />)}
          <a
            href="./cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors border border-primary px-4 py-1.5 rounded-sm hover:bg-primary hover:text-white"
          >
            CV
          </a>
        </div>

        <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border shadow-lg overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => <NavItemView key={item.name} item={item} mobile />)}
              <a
                href="./cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-primary py-2"
                onClick={() => setIsOpen(false)}
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}