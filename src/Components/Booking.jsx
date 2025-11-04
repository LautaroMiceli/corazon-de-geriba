import React, { useState } from 'react'
import { Calendar } from "primereact/calendar"
import { FloatLabel } from "primereact/floatlabel"
import { InputNumber } from 'primereact/inputnumber';
import { useSearchParams } from 'react-router-dom'
import { buildMessage } from '../utils/buildBookingMessage';
import { useTranslation } from 'react-i18next';

const Booking = () => {
    const {t} = useTranslation()
    const [searchParams] = useSearchParams();
    const [bookingConfig, setBookingConfig] = useState({
        ida: null,
        vuelta: null,
        persons: 1,
        view: new Date(),
        minVuelta: null,
        suite: searchParams.get("suite")
    })

    const { ida, vuelta, persons, view, minVuelta } = bookingConfig


    const handleChangeIda = (e) => {
        setBookingConfig(prev => ({ ...prev, ida: e.value }))
        if (e.value) {
            const fecha_string = e.value.toLocaleDateString()
            const [day, month, year] = fecha_string.split("/").map(Number)
            const minVuelta = new Date(year, month - 1, day + 1);
            setBookingConfig(prev => ({ ...prev, minVuelta: minVuelta }))
            setBookingConfig(prev => ({ ...prev, view: minVuelta }))
        } else {
            setBookingConfig(prev => ({ ...prev, vuelta: null }))
        }
    }


    const isMobile = () => {
        // simple, robust detection suficiente para este caso
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }

    const openWhatsApp = (e) => {
        e.preventDefault()
        if (!vuelta) return

        const message = buildMessage(bookingConfig)
        const encoded = encodeURIComponent(message)
        const phoneNumber = "5522920051282"

        if (isMobile()) {
            // En móviles intentamos abrir app nativa; si falla, fallback a wa.me
            const nativeUrl = `whatsapp://send?phone=${phoneNumber}&text=${encoded}`
            const webFallback = `https://wa.me/${phoneNumber}?text=${encoded}`

            // Intento rápido con location; si no abre la app (p.ej. navegador bloquea), abrimos fallback tras pequeño timeout
            let openedNative = false
            try {
                window.location.href = nativeUrl
                openedNative = true
            } catch (err) {
                openedNative = false
            }

            setTimeout(() => {
                // Si no se abrió la app, abrimos fallback en nueva pestaña
                if (!openedNative) {
                    window.open(webFallback, "_blank", "noopener,noreferrer")
                }
            }, 600)
        } else {
            // En desktop usamos WhatsApp Web que precompleta el texto correctamente
            const webWhats = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encoded}`
            window.open(webWhats, "_blank", "noopener,noreferrer")
        }
    }

    return (
        <section id='booking' className='flex flex-col justify-center items-center py-6 px-4 h-full booking_image'>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b-4 border-yellow-500 pb-2 text-center">
                {t("booking.title")}
            </h2>

            <div className='flex flex-col flex-wrap items-center justify-center gap-6 sm:gap-10 mt-6 bg-white/95 p-8 sm:p-10 sm:pb-2 rounded-xl w-full max-w-4xl'>

                <div className='flex flex-col items-center gap-8 sm:gap-8 w-full sm:w-auto md:flex-row 2xl:flex-col'>
                    <FloatLabel>
                        <Calendar
                            value={ida}
                            onChange={handleChangeIda}
                            dateFormat='dd/mm/yy'
                            minDate={new Date()}
                            showIcon
                            readOnlyInput
                            className='w-full'
                        />
                        <label htmlFor="ida">Check in</label>
                    </FloatLabel>

                    <FloatLabel>
                        <Calendar
                            value={vuelta}
                            onChange={(e) => setBookingConfig({ ...bookingConfig, vuelta: e.value })}
                            dateFormat='dd/mm/yy'
                            showIcon
                            readOnlyInput
                            minDate={minVuelta}
                            viewDate={view}
                            disabled={!ida}
                            className='w-full'
                        />
                        <label htmlFor="vuelta">Check out</label>
                    </FloatLabel>
                </div>

                <FloatLabel className='w-36 sm:w-40'>
                    <InputNumber
                        value={persons}
                        onValueChange={(e) => setBookingConfig({ ...bookingConfig, persons: e.value })}
                        showButtons
                        min={1}
                        max={3}
                        buttonLayout="horizontal"
                        decrementButtonClassName="p-button-danger"
                        incrementButtonClassName="p-button-success"
                        incrementButtonIcon="pi pi-plus"
                        decrementButtonIcon="pi pi-minus"
                        inputClassName="text-center"
                        inputStyle={{ width: "50px" }}
                    />
                    <label>{t("booking.personsLabel")}</label>
                </FloatLabel>

                <div className='flex flex-col gap-3'>
                    <button
                        onClick={openWhatsApp}
                        className={`text-white py-2 px-4 sm:py-3 sm:px-5 rounded-3xl shadow-sm/30 text-center transition-colors ${vuelta ? "bg-blue-600 hover:bg-blue-700 cursor-pointer" : "bg-blue-300 cursor-not-allowed"} `}
                    >
                        {t("booking.buttonLabel")}
                    </button>
                    <span className='w-full sm:w-auto p-4 sm:p-2 rounded-xl font-light text-center text-sm'>
                        {t("booking.note")}
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Booking