import svg1 from "./assets/pig-piggy-bank-svgrepo-com.svg?raw";
import svg2 from "./assets/green-2.svg?raw";
import svg3 from "./assets/toast-alcohol-svgrepo-com.svg?raw";
import svg4 from "./assets/travel-suitcase-1-svgrepo-com.svg?raw";

export const getInvolvedSection = {
  title: "¿Qué te detiene para vivir tu próxima gran aventura?",
  subheading1_1: "Tenemos la respuesta a tus inquietudes más comunes ",
  subheading1_2: "para que des el paso con total confianza",
  initiatives: [
    {
      title: "Flexibilidad financiera a tu medida",
      description:
        "Creemos que las experiencias extraordinarias deberían ser accesibles para todos. Por eso ofrecemos planes de pago flexibles, reservas con mínimo anticipo y la garantía de mejor precio. ¡Y sin costos ocultos!",
      visual: svg1,
    },
    {
      title: "Tranquilidad garantizada, sin excepciones",
      description:
        "Entendemos que los planes pueden cambiar. Nuestra política de cancelación flexible te protege ante cualquier imprevisto. Además, nuestro equipo de asistencia 24/7 estará siempre disponible en tu destino.",
      visual: svg4,
    },
    {
      title: "Momentos que el dinero no puede comprar",
      description:
        "Acceso exclusivo a experiencias privadas, eventos locales cerrados al turismo convencional y encuentros con personas que transformarán tu perspectiva. No viajes como turista, vive como local.",
      visual: svg3,
    },
  ],
  visual: "get-involved-section-image.jpg",
  callToAction: "Take Action Today for a Greener Tomorrow",
  button: "Join Our Initiatives",
};
