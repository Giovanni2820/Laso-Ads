/**
 * Copy de la home. PRIMERA VERSIÓN, a revisar con el usuario.
 * Escrito desde el contexto maestro (§14 propuesta de valor, §18 estructura,
 * §25 qué se puede prometer y qué no, §32 orden del mensaje).
 *
 * No contiene métricas, clientes, testimonios ni precios: nada de eso está
 * confirmado todavía (CLAUDE.md §13).
 */

export interface HomeContent {
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
  problem: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; body: string }[];
    closing: string;
  };
  solution: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: { number: string; title: string; body: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; body: string; formats: string[] }[];
  };
  formats: {
    eyebrow: string;
    title: string;
    intro: string;
    items: string[];
  };
  creators: {
    eyebrow: string;
    title: string;
    body: string;
    points: string[];
    cta: { label: string; href: string };
  };
  ai: {
    eyebrow: string;
    title: string;
    intro: string;
    columns: { title: string; body: string; items: string[] }[];
    closing: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  finalCta: {
    title: string;
    body: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
}

export const home = {
  hero: {
    eyebrow: "Creativos para performance",
    title: "Más ángulos para testear,",
    highlight: "todos los meses",
    subtitle:
      "Producimos creativos UGC con creadores reales e IA para que tu marca no se quede nunca sin material nuevo que probar en Meta Ads.",
    ctaPrimary: { label: "Quiero escalar mis creativos", href: "/marcas" },
    ctaSecondary: { label: "Ver nuestro trabajo", href: "/portfolio" },
  },

  problem: {
    eyebrow: "El problema",
    title: "Un anuncio que funciona hoy puede dejar de funcionar mañana",
    intro:
      "Si invertís en pauta, el desgaste es inevitable. El creativo que traía resultados empieza a rendir menos, y para cuando lo notás ya estás tarde.",
    items: [
      {
        title: "Fatiga creativa",
        body: "La audiencia ya vio tu anuncio. La frecuencia sube, el rendimiento baja y el costo se va para arriba.",
      },
      {
        title: "Producción lenta",
        body: "Entre coordinar, grabar, editar y revisar pasan semanas. Para cuando entregás, la campaña ya pedía otra cosa.",
      },
      {
        title: "Pocos ángulos",
        body: "Con dos o tres piezas no hay nada que testear. Sin volumen no hay aprendizaje, y sin aprendizaje se escala a ciegas.",
      },
      {
        title: "Dependencia de un creador",
        body: "Si todo tu contenido tiene la misma cara y el mismo tono, tu techo es esa persona.",
      },
    ],
    closing:
      "El problema de fondo no es que te falte contenido. Es que no tenés suficientes creativos distintos como para encontrar el que funciona.",
  },

  solution: {
    eyebrow: "Cómo lo resolvemos",
    title: "Un sistema de producción, no un pedido suelto",
    intro:
      "En vez de entregarte un video y despedirnos, montamos un circuito que produce, mide y vuelve a producir sobre lo que te está rindiendo.",
    steps: [
      {
        number: "01",
        title: "Brief",
        body: "Entendemos tu producto, tu oferta, tu cliente y qué venías haciendo en pauta.",
      },
      {
        number: "02",
        title: "Estrategia creativa",
        body: "Definimos los conceptos y los hooks antes de grabar nada. Sin estrategia, producir más es producir más ruido.",
      },
      {
        number: "03",
        title: "Producción",
        body: "Creadores reales, IA o una combinación de las dos, según lo que pida cada pieza.",
      },
      {
        number: "04",
        title: "Variantes",
        body: "De cada concepto salen versiones con distintos hooks, aperturas y cierres.",
      },
      {
        number: "05",
        title: "Testeo e iteración",
        body: "Lo que rinde se profundiza y se le abren variantes nuevas. Lo que no, se descarta rápido.",
      },
    ],
  },

  services: {
    eyebrow: "Servicios",
    title: "Según cómo quieras trabajar",
    intro:
      "La misma capacidad de producción, empaquetada de tres formas distintas según en qué momento esté tu marca.",
    items: [
      {
        title: "UGC para Ads",
        body: "Un paquete de creativos listos para pautar. El punto de partida si querés probar cómo trabajamos.",
        formats: ["UGC IA", "UGC IA dinámico", "UGC animados", "Creadores reales"],
      },
      {
        title: "Creative Testing",
        body: "No comprás videos: comprás variantes. Varios conceptos, cada uno con sus hooks, para encontrar el ganador antes de poner presupuesto fuerte.",
        formats: ["Matriz de conceptos", "Variantes de hook", "Múltiples perfiles"],
      },
      {
        title: "Creative Factory",
        body: "Producción continua mes a mes. Entrada constante de material nuevo e iteración sobre lo que ya te está funcionando.",
        formats: ["Producción mensual", "Iteración", "Todos los formatos"],
      },
    ],
  },

  formats: {
    eyebrow: "Formatos",
    title: "Qué producimos",
    intro: "Cada servicio se arma combinando estos formatos según lo que necesite tu campaña.",
    items: [
      "UGC IA",
      "UGC IA dinámico",
      "UGC animados",
      "Broll dinámico",
      "Estáticos",
      "Traducciones y localización",
    ],
  },

  creators: {
    eyebrow: "Creadores",
    title: "Caras distintas para públicos distintos",
    body: "Trabajamos con creadores reales para las piezas donde una persona concreta frente a cámara es el mensaje: testimonios, demostraciones y todo lo que necesite credibilidad.",
    points: [
      "No dependemos del tamaño de la audiencia del creador: nos importa cómo funciona frente a cámara.",
      "Distintos perfiles, edades y estilos para que tus creativos no tengan todos la misma voz.",
      "El creador sigue un guion pensado para pauta, no un posteo de marca.",
    ],
    cta: { label: "Quiero trabajar como creador", href: "/creadores" },
  },

  ai: {
    eyebrow: "Inteligencia artificial",
    title: "Una herramienta más, no el producto",
    intro:
      "Usamos IA donde nos da una ventaja real de velocidad, volumen o costo. Donde no la da, grabamos con personas. La decisión se toma pieza por pieza.",
    columns: [
      {
        title: "Donde usamos IA",
        body: "Cuando hace falta volumen y rapidez para testear.",
        items: [
          "Generar muchas variantes de un mismo concepto",
          "Explorar hooks y guiones antes de producir",
          "Traducir y localizar a otros mercados",
          "Iterar rápido sobre lo que ya funciona",
        ],
      },
      {
        title: "Donde van creadores reales",
        body: "Cuando la credibilidad humana es el argumento.",
        items: [
          "Testimonios y experiencias en primera persona",
          "Demostraciones físicas del producto",
          "Piezas donde una cara concreta sostiene el mensaje",
          "Públicos que valoran ver a alguien real",
        ],
      },
    ],
    closing:
      "No vendemos IA como solución mágica. Es una herramienta que nos deja producir más y más rápido, y eso es lo que te sirve cuando necesitás testear.",
  },

  faq: {
    eyebrow: "Preguntas",
    title: "Lo que suelen preguntarnos",
    items: [
      {
        question: "¿Qué es exactamente el UGC para ads?",
        answer:
          "Contenido con estética de usuario real, producido específicamente para funcionar como anuncio. No es un posteo de marca ni una colaboración con un influencer: está pensado desde el hook hasta el cierre para rendir en pauta.",
      },
      {
        question: "¿Necesito tener muchos seguidores o una marca grande?",
        answer:
          "No. Lo que sí necesitás es tener un producto validado, una oferta clara y estar invirtiendo en pauta. Si todavía no vendés, el problema no se resuelve con más creativos.",
      },
      {
        question: "¿Puedo usar los videos en Meta Ads y TikTok Ads?",
        answer:
          "Sí, se producen en formato vertical pensado para pauta. El alcance exacto de los derechos de uso se define por escrito antes de empezar.",
      },
      {
        question: "¿Qué tengo que hacer yo?",
        answer:
          "Pasarnos la información de tu producto y tu oferta al principio, y después aprobar lo que te mandamos. La producción corre por nuestra cuenta.",
      },
      {
        question: "¿Me garantizan resultados de venta?",
        answer:
          "No, y desconfiá de quien lo prometa. El resultado de una campaña depende también de tu oferta, tu precio, tu landing, el targeting y el presupuesto. Lo que sí controlamos es la calidad del creativo y la cantidad de ángulos que vas a poder testear.",
      },
      {
        question: "¿Hacen contenido con IA o con personas reales?",
        answer:
          "Las dos cosas, y lo decidimos según la pieza. Algunas campañas funcionan mejor con volumen generado con IA, otras necesitan una persona real frente a cámara. Lo más común es combinar.",
      },
    ],
  },

  finalCta: {
    title: "Dejá de buscar un video más",
    body: "Contanos qué estás vendiendo y en qué está tu pauta hoy. Te decimos qué produciríamos para tu marca y cómo lo testearíamos.",
    ctaPrimary: { label: "Hablemos de tu marca", href: "/marcas" },
    ctaSecondary: { label: "Ver nuestro trabajo", href: "/portfolio" },
  },
} satisfies HomeContent;
