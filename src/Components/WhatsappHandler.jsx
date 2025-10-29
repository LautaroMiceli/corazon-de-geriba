import React from "react";

export default function WhatsAppButton() {
    const phoneNumber = "5522920051282"; // número de WhatsApp sin +
    const message = "Hola, quiero hacer una reserva entre los días"; // mensaje predeterminado
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
            Enviar WhatsApp
        </a>
    );
}
