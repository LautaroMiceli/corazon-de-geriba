import i18n from "i18next";

export const buildMessage = (bookingConfig) => {
    const { ida, vuelta, persons, suite } = bookingConfig;
    const idaStr = ida ? ida.toLocaleDateString() : "—";
    const vueltaStr = vuelta ? vuelta.toLocaleDateString() : "—";

    const lang = i18n.language;

    switch (lang) {
        case "en":
            return `Hello! I'd like to check the availability ${suite ? `of the ${suite} suite ` : ""
                }from ${idaStr} to ${vueltaStr} for ${persons} ${persons > 1 ? "people" : "person"
                }.`;

        case "pt":
            return `Olá! Gostaria de verificar a disponibilidade ${suite ? `da suíte ${suite} ` : ""
                }entre ${idaStr} e ${vueltaStr} para ${persons} pessoa${persons > 1 ? "s" : ""
                }.`;

        default:
            return `¡Hola! Quiero consultar su disponibilidad ${suite ? `de la suite ${suite} ` : ""
                }entre los días ${idaStr} y ${vueltaStr} para ${persons} persona${persons > 1 ? "s" : ""
                }.`;
    }
};
