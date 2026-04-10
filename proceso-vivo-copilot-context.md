# Contexto de implementación — Landing “Proceso Vivo”

## Objetivo del proyecto
Construir una landing page en **Next.js + TypeScript + CSS Modules** para presentar el método terapéutico **Proceso Vivo** de forma clara, seria y filtrante.

La landing **no debe vender una solución mágica**. Debe ayudar a que la persona que entra entienda:
- qué es el método,
- para qué tipo de situación puede servir,
- para qué situaciones **no** es suficiente por sí solo,
- cómo funciona el enfoque,
- y cómo es el aparato/dispositivo utilizado dentro de la terapia.

El objetivo principal es **calificar al visitante** antes del contacto.

## Enfoque estratégico
La experiencia debe sentirse como una **guía de autochequeo** mientras el usuario hace scroll.
No debe parecer una promesa milagrosa ni una página esotérica.
Debe transmitir seriedad, contención, claridad, criterio clínico, integración entre mente, cuerpo y energía, y una estética humana, íntima y pausada.

La página debe ayudar a responder internamente esta pregunta: **¿Este método es para mí en este momento?**

## Base conceptual de marca
Tomar como base el manual de marca de Proceso Vivo:
- Integra **psicología clínica** con trabajo sobre el **cuerpo** y la **dimensión energética**.
- Aborda a la persona como un **sistema vivo**.
- No se trata solo de comprender lo que pasa, sino de **procesarlo para que deje de repetirse**.
- Trabaja en dos niveles: estructural y corporal/energético.
- Conceptos centrales: Conciencia, Responsabilidad, Transformación, Integración.

## Posicionamiento
La landing debe dejar claro, con lenguaje cuidado y responsable, que:
- no es una solución instantánea,
- no es “magia”,
- no reemplaza un abordaje médico o psiquiátrico cuando ese abordaje es necesario,
- no debe prometer curas,
- no debe usar lenguaje absolutista.

Sí debe comunicar que puede ser valioso para personas que:
- sienten que repiten patrones,
- registran malestar persistente,
- entienden racionalmente lo que les pasa pero no logran transformarlo,
- sienten que el cuerpo también está involucrado en lo emocional,
- buscan un proceso activo y comprometido.

Debe desaconsejar con tacto a quienes:
- buscan una solución inmediata o milagrosa,
- necesitan medicación o un abordaje psiquiátrico específico,
- atraviesan situaciones que requieren intervención clínica más avanzada,
- no están dispuestos a involucrarse activamente en su proceso.

## Tono
Debe ser sereno, claro, humano, profesional, cálido pero no meloso, profundo pero no críptico, espiritual en un sentido sobrio y terapéutico con estructura.

No debe ser marketinero, agresivo, místico cliché, grandilocuente, excesivamente técnico desde el inicio, frío institucional ni sobrecargado de texto.

## Dirección visual
Inspirarse en el manual: composición con aire, equilibrio y claridad, formas orgánicas derivadas del isotipo, recorridos visuales suaves, sensación de proceso y movimiento interno, fotografías íntimas y humanas, foco en cuerpo/manos/piel/postura/pausa/registro, y evitar clichés visuales espirituales.

## Tipografía y sistema visual
Según manual:
- **Georgia Regular** para títulos o frases destacadas.
- **Poppins Light / Semibold** para textos corridos y destacados secundarios.

Implementación sugerida en web:
- `Georgia, serif` para headings.
- `Poppins, sans-serif` para cuerpo.
- Interlineado amplio.
- Ancho de lectura controlado.
- Evitar bloques interminables.

Nota: el PDF describe verbalmente una paleta con verde oliva, azul, magenta frío, hueso y carbón, pero el texto parseado no muestra todos los HEX de forma confiable. No fijar todavía una paleta definitiva solo con esos HEX parseados. Preparar el sistema para tokens de color fácilmente reemplazables.

## Reglas técnicas
- Stack: **Next.js + TypeScript + CSS Modules**.
- No usar Tailwind.
- No usar styled-components.
- Evitar librerías innecesarias.
- Componentes desacoplados y reutilizables.
- Todo el styling debe vivir en `*.module.css`.
- Nada de inline styles salvo necesidad real.

## Objetivo UX
La landing debe guiar al usuario como si avanzara por un filtro editorial/terapéutico.
Narrativa sugerida: interés inicial, identificación del problema, autofiltrado, explicación del enfoque, cómo funciona técnicamente, qué esperar del proceso y CTA.

## Estructura sugerida
1. **Hero / apertura**
2. **Sección de identificación** con preguntas breves
3. **Esto puede ayudarte si…**
4. **Quizás no es lo que necesitás hoy**
5. **Cómo trabaja el método**
6. **Proceso** apoyado en Conciencia / Responsabilidad / Transformación / Integración
7. **Sección técnica del aparato/dispositivo**
8. **Expectativas / compromiso**
9. **CTA final**

## Reglas de copy para Copilot
- frases cortas o medias,
- sin promesas absolutas,
- sin tono esotérico cliché,
- sin claims médicos,
- sin repetir demasiado “energía”,
- con vocabulario claro,
- con equilibrio entre profundidad y legibilidad,
- con más criterio editorial que publicitario.

Evitar palabras como milagro, sanación garantizada, cura, vibración elevada, desbloqueo cuántico, transformación inmediata.

## Reglas de UI para Copilot
- Diseñar desktop first, con responsive prolijo.
- Mucho aire entre secciones.
- Máximo ancho de texto controlado.
- Alternar secciones textuales con secciones visuales.
- Evitar cards genéricas con sombras pesadas.
- Evitar interfaces tipo SaaS.
- Evitar look corporativo frío.
- Preferir layouts editoriales, sobrios y respirados.
- Botones discretos, elegantes y claros.

## Componentes sugeridos
- `Hero`
- `SelfCheckSection`
- `WhoIsForSection`
- `WhoIsNotForSection`
- `MethodExplanationSection`
- `ProcessStepsSection`
- `DeviceSection`
- `CommitmentSection`
- `FinalCTA`

## Restricciones críticas
- No inventar información clínica específica.
- No inventar especificaciones técnicas reales del aparato si no están confirmadas.
- No usar testimonios falsos.
- No usar estadísticas inventadas.
- No presentar el método como reemplazo universal.

## Prioridades
1. Estructura clara para mostrar mañana.
2. Buena jerarquía visual.
3. Copy placeholder serio y usable.
4. Arquitectura limpia en Next + TS + CSS Modules.
5. Fácil iteración posterior.

## Qué debe entregar Copilot en cada prompt
- componente completo,
- archivo TSX,
- archivo CSS Module,
- tipado correcto,
- contenido placeholder coherente con la marca,
- nada de refactors innecesarios fuera del alcance.


La landing debe incluir una sección dedicada a la profesional detrás de Proceso Vivo, para generar confianza, legitimidad y cercanía. Esta sección no debe sentirse corporativa ni autorreferencial, sino humana, sobria y profesional.

Objetivo de la sección:
- Mostrar que detrás del método hay una profesional real.
- Reforzar confianza y credibilidad.
- Humanizar la propuesta.
- Presentar brevemente a la psicóloga desde una voz clara y seria.

La sección debe incluir:
- foto principal de la profesional
- nombre completo
- rol profesional
- breve descripción / bio
- una cita o frase destacada en primera persona
- opcionalmente formación, experiencia o áreas de trabajo

Lineamientos visuales:
- retrato cálido, natural y sobrio
- nada de estética institucional dura ni look corporativo frío
- composición editorial con bastante aire
- puede resolverse en dos columnas en desktop y una columna en mobile
- la frase destacada debe tener jerarquía visual