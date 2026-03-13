export const ABOUT = {
  NAME: "Talento Humano Productivo",
  DESCRIPTION: "Learn more about us and our mission.",
  PRESENTATION:
    "Somos un equipo de fisioterapeutas con amplia trayectoria en rehabilitación y bienestar. Te ofrecemos atención personalizada, tecnología de última generación y técnicas seguras para que recuperes tu calidad de vida de forma rápida y efectiva",
} as const;

export const SERVICES = {
  NAME: "Tratamientos efectivos e innovadores",
  DESCRIPTION:
    "El mundo de la fisioterapia está en constante evolución, y nosotros no nos quedamos atrás. Incorporamos las técnicas más avanzadas y científicas para ofrecerte soluciones efectivas y de última generación. A continuación, te contamos sobre algunos de los tratamientos más innovadores que ofrecemos en nuestra clínica:",
  LIST: [
    {
      value: "diatermia",
      name: "Diatermia",
      description:
        "Tratamiento de diatermia para aliviar el dolor y mejorar la movilidad.",
      srcImg: "/service.jpeg",
    },
    {
      value: "manual-therapy",
      name: "Terapia Manual",
      description:
        "Técnicas de terapia manual para aliviar el dolor y mejorar la función.",
      srcImg: "/service.jpeg",
    },
    {
      value: "therapeutic-exercise",
      name: "Ejercicio Terapéutico",
      description:
        "Programa de ejercicio terapéutico personalizado para fortalecer la columna vertebral.",
      srcImg: "/service.jpeg",
    },
    {
      value: "postural-rehabilitation",
      name: "Rehabilitación Postural",
      description:
        "Técnicas de rehabilitación postural para mejorar la postura y reducir el dolor.",
      srcImg: "/service.jpeg",
    },
  ],
} as const;
export const PACK = {
  NAME: "Planes de Tratamiento Personalizados",
  DESCRIPTION: "En nuestra clínica, diseñamos planes adaptados a tus necesidades. Ya sea que necesites una sesión puntual o un programa completo de rehabilitación, tenemos la opción ideal para ti. Todos nuestros tratamientos están avalados por la evidencia científica y realizados por fisioterapeutas especializados.",
  LIST: [
    {
      name: "Sesión Individual",
      description: "Atención personalizada en una sesión de fisioterapia manual y/o instrumental, enfocada en aliviar el dolor agudo y mejorar la movilidad.",
      srcImg: "/images/sesion-individual.jpg",
      list: [
        "Evaluación biomecánica completa",
        "Terapia manual y movilizaciones",
        "Ejercicios específicos para casa"
      ]
    },
    {
      name: "Bono 5 Sesiones",
      description: "Plan de seguimiento para patologías musculoesqueléticas que requieren un proceso de recuperación continuo. Incluye reevaluaciones periódicas.",
      srcImg: "/images/bono-5.jpg",
      list: [
        "5 sesiones de fisioterapia",
        "Seguimiento de evolución",
        "Plan de ejercicios progresivo"
      ]
    },
    {
      name: "Plan de Tratamiento Intensivo (10 sesiones)",
      description: "Diseñado para lesiones complejas o procesos quirúrgicos. Incluye un enfoque multidisciplinar con técnicas avanzadas como punción seca, electrólisis percutánea o diatermia.",
      srcImg: "/images/plan-intensivo.jpg",
      list: [
        "10 sesiones de tratamiento",
        "Técnicas de última generación",
        "Informe de evolución y alta"
      ]
    },
    {
      name: "Rehabilitación Postural Global",
      description: "Programa especializado en corregir desequilibrios musculares y mejorar la postura mediante ejercicios terapéuticos y conciencia corporal.",
      srcImg: "/images/rehab-postural.jpg",
      list: [
        "Análisis postural en 3D",
        "Ejercicios de estabilización lumbar",
        "Prevención de recidivas"
      ]
    },
  ],
} as const;
export const QUESTIONS = [
  {
    value: "primera-visita",
    trigger: "¿Qué debo esperar en mi primera consulta?",
    content:
      "En tu primera visita, realizaremos una evaluación completa de tu estado físico, historial médico y objetivos. El fisioterapeuta te hará preguntas sobre tu dolor o limitación, te realizará pruebas de movilidad y fuerza, y elaborará un plan de tratamiento personalizado. Te explicaremos cada paso y resolveremos todas tus dudas. La sesión dura aproximadamente 60 minutos.",
  },
  {
    value: "sesiones-necesarias",
    trigger: "¿Cuántas sesiones voy a necesitar?",
    content:
      "El número de sesiones varía según la lesión, su gravedad y tu respuesta al tratamiento. Tras la evaluación inicial, te daremos una estimación orientativa. Algunas condiciones agudas pueden mejorar en 3-5 sesiones, mientras que procesos más complejos o crónicos pueden requerir varios meses. Nuestro objetivo es que te recuperes lo antes posible y te daremos herramientas para que también trabajes en casa.",
  },
  {
    value: "costo-planes",
    trigger: "¿Cuál es el costo de las sesiones? ¿Hay paquetes?",
    content:
      "Ofrecemos sesiones individuales y bonos con descuento (5 o 10 sesiones) para tratamientos continuados. Aceptamos efectivo, tarjetas y transferencias. Además, trabajamos con varias aseguradoras; consulta si la tuya está concertada. Para conocer precios actualizados, contáctanos directamente, ya que pueden variar según el tipo de tratamiento.",
  },
  {
    value: "seguro-medico",
    trigger: "¿Trabajan con seguros médicos?",
    content:
      "Sí, tenemos conciertos con las principales aseguradoras (Sanitas, Adeslas, Asisa, Mapfre, etc.). Dependiendo de tu póliza, la cobertura puede ser total o parcial. Antes de tu primera cita, verifica con tu aseguradora si necesitas autorización o si puedes acudir directamente. Nosotros podemos ayudarte a tramitar los partes si es necesario.",
  },
  {
    value: "que-llevar",
    trigger: "¿Qué debo llevar a la consulta?",
    content:
      "Te recomendamos venir con ropa cómoda (como la de hacer deporte) que permita moverte con libertad y acceder a la zona a tratar. Trae también informes médicos, pruebas de imagen (radiografías, resonancias) si las tienes, y una lista de medicamentos que tomes. Si tienes un volante del médico, no olvides traerlo. Y, por supuesto, trae tus dudas y objetivos.",
  },
  {
    value: "dolor-despues",
    trigger: "¿Es normal tener dolor después de la sesión?",
    content:
      "Es posible que sientas alguna molestia o agujetas después de la primera sesión, especialmente si hemos realizado técnicas manuales profundas o ejercicios nuevos. Esto es normal y suele desaparecer en 24-48 horas. El alivio del dolor principal suele notarse progresivamente. Si el dolor es intenso o persistente, comunícanoslo para ajustar el tratamiento.",
  },
  {
    value: "necesito-recomendacion",
    trigger: "¿Necesito derivación médica para acudir?",
    content:
      "No es necesario un volante para acudir a fisioterapia en primera instancia. Puedes pedir cita directamente. Sin embargo, si tu seguro médico lo exige para cubrir el coste, deberás traerlo. En cualquier caso, te aconsejamos consultar con tu médico de cabecera si tienes dudas sobre tu lesión.",
  },
  {
    value: "modalidades-tratamiento",
    trigger: "¿Qué técnicas utilizan?",
    content:
      "Empleamos una amplia variedad de técnicas basadas en la evidencia científica: terapia manual, punción seca, electrólisis percutánea (EPI), diatermia, ejercicios terapéuticos, pilates clínico, vendaje neuromuscular, entre otras. Cada plan se adapta a tus necesidades específicas, combinando las herramientas más adecuadas para tu caso.",
  },
] as const;

export const BRANCHES = [
  {
    id: "1",
    name: "Sucursal Centro",
    address: "Av. Siempre Viva 123, CABA",
    phone: "+54 11 1234-5678",
    email: "centro@empresa.com",
    lat: -34.6037,
    lng: -58.3816,
    isMain: true,
  },
  {
    id: "2",
    name: "Sucursal Norte",
    address: "Av. Cabildo 2000, CABA",
    phone: "+54 11 8765-4321",
    lat: -34.5591,
    lng: -58.4583,
  },
];
