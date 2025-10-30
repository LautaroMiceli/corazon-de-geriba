
export const buildMessage = (bookingConfig) => {
    const { ida, vuelta, persons, suite } = bookingConfig
    const idaStr = ida ? ida.toLocaleDateString() : "—"
    const vueltaStr = vuelta ? vuelta.toLocaleDateString() : "—"
    return `Hola, quiero consultar su disponibilidad ${suite ? `de la suite ${suite}` : ""} entre los días ${idaStr} y ${vueltaStr} para ${persons} persona${persons > 1 ? "s" : ""}.`
}

