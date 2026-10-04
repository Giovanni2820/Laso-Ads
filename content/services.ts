/**
 * Servicios según el mapa aprobado el 2026-10-04 (docs/mapa-servicios.md).
 * Cuatro modos de compra; los formatos del feed viven adentro de cada uno.
 *
 * Los tiempos de entrega y las cantidades NO figuran porque todavía no están
 * definidos (CLAUDE.md §13). Cuando se definan, se agregan acá.
 */

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  /** Problema del cliente que resuelve. Arranca por él, no por nosotros. */
  problem: string;
  description: string;
  /** Formatos concretos que recibe. */
  deliverables: string[];
  /** Cómo se produce: creadores, IA o híbrido. */
  production: string;
  forWho: string[];
  notForWho: string[];
  faq: { question: string; answer: string }[];
}

export const services = [
  {
    slug: "ugc-ads",
    name: "UGC para Ads",
    tagline: "Creativos listos para pautar",
    problem:
      "Necesitás material nuevo para tus campañas y producirlo internamente te lleva semanas que no tenés.",
    description:
      "Un paquete de creativos UGC pensados desde el hook hasta el cierre para funcionar como anuncio. Es el punto de partida si querés probar cómo trabajamos antes de comprometerte con algo más grande.",
    deliverables: [
      "UGC IA",
      "UGC IA dinámico",
      "UGC animados",
      "UGC con creadores reales",
      "Guiones incluidos",
      "Edición y subtitulado",
    ],
    production:
      "Según lo que pida cada pieza: creadores reales donde la credibilidad humana es el argumento, IA donde hace falta volumen y rapidez.",
    forWho: [
      "Marcas que ya están invirtiendo en pauta",
      "Productos que se pueden mostrar o demostrar",
      "Equipos que necesitan material sin montar una producción propia",
    ],
    notForWho: [
      "Marcas que todavía no validaron su producto",
      "Quien espera que el creativo resuelva una oferta que no funciona",
    ],
    faq: [
      {
        question: "¿Puedo elegir el perfil del creador?",
        answer:
          "Sí. Definimos juntos qué perfil tiene sentido para tu producto y tu público antes de producir.",
      },
      {
        question: "¿Los videos vienen con subtítulos?",
        answer:
          "Sí. El UGC para ads se consume sin audio, así que el subtitulado es parte de la entrega, no un extra.",
      },
    ],
  },
  {
    slug: "creative-testing",
    name: "Creative Testing",
    tagline: "Variantes para encontrar el ganador",
    problem:
      "Con dos o tres creativos no hay nada que testear. Sin volumen no sabés qué funciona, y terminás escalando a ciegas.",
    description:
      "No comprás videos: comprás ángulos. Partimos de varios conceptos, cada uno con sus hooks y variantes, para que puedas encontrar el creativo que rinde antes de poner presupuesto fuerte detrás de uno solo.",
    deliverables: [
      "Matriz de conceptos",
      "Variantes de hook por concepto",
      "Distintos perfiles y estilos",
      "Formatos combinados",
      "Guiones incluidos",
      "Edición y subtitulado",
    ],
    production:
      "Mayormente IA para generar volumen rápido, con creadores reales en las piezas donde el rostro humano es el mensaje.",
    forWho: [
      "Marcas que ya pautan y quieren dejar de adivinar",
      "Equipos que entienden que el creativo es la variable que más mueve",
      "Productos con varios ángulos posibles de comunicación",
    ],
    notForWho: [
      "Presupuestos de pauta tan chicos que no permiten testear",
      "Quien busca una sola pieza perfecta en vez de un proceso",
    ],
    faq: [
      {
        question: "¿Cuántas variantes necesito para testear bien?",
        answer:
          "Depende de tu presupuesto de pauta: no sirve tener más creativos de los que podés testear con plata real. Lo definimos según cuánto estés invirtiendo.",
      },
      {
        question: "¿Ustedes corren el test?",
        answer:
          "Producimos los creativos y te decimos cómo los agruparíamos para testear. La gestión de la pauta es un servicio aparte que ofrecemos solo a algunos clientes.",
      },
    ],
  },
  {
    slug: "creative-factory",
    name: "Creative Factory",
    tagline: "Producción continua, mes a mes",
    problem:
      "Cada vez que un creativo se desgasta volvés a empezar de cero: buscar, coordinar, producir. Y mientras tanto la campaña pierde.",
    description:
      "Producción recurrente con entrada constante de material nuevo e iteración sobre lo que ya te está funcionando. En vez de pedidos sueltos, un sistema que no se detiene.",
    deliverables: [
      "Entrega mensual de creativos",
      "Iteración sobre lo que rinde",
      "Conceptos y hooks nuevos cada mes",
      "Todos los formatos disponibles",
      "Guiones incluidos",
      "Edición y subtitulado",
    ],
    production: "Mezcla de creadores reales e IA, ajustada mes a mes según lo que vaya rindiendo.",
    forWho: [
      "Marcas con pauta sostenida que consumen creativos todos los meses",
      "Equipos que ya saben que la fatiga creativa es su cuello de botella",
      "Quien prefiere un proceso continuo antes que pedidos sueltos",
    ],
    notForWho: [
      "Campañas puntuales de una sola vez",
      "Marcas que todavía no saben cuánto creativo consumen por mes",
    ],
    faq: [
      {
        question: "¿Hay permanencia mínima?",
        answer:
          "Las condiciones se definen en la propuesta. El sentido del formato es la continuidad, pero no te vamos a atar a algo que no te sirve.",
      },
      {
        question: "¿Puedo cambiar el mix de formatos cada mes?",
        answer: "Sí. La idea es justamente ajustar según lo que vaya funcionando en tus campañas.",
      },
    ],
  },
  {
    slug: "creativos-complementarios",
    name: "Creativos complementarios",
    tagline: "Lo que acompaña a la campaña",
    problem:
      "No todo se resuelve con video vertical. A veces necesitás un estático, un broll o la misma pieza en otro idioma.",
    description:
      "Formatos que acompañan y amplían lo que ya estás pautando, sin montar una producción nueva para cada cosa.",
    deliverables: [
      "Estáticos para Ads",
      "Broll dinámico",
      "Traducciones y localización",
      "Adaptaciones de piezas existentes",
    ],
    production:
      "Producción gráfica y de video, con IA para las traducciones y adaptaciones a otros mercados.",
    forWho: [
      "Marcas que ya trabajan con nosotros y quieren ampliar formatos",
      "Campañas que necesitan estáticos además de video",
      "Marcas que venden en más de un país o idioma",
    ],
    notForWho: ["Quien busca diseño de marca o identidad visual: no es lo que hacemos"],
    faq: [
      {
        question: "¿Puedo pedir solo estáticos?",
        answer: "Sí, aunque la mayoría los suma a una producción de video.",
      },
      {
        question: "¿Qué incluye una traducción?",
        answer:
          "Adaptar la pieza a otro idioma y mercado, no solo subtitularla: el hook y el guion se ajustan para que suenen naturales.",
      },
    ],
  },
] satisfies Service[];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
