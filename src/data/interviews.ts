export interface QA {
  q: string;
  a: string;
}

export interface Interview {
  name: string;
  meta: string;
  quote: string;
  qa: QA[];
  video?: { src: string; caption?: string };
}

export const INTERVIEWS: Record<string, Interview> = {
  rbf: {
    name: "Reggaeton Beach Festival",
    meta: "Organización · Barcelona",
    quote: "Más de 24.400 noches de alojamiento se asocian al público del festival.",
    qa: [
      { q: "¿Cómo afrontáis cada edición del festival?", a: "Cada edición se afronta con una doble visión: por un lado, consolidar el modelo del festival a nivel nacional e internacional, y por otro, seguir evolucionando la experiencia. El objetivo es mejorar tanto la producción como el impacto cultural, turístico y mediático. En una ciudad como Barcelona, esto implica también adaptarse a un entorno con alta demanda turística y expectativas elevadas." },
      { q: "¿Cuántas personas asisten al festival y de dónde proceden?", a: "A nivel global, RBF reúne a más de 500.000 asistentes en el conjunto de su gira. En Barcelona en 2025 la previsión es de 30.000 asistentes por día: aproximadamente el 59,3% público local, el 15,9% del resto de España y el 24,8% internacional, principalmente europeo." },
      { q: "¿Plantean reforzar la promoción en el extranjero?", a: "El festival ya cuenta con una base sólida internacional, por lo que reforzar la promoción en el extranjero es una línea natural de desarrollo para continuar ampliando el alcance internacional del evento." },
      { q: "¿Muchas personas viajan expresamente para asistir?", a: "Sí, los datos apuntan en esa dirección. En Barcelona se generan más de 24.400 noches de alojamiento asociadas al público del festival, lo que indica que una parte importante de los asistentes lo convierte en motivo principal de viaje." },
      { q: "¿Qué influye más en la compra de entradas?", a: "Es un modelo híbrido. El orden suele ser: 1) el cartel de artistas internacionales, 2) la experiencia diferencial (agua, actividades, lifestyle), y 3) la localización. En ciudades como Barcelona, el componente de destino turístico cobra más peso." },
      { q: "¿Cuál es el impacto económico en Barcelona?", a: "Impacto directo: más de 1,5 millones de euros. Impacto indirecto: más de 6,9 millones de euros. Se distribuye en hostelería, transporte, comercio y ocio. Iniciativas como prevalidaciones en centros comerciales ayudan a dinamizar la economía local." },
      { q: "¿El turismo musical seguirá creciendo?", a: "Todo indica que sí. El crecimiento del alcance mediático, la internacionalización del público y la consolidación de experiencias vinculadas a la música apuntan a una tendencia al alza." },
      { q: "¿Cómo es la acogida de los residentes?", a: "Es mixta. El festival genera empleo (hasta 3.000 puestos directos) y dinamiza el comercio local. Como cualquier evento masivo, requiere una gestión adecuada para minimizar molestias y garantizar la convivencia. En general, el balance económico y turístico es positivo." },
    ],
  },
  hoky: {
    name: "Hoky Music",
    meta: "Organización · Santander",
    quote: "Casi tres cuartas partes del público procede de fuera de Cantabria.",
    video: { src: "/media/hoky-aftermovie.mp4", caption: "Hoky Music 2024 · Aftermovie" },
    qa: [
      { q: "¿Qué ofrecéis en el Hoky Music?", a: "Desde Mouro Producciones ofrecemos una experiencia musical completa, combinando un cartel de artistas actuales con una producción cuidada y un ambiente pensado para el público joven. Es un evento que conecta música, ocio y verano en un entorno emblemático como Santander." },
      { q: "¿Os centráis en algún género en particular?", a: "Nuestro enfoque principal está en la música urbana, pop y electrónica, géneros que conectan especialmente con nuestro público objetivo, mayoritariamente joven." },
      { q: "¿Cuántas personas asisten cada año?", a: "El número de espectadores que se espera ronda los 12.000." },
      { q: "¿Cuánta gente de fuera de Cantabria acude?", a: "El 26,2% del público procede de Cantabria, lo que implica que casi el 74% de los asistentes llegan desde fuera de la región. Destacan País Vasco (14,7%), Andalucía (11,5%) y Cataluña (10,5%)." },
      { q: "¿Tenéis asistencia internacional?", a: "Aunque el grueso del público es nacional, contamos con asistentes internacionales, principalmente de países europeos como Francia, Portugal y Reino Unido, especialmente turistas que visitan la región en verano." },
      { q: "¿Qué contenido genera más interacción en redes?", a: "Predominan los usuarios jóvenes, especialmente de 18 a 24 años y 25 a 34. Los contenidos dinámicos, visuales y vinculados a artistas o experiencias —reels, vídeos en directo, backstage— son los que generan mayor interacción." },
      { q: "¿Cuándo empieza la campaña de promoción?", a: "Iniciamos la campaña por lo menos seis meses antes del evento, apoyándonos especialmente en redes sociales, donde contamos con una comunidad activa y bien segmentada, y en publicidad tradicional: pegada de carteles, cuñas en radio, folletos y vinilado de transporte público." },
      { q: "¿Cuáles son los mayores retos?", a: "Mantener el crecimiento del público, gestionar la alta afluencia de asistentes de fuera de la región y seguir conectando con un público mayoritariamente joven." },
    ],
  },
  granca: {
    name: "Granca Live Fest",
    meta: "Organización · Gran Canaria",
    quote: "Muchas personas organizan su viaje en torno a las fechas del evento.",
    qa: [
      { q: "¿Cómo afrontáis esta edición tan especial?", a: "Con mucha ilusión y responsabilidad. Nuestro objetivo es seguir elevando el nivel, apostando por un cartel de calidad y mejorando cada detalle organizativo." },
      { q: "¿Cuántas personas asisten al festival?", a: "En 2023 tuvimos 60.000 asistentes y el 36,7% llegó de fuera de la isla. En 2024 fueron más de 80.000 con un 38,8% de fuera. En 2025, más de 55.000 asistentes con un 37,5% de fuera, un 4,9% de carácter internacional y un 11% de diferentes provincias de España." },
      { q: "¿Muchas personas viajan expresamente para asistir?", a: "Sí, cada vez más. El festival se ha convertido en un reclamo en sí mismo y muchas personas organizan su viaje a Gran Canaria en torno a las fechas del evento, combinando música y turismo." },
      { q: "¿Qué influye más en la compra de entradas?", a: "Es una combinación de factores. El cartel de artistas es clave para atraer al público inicialmente, pero la experiencia global —ubicación, producción, ambiente y organización— es lo que fideliza y hace que el público repita." },
      { q: "¿Cómo contribuye el festival al turismo de Gran Canaria?", a: "Trabajamos en coordinación con hoteles, aerolíneas y otros agentes del sector. El festival genera un impacto directo en la ocupación hotelera, restauración y transporte. Posiciona a Gran Canaria como destino atractivo no solo por su clima, sino también por su oferta cultural." },
      { q: "¿Puede un festival posicionar un destino?", a: "Sin duda. Los festivales son herramientas muy potentes de promoción territorial. No solo atraen visitantes, sino que generan contenido, visibilidad internacional y una imagen moderna y dinámica del destino." },
      { q: "¿Cómo es acogido el festival por los residentes?", a: "En general, la acogida es positiva. Los residentes valoran el impacto económico y la proyección que aporta el festival. Como en cualquier gran evento, puede haber retos logísticos, pero trabajamos activamente para minimizar molestias y maximizar beneficios para la comunidad local." },
    ],
  },
  ticketmaster: {
    name: "Ticketmaster",
    meta: "Venta de entradas · Internacional",
    quote: "El público actual busca experiencias físicas y viaja encantado.",
    qa: [
      { q: "¿Han detectado un aumento de compras fuera de la ciudad de residencia?", a: "Así es, por un lado porque son los propios artistas quienes deciden actuar en un único lugar (caso Dellafuente con sus 2 fechas en el Metropolitano en 2025) y, por otro, porque España acoge cada vez más eventos internacionales que atraen a mucho público de fuera." },
      { q: "¿El público está más dispuesto a viajar por música en directo?", a: "Sí. El público actual ha sufrido una gran transformación estructural en sus hábitos de consumo cultural. Frente a la sobreoferta digital, busca conexiones reales y significativas con otros fans, situando las experiencias físicas en el centro de su relación con la cultura. Si tiene que viajar, lo hace encantado." },
      { q: "¿Cuánto pueden tardar en agotarse las entradas?", a: "En el caso de Bad Bunny batimos la mejor marca registrada en Ticketmaster España, con más de 600.000 entradas vendidas en apenas 48 horas, y un pico máximo de 4.835 entradas vendidas en un minuto." },
      { q: "¿Han notado afluencia de clientes internacionales?", a: "Según el artista, vienen clientes de un país u otro. En el caso de Taylor Swift, por ejemplo, vino mucho público americano a Madrid." },
      { q: "¿Qué diferencias hay entre público local e internacional?", a: "El público que no es local lógicamente genera mayor impacto económico en la ciudad de celebración del concierto, gastando más en comida, alojamiento, etcétera." },
      { q: "¿Por qué suben los precios de las entradas?", a: "Se ha incrementado en los últimos años, como también lo han hecho los costes de producción de los conciertos y los cachés de los artistas." },
    ],
  },
  tomaticket: {
    name: "Tomaticket",
    meta: "Venta de entradas · Canarias",
    quote: "La música en directo se vive como una experiencia completa.",
    qa: [
      { q: "¿Han detectado más compras fuera de la ciudad de residencia?", a: "Sí. En los últimos años hemos visto una mayor movilidad del público, especialmente en eventos con artistas muy demandados o festivales consolidados. Esta tendencia se percibe sobre todo dentro de España y muy especialmente en Canarias, donde tenemos una presencia muy fuerte." },
      { q: "¿El público viaja más por la música?", a: "Sí, claramente. Hoy el público está más dispuesto a desplazarse por un concierto o festival si el evento lo merece. La música en directo se vive cada vez más como una experiencia completa, no solo como un plan local." },
      { q: "¿Cuánto tardan en agotarse las entradas?", a: "Depende mucho del evento, el cartel y el aforo. En los casos de mayor demanda, las primeras fases pueden agotarse en minutos; en otros, la venta se mantiene fuerte durante semanas." },
      { q: "¿Diferencias entre público local y desplazado?", a: "El público local suele comprar con más cercanía y recurrencia. El que se desplaza planifica más la compra y suele vivir el evento como parte de una experiencia más amplia, que incluye viaje, estancia y ocio." },
      { q: "¿Por qué suben los precios?", a: "Responde a varios factores: el aumento de los costes de producción, logística, personal, seguridad, transporte, recintos y servicios técnicos. También influye el encarecimiento general del sector en los últimos años." },
    ],
  },
  renfe: {
    name: "Renfe",
    meta: "Transporte ferroviario",
    quote: "Reforzamos servicios y trenes especiales en horarios de madrugada.",
    qa: [
      { q: "¿Han detectado un aumento de viajeros por festivales?", a: "Consciente de la demanda, Renfe lleva años reforzando el servicio con más trenes y con servicios fuera del horario habitual, como los trenes de Cercanías en horario de madrugada por eventos como el Mad Cool, Madrid Salvaje o Pulse of Gaia, entre otros." },
      { q: "¿Refuerzan o modifican los servicios?", a: "Sí. Aumentamos frecuencias o ponemos trenes especiales en horarios no habituales. En conciertos multitudinarios como el de Taylor Swift en el Bernabéu, también reforzamos personal de información y seguridad en estaciones cercanas." },
      { q: "¿Han tenido que tomar medidas especiales por seguridad?", a: "En ocasiones, las Fuerzas y Cuerpos de Seguridad y los servicios de Emergencias nos instan a cerrar estaciones por motivos de seguridad para evitar aglomeraciones, como ha ocurrido con conciertos en la Puerta del Sol o eventos en Recoletos." },
      { q: "¿Colaboran con festivales?", a: "Son los propios festivales los que se ponen en contacto con Renfe para dar servicio de Cercanías. También somos Tren Oficial de algunos festivales, como el Big Sound Festival." },
      { q: "¿Coordinan con el Mad Cool?", a: "Sí. Llevamos dos años programando trenes especiales para los asistentes. En la edición de 2025, Cercanías activó 19 servicios especiales para que los asistentes pudieran regresar de Villaverde Alto a Atocha." },
      { q: "¿Crecerá el uso del tren para estos eventos?", a: "Siempre que el festival se celebre en un lugar con servicios de Renfe, los trenes serán una opción preferencial. Ante mayor demanda, Renfe puede aumentar su oferta para atender las necesidades de los viajeros." },
    ],
  },
  metro: {
    name: "Metro de Madrid",
    meta: "Transporte urbano",
    quote: "Mayor presencia de turistas internacionales en grandes eventos.",
    qa: [
      { q: "¿Han detectado un aumento de viajeros por conciertos?", a: "Sí. En los últimos años se ha constatado un aumento puntual coincidiendo con la celebración de grandes conciertos y festivales. Se concentra en horas previas y posteriores a los eventos, así como en líneas y estaciones cercanas a los recintos." },
      { q: "¿Refuerzan los servicios?", a: "Sí. Ante eventos de gran afluencia, Metro de Madrid refuerza el servicio en las líneas más afectadas, preparando un dispositivo especial. La planificación se realiza con antelación, apoyándose en información de los eventos y en la experiencia de ediciones anteriores." },
      { q: "¿Han establecido medidas especiales por afluencia?", a: "Sí. Estos dispositivos contemplan regulación de accesos, control de flujos de viajeros y refuerzo de personal en estaciones estratégicas. El objetivo es garantizar la seguridad y una movilidad ordenada en momentos de gran concentración." },
      { q: "¿Crecerá el uso del Metro en estos eventos?", a: "Sí. El Metro es un medio eficiente, seguro y conectado con los principales espacios de ocio y cultura, lo que lo convierte en una opción clave para acompañar el crecimiento de Madrid como referencia musical." },
      { q: "¿Cuál es el reto logístico mayor?", a: "Uno de los mayores retos es la gestión de las grandes afluencias en un breve espacio temporal, como la finalización de los eventos, cuando se produce una salida masiva de público." },
      { q: "¿Hay más turistas internacionales?", a: "Sí. En los grandes eventos musicales se aprecia una mayor presencia de turistas internacionales, lo que requiere una especial atención por parte del personal de las estaciones." },
      { q: "¿Qué papel juega Metro en la imagen turística?", a: "Metro de Madrid desempeña un papel esencial: facilita el acceso a los principales recintos, mejora la experiencia del visitante y contribuye a proyectar una imagen de Madrid como una ciudad bien conectada, moderna y preparada para acoger eventos culturales y musicales de gran envergadura." },
    ],
  },
  cehat: {
    name: "CEHAT",
    meta: "Hoteles y alojamientos",
    quote: "Cuando se anuncia un evento, la demanda se activa.",
    qa: [
      { q: "¿Han detectado más demanda en hoteles cercanos a festivales?", a: "Sí, claramente. Cuando se anuncia la celebración de un evento, la demanda se activa. Lo hemos visto, por ejemplo, con grandes conciertos como los de Taylor Swift o Rosalía en Madrid, donde los hoteles se llenaron rápidamente." },
      { q: "¿Afecta a la rentabilidad y a los precios?", a: "Estos eventos tienen un impacto claro en la actividad y rentabilidad del sector porque concentran una elevada demanda en periodos muy concretos. Más que una cuestión de precios, hablamos de dar respuesta a una demanda muy intensa manteniendo estándares de calidad." },
      { q: "¿Cómo es el perfil de ese turista?", a: "Está cada vez más orientado a vivir experiencias concretas. Ya no se trata solo de elegir un destino, sino de construir el viaje en torno a actividades que aporten valor añadido. Suele aprovechar el desplazamiento para disfrutar del destino en su conjunto: gastronomía, cultura, ocio." },
      { q: "¿Alargan la estancia?", a: "El turismo actual es, en gran medida, turismo de experiencias. Estos eventos tienen gran capilaridad en toda la actividad turística, desde la gastronomía hasta el transporte o el ocio, lo que favorece que el viaje vaya más allá del propio evento." },
      { q: "¿Afecta a otros residentes del hotel?", a: "En eventos de gran escala se produce una alta concentración de demanda. En algunos casos, como grandes citas internacionales, se llega a niveles de ocupación prácticamente completos en los alojamientos disponibles." },
      { q: "¿Crecerá este turismo?", a: "Sí, sin duda. El turismo evoluciona hacia un modelo más experiencial. Los viajeros buscan cada vez más actividades concretas que justifiquen su desplazamiento, y los grandes eventos generan un impacto muy relevante en todo el ecosistema turístico." },
    ],
  },
};
