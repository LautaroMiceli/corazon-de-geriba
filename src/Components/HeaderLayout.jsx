import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SVGCruz from "../Svg/Cruz";
import SVGHamburguesa from "../Svg/Hamburguesa";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
    const { t } = useTranslation()
    const navButtons = t("common.header-nav", { returnObjects: true })
    const [hidden, setHidden] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setHidden(true);
                setMobileOpen(false);
            } else {
                setHidden(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const nav_buttons = [
        { to: "/", text: navButtons[0] },
        { to: "/services", text: navButtons[1] },
        { to: "/accommodations", text: navButtons[2] },
        { to: "/contact", text: navButtons[3] },
        { to: "/booking", text: navButtons[4] },
    ];

    // header classes: mantenemos todas tus clases, agregamos control de translate y opacity
    const headerClass =
        (hidden ? "-translate-y-full " : "translate-y-0 ") +
        "fixed top-0 left-0 w-screen z-50 backdrop-blur-sm bg-white/50 shadow-md reveal_delay_2s transition-transform duration-300";

    return (
        <header
            className={headerClass}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">

                <LanguageSwitcher />

                {/* --- BOTÓN HAMBURGUESA  --- */}
                <button
                    type="button"
                    aria-label={mobileOpen ? t("common.header-button.close") + " menu" : t("common.header-button.open") + " menu"}
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen((s) => !s)}
                    className={`
    md:hidden flex items-center gap-2 p-3 rounded-lg
    bg-gray-100 hover:bg-gray-200 shadow-md cursor-pointer`}
                >
                    {mobileOpen ? (
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-800 select-none">{t("common.header-button.close")}</span>
                            <SVGCruz className="w-6 h-6 text-gray-800" />
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-800 select-none">Menu</span>
                            <SVGHamburguesa className="w-6 h-6 text-gray-800" />
                        </div>
                    )}
                </button>

                {/* --- NAV Desktop --- */}
                <div className="hidden md:flex">
                    <NavButtonsList nav_buttons={nav_buttons} />
                </div>
            </div>

            {/* --- PANEL MOBILE ---*/}
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