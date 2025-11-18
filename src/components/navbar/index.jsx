import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { name: "ANASAYFA", path: "/" },
  { name: "HAKKIMDA", path: "/about" },
  { name: "SKİLLS", path: "/skills" },
  { name: "PROJELERİM", path: "/projects" },
  { name: "İLETİŞİM", path: "/contact" },
];


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        isMobileMenuOpen
      ) {
        closeMobileMenu();
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  return (
    <nav
      ref={navRef}
      className="w-full fixed top-0 left-0 z-50 px-4 sm:px-6 py-3 border-b border-white/15 shadow-lg"
      style={{
        background: `radial-gradient(
          circle at 0% 50%,
          rgba(170, 0, 255, 0.30),
          transparent 62%
        ),
        radial-gradient(
          circle at 100% 50%,
          rgba(255, 50, 200, 0.25),
          transparent 62%
        ),
        #000000`,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Logo ve başlık */}
        <div className="flex w-full md:w-auto items-center justify-between md:justify-start gap-3 sm:gap-4">
          <NavLink
            to="/"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 shadow-lg hover:scale-[1.03] transition-transform lg:hidden"
            aria-label="Bekir Sağlam anasayfa"
          >
            <img
              src="/logo.jpg"
              alt="logosu"
              className="w-8 h-8 object-cover rounded-full border border-white/30"
            />
          </NavLink>

          <NavLink
  to="/"
  className="text-xl sm:text-2xl lg:text-2xl font-bold tracking-wide hover:text-purple-300 transition-colors bg-gradient-to-r from-white via-purple-500 to-pink-500 bg-clip-text text-transparent"
>
  BEKİR SAĞLAM
</NavLink>


          {/* Mobil menü butonu */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-2xl border border-white/20 bg-white/10 text-2xl text-white hover:border-white/40 transition-colors"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Navigasyon linkleri */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-3 w-full md:w-auto">
          <div
            id="mobile-nav"
            className={`w-full md:w-auto overflow-hidden transform-gpu origin-top-right transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
              isMobileMenuOpen
                ? "max-h-[600px] translate-x-0 rotate-0 scale-100 opacity-100 mt-3"
                : "max-h-0 translate-x-8 rotate-3 scale-95 opacity-0 md:max-h-full md:translate-x-0 md:rotate-0 md:scale-100 md:opacity-100"
            } md:opacity-100 md:max-h-full md:mt-0 md:translate-x-0`}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col md:flex-row items-stretch md:items-center gap-2 text-sm lg:text-base w-full md:w-auto">
              {NAV_LINKS.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block text-center px-4 py-2 rounded-2xl border font-semibold tracking-wide transition-all duration-300 ${
                        isActive
                          ? "text-purple-300 border-purple-400/60 bg-white/15 shadow-[0_8px_30px_rgba(168,85,247,0.35)]"
                          : "text-white border-white/10 bg-white/5 hover:bg-white/15 hover:border-white/25"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
