import React, { useState } from 'react'
import { Calendar } from "primereact/calendar"
import { FloatLabel } from "primereact/floatlabel"
import { InputNumber } from 'primereact/inputnumber';
import { useSearchParams } from 'react-router-dom'

const Booking = () => {
    const [ida, setIda] = useState(null)
    const [vuelta, setVuelta] = useState(null)
    const [minVuelta, setMinVuelta] = useState(null)
    const [persons, setPersons] = useState(1)
    const [view, setView] = useState(new Date)
    console.log(view)
    const [searchParams] = useSearchParams();
    const suite = searchParams.get("suite")

    const handleChangeIda = (e) => {
        setIda(e.value)
        if (e.value) {
            const fecha_string = e.value.toLocaleDateString()
            const [day, month, year] = fecha_string.split("/").map(Number)
            const minVuelta = new Date(year, month - 1, day + 1);
            setMinVuelta(minVuelta)
            setVuelta(null)
            setView(minVuelta)
        } else {
            setVuelta(null)
        }
        console.log(minVuelta)
    }



    const phoneNumber = "5522920051282"; // número de WhatsApp sin +
    const message = `Hola, quiero consultar su disponibilidad ${suite ? `de la suite ${suite}` : ""} entre los días ${ida?.toLocaleDateString()} y ${vuelta?.toLocaleDateString()} para ${persons} persona${persons > 1 ? "s" : ""}. `; // mensaje predeterminado
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section id='booking' className='flex flex-col py-5 justify-center items-center booking_image h-screen '>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b-4 border-yellow-500 pb-2">Reservá tu estadía</h2>
            <div className='flex items-center justify-center gap-10 mt-8 bg-white/95 p-10 rounded-md'>

                <div className='flex flex-col gap-10 '>
                    <FloatLabel>
                        <Calendar value={ida} onChange={handleChangeIda} dateFormat='dd/mm/yy' minDate={new Date()} showIcon readOnlyInput className='w-100' />
                        <label htmlFor="username">Check in</label>
                    </FloatLabel>

                    <FloatLabel>
                        <Calendar value={vuelta} onChange={(e) => setVuelta(e.value)} dateFormat='dd/mm/yy' showIcon readOnlyInput minDate={minVuelta} viewDate={view} disabled={!ida} className='w-100' />
                        <label htmlFor="username" >Check out</label>
                    </FloatLabel>
                </div>

                <FloatLabel>
                    <InputNumber
                        value={1}
                        onValueChange={(e) => setPersons(e.value)}
                        showButtons
                        min={1}
                        max={3}
                        buttonLayout="horizontal"
                        decrementButtonClassName="p-button-danger"
                        incrementButtonClassName="p-button-success"
                        incrementButtonIcon="pi pi-plus"
                        decrementButtonIcon="pi pi-minus"
                        inputClassName="text-center"
                        inputStyle={{width: "50px"}}
                    />
                    <label>Cantidad de personas</label>
                </FloatLabel>

                {
                    vuelta ?
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-white py-3 px-5 rounded-4xl shadow-sm/30 text-center bg-blue-600 hover:bg-blue-700 transition-colors'
                        >Consultar disponibilidad</a> :
                        <span className='text-white py-3 px-5 rounded-4xl shadow-sm/30 text-center bg-blue-300 cursor-not-allowed'>Consultar disponibilidad</span>
                }
                <span className='w-50 bg-amber-50/60 p-5 rounded-xl font-semibold'>
                    Incluye traslados desde y hacia el aeropuerto.
                </span>
            </div>
        </section>
    )
}

export default Booking