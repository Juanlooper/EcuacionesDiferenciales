# Guion de Presentación: Laboratorio Virtual de Ecuaciones Diferenciales

Este documento sirve como la hoja de ruta y el guion oficial para la presentación de la aplicación educativa interactiva sobre **Ecuaciones Diferenciales Lineales Homogéneas de Orden Superior**.

La presentación está estructurada para desarrollarse fluida y equitativamente entre los **4 integrantes del equipo**. Cada uno tiene un rol específico y se encargará de narrar e interactuar con distintas secciones de la aplicación web.

---

## 👩‍🏫 Alejandra Falcón: La Teórica (Introducción y Definición)
**Objetivo:** Establecer las bases conceptuales, motivar la importancia de las ecuaciones diferenciales y definir la forma matemática general.

**Acciones en la App:**
1. Iniciar en la cabecera ("Hero Section") mostrando el título y diseño general.
2. Bajar a la sección **"Introducción a los Sistemas Dinámicos"** y mostrar el Módulo de Historia.
3. Bajar a la sección **"Ecuación Diferencial Lineal Homogénea de Orden (n)"**.

**Qué decir y explicar (Guion):**
- **Bienvenida:** "¡Hola a todos! Bienvenidos a nuestro Laboratorio Virtual interactivo. Hoy vamos a desentrañar el misterio de las Ecuaciones Diferenciales Lineales Homogéneas."
- **Importancia y Evolución:** Explica brevemente qué es una ecuación diferencial (la relación entre una función y sus tasas de cambio). Destaca por qué estudiamos esto mencionando los 4 pilares: Mecánica, Eléctrica, Física y Biología. Puedes apoyarte en la línea de tiempo interactiva mostrando cómo genios como Newton o Euler sentaron las bases para que hoy podamos modelar la realidad.
- **Definición Formal:** Dirige la atención al bloque matemático principal. Explica de forma sencilla qué hace que la ecuación sea:
  - *Lineal:* La función $y$ y sus derivadas están a la primera potencia, sin multiplicarse entre sí.
  - *Homogénea:* El término independiente es cero (el lado derecho está igualado a 0).
  - *De coeficientes constantes:* Los multiplicadores $a_n$ son simples números.
- **Pase al siguiente:** "Ahora que entendemos qué es la ecuación, mi compañero Juan explicará cómo resolverla transformando el cálculo en álgebra simple."

---

## 👨‍🔬 Juan Rodríguez: El Calculista (Método y Casos de Raíces)
**Objetivo:** Explicar el "truco" de asumir una solución exponencial, demostrar cómo interactúa visualmente y desglosar los 3 casos matemáticos de las raíces.

**Acciones en la App:**
1. Navegar a la sección **"Método de la Ecuación Auxiliar"**.
2. Interactuar con los pasos de la Ecuación Auxiliar y jugar con el simulador de la **Gráfica Exponencial**.
3. Navegar a **"Interpretación de Raíces"** e ir cambiando las opciones en la "Comparativa Dinámica".

**Qué decir y explicar (Guion):**
- **La Hipótesis:** "El truco maestro aquí es asumir una solución del tipo $y = e^{rx}$ porque la derivada de una exponencial conserva su forma original."
- **El Paso a Paso:** Muestra en la app cómo al sustituir las derivadas, la exponencial se factoriza y, como nunca es cero, nos deja con un polinomio simple: la *Ecuación Auxiliar*.
- **Gráfica Exponencial:** Mueve el deslizador de $r$. "Fíjense cómo un $r > 0$ genera inestabilidad (crecimiento explosivo), mientras que un $r < 0$ genera decaimiento. ¡El signo de esta simple raíz dicta el destino del sistema!"
- **Casos de Raíces:** Ve a la sección de Interpretación de Raíces. Explica los tres casos mientras haces clic en la app para mostrar cómo cambia la gráfica:
  - *Reales Distintas:* Exponenciales puras, sin permitir el cruce reiterado del eje de equilibrio.
  - *Reales Repetidas:* Aparece una 'x' multiplicando; la gráfica puede cruzar el equilibrio a lo sumo una vez.
  - *Complejas:* Por la fórmula de Euler, los imaginarios se convierten en ondas trigonométricas, generando oscilaciones.
- **Pase al siguiente:** "Vimos ondas y exponenciales en la teoría, pero ¿cómo se ve esto en la vida real? Miguel nos llevará al Laboratorio Físico."

---

## ⚙️ Miguel Oliver: El Ingeniero (Laboratorio Virtual Físico)
**Objetivo:** Aterrizar los conceptos matemáticos en simulaciones físicas interactivas demostrando el impacto directo de las raíces en la realidad.

**Acciones en la App:**
1. Bajar a la sección **"Laboratorio Virtual de Ingeniería"**.
2. Jugar en vivo con los deslizadores de los 3 simuladores: **Sistema Masa-Resorte**, **Oscilador Amortiguado** y **Espacio de Fase**.

**Qué decir y explicar (Guion):**
- **Masa Resorte Ideal:** Mueve los deslizadores de Masa ($m$) y Resorte ($k$). Explica que, al no haber fricción, el sistema no pierde energía. La ecuación genera raíces complejas puras, por lo que la gráfica es una oscilación perpetua y perfecta.
- **Oscilador Amortiguado:** Incrementa el valor del amortiguador ($c$). Muestra a la clase cómo la fricción cambia el panorama:
  - Con un $c$ bajo, el sistema oscila perdiendo amplitud poco a poco (Subamortiguado).
  - Al subir más el $c$, la oscilación muere por completo antes de cruzar el eje (Sobreamortiguado).
- **El Espacio de Fase:** Explica esta herramienta vital para los ingenieros. 
  - "Esta gráfica relaciona Posición vs. Velocidad. La línea azul cerrada demuestra energía infinita constante."
  - "La espiral morada representa cómo el sistema amortiguado colapsa, succionando toda la energía hacia el centro (0,0)."
- **Pase a la siguiente:** "Y para poner a prueba si todo esto quedó claro, los dejo con Nieves, que trae un resumen definitivo y una sorpresa para la clase."

---

## 🎯 Nieves Pérez: La Mentora (Guía Paso a Paso y Dinámica)
**Objetivo:** Sintetizar el método con el Formulario, hacer que el público interactúe con el Reto y cerrar la presentación.

**Acciones en la App:**
1. Bajar a la sección **"Guía Práctica y Formulario"**.
2. Avanzar por el componente de los 4 pasos interactivos.
3. Bajar a **"¡Dinámica por un Premio!"** y animar al salón a participar, revelando las respuestas en vivo.
4. Mostrar finalmente la sección de **Conclusiones** y Créditos.

**Qué decir y explicar (Guion):**
- **El Cheat Sheet (Formulario):** "Después de tanta teoría y gráficas, aquí les dejamos el resumen definitivo. De un lado tienen el formulario codificado por color según las raíces, y del otro, una guía de 4 pasos súper sencillos para resolver cualquier problema de corrido." Haz clic en "Siguiente Paso" para mostrar cómo la app acompaña la resolución del estudiante.
- **La Dinámica en Clase:** Llega al reto relámpago. "¡Ahora es el turno de ustedes! El primero que responda correctamente cada nivel, se lleva un premio."
  - Lee la ecuación en voz alta y deja unos segundos.
  - Pide la respuesta y presiona **"Revelar Respuesta"** para validar al ganador con la animación de acierto.
  - Pasa a los siguientes niveles aumentando la dificultad.
- **Cierre y Conclusiones:** Baja a la conclusión y agradece la atención de todos, destacando cómo el método de la ecuación auxiliar conecta las matemáticas abstractas con simulaciones tangibles y reales, mostrando la sección de Créditos del Equipo.

---

## 📝 Instrucciones Técnicas para la Exposición
1. Abran una terminal en el directorio del proyecto.
2. Ejecuten el comando `npm run dev`.
3. Abran `http://localhost:4321` en su navegador.
4. Presionen `F11` para poner la vista en pantalla completa.
5. Se recomienda usar un ratón para arrastrar los deslizadores del laboratorio con mayor precisión durante la presentación en vivo.
