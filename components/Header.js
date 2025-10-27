import Link from "next/link";

const NavLink = ({href, children}) => (
  <Link className="text-sm font-medium hover:text-brand" href={href}>{children}</Link>
);

export default function Header(){
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Sydney Deck Builder" className="h-8 w-auto"/>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/process">Process</NavLink>
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        <Link className="btn-primary text-sm" href="/book">Book a Free Quote</Link>
      </div>
    </header>
  );
}
