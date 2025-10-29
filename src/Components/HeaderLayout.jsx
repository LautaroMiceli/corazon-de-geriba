import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAnimation } from '../context/AnimationContext'

export default function Header() {
    const { animationsDone } = useAnimation();

    const handleClick = (e, id) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const nav_buttons = [
        {
            to: "/",
            text: "Inicio"
        },
        {
            to: "/services",
            text: "Servicios"
        },
        {
            to: "/accommodations",
            text: "Habitaciones"
        },
        {
            to: "/contact",
            text: "Contacto"
        },
        {
            to: "/booking",
            text: "Reservas"
        },
    ]
    console.log(animationsDone)

    return (
        <header id='header_main' className={"fixed top-0 left-0 w-screen z-50 backdrop-blur-sm bg-white/50 shadow-md reveal_delay_2s" + (animationsDone ? "opacity-100" : '')}>
            <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
                <div className="text-xl font-bold text-yellow-800 italic ">
                    Coração de Geribá
                </div>
                <NavButtonsList nav_buttons={nav_buttons} />
            </div>
        </header>
    )
}

const NavButtonsList = ({ nav_buttons }) => {
    return (
        <nav className="flex gap-6 text-gray-800 font-medium">
            {nav_buttons.map((e, i) => (
                <NavLink
                    key={i}
                    to={e.to}
                    className={({ isActive }) => isActive ? "text-yellow-800 text-underline" : "hover:text-yellow-600 transition-colors text-underline"}
                >
                    {e.text}
                </NavLink>
            ))}
        </nav>
    )
}