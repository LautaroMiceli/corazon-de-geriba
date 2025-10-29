import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAnimation } from "../context/AnimationContext";
import { useLocation } from "react-router-dom";

const Header = () => {
    const [hidden, setHidden] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { animationsDone } = useAnimation();
    const location = useLocation();

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const nav_buttons = [
        { to: "/", text: "Inicio" },
        { to: "/services", text: "Servicios" },
        { to: "/accommodations", text: "Habitaciones" },
        { to: "/contact", text: "Contacto" },
        { to: "/booking", text: "Reservas" },
    ];

    // header classes: mantenemos todas tus clases, agregamos control de translate y opacity
    const headerClass =
        (location.pathname !== "/" && animationsDone ? "opacity-100 " : "opacity-0 ") +
        (hidden ? "-translate-y-full " : "translate-y-0 ") +
        "fixed top-0 left-0 w-screen z-50 backdrop-blur-sm bg-white/50 shadow-md reveal_delay_2s transition-transform duration-300";

    return (
        <header id="header_main" className={headerClass}>
            <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
                <div className="flex items-center gap-4">
                    <img src="/favicon-final.png" width={60} alt="logo" />
                </div>

                {/* --- BOTÓN HAMBURGUESA (visible en mobile, oculto en desktop) --- */}
                <button
                    type="button"
                    aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen((s) => !s)}
                    className="md:hidden p-2 rounded-md focus:outline-none hover:scale-[]1.1"
                >
                    {/* simple SVG: cambia entre hamburguesa y cruz */}
                    {mobileOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* --- NAV Desktop (hidden on mobile) --- */}
                <div className="hidden md:flex">
                    <NavButtonsList nav_buttons={nav_buttons} onNavigate={() => { }} />
                </div>
            </div>

            {/* --- PANEL MOBILE (se despliega bajo el header) ---
          mantenemos estilos visuales similares (bg, blur, shadow) */}
            <div
                className={
                    "md:hidden transition-max-h duration-300 overflow-hidden " +
                    (mobileOpen ? "max-h-screen" : "max-h-0")
                }
                aria-hidden={!mobileOpen}
            >
                <div className="px-6 pb-6">
                    <NavButtonsList
                        nav_buttons={nav_buttons}
                        vertical
                        onNavigate={() => setMobileOpen(false)} // cierra el menú al navegar
                    />
                </div>
            </div>
        </header>
    );
}

const NavButtonsList = ({ nav_buttons, vertical = false, onNavigate = () => { } }) => {
    // vertical -> mobile panel (stack), default -> inline row
    const baseClass = vertical ? "flex flex-col gap-4 text-gray-800 font-medium" : "flex gap-6 text-gray-800 font-medium";

    return (
        <nav className={baseClass}>
            {nav_buttons.map((e, i) => (
                <NavLink
                    key={i}
                    to={e.to}
                    onClick={() => onNavigate()}
                    className={({ isActive }) =>
                        isActive
                            ? "text-yellow-800 text-underline"
                            : "hover:text-yellow-900 transition-colors text-underline"
                    }
                >
                    {e.text}
                </NavLink>
            ))}
        </nav>
    );
};

export default Header;