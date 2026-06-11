# Guion de Presentación: Laboratorio Virtual de Ecuaciones Diferenciales

Este documento sirve como la hoja de ruta y el guion oficial para la presentación de la aplicación educativa interactiva sobre **Ecuaciones Diferenciales Lineales Homogéneas de Orden Superior**.

La presentación está estructurada para desarrollarse fluida y equitativamente entre **4 expositores**. Cada expositor tiene un rol específico y se encargará de narrar e interactuar con distintas secciones de la aplicación web.

---

## 👨‍🏫 Expositor 1: El Teórico (Introducción y Definición)
**Objetivo:** Establecer las bases conceptuales, motivar la importancia de las ecuaciones diferenciales y definir la forma matemática general.

**Acciones en la App:**
1. Iniciar en la cabecera ("Hero Section").
2. Bajar a la sección **"Introducción a los Sistemas Dinámicos"**.
3. Bajar a la sección **"Ecuación Diferencial Lineal Homogénea de Orden (n)"**.

**Puntos Clave del Guion:**
- **Bienvenida:** Dar la bienvenida al "Laboratorio Virtual STEM" y explicar brevemente qué es una ecuación diferencial (la relación entre una función y sus tasas de cambio).
- **Importancia:** Destacar por qué estudiamos esto. Mencionar los 4 pilares: Mecánica, Eléctrica, Física y Biología. (Puedes interactuar con las tarjetas que muestran ejemplos).
- **Definición Formal:** Ir al bloque matemático principal. Explicar qué hace que la ecuación sea:
  - *Lineal:* La función $y$ y sus derivadas no tienen potencias ni se multiplican entre sí.
  - *Homogénea:* El término independiente es cero (el lado derecho de la igualdad es $0$).
  - *De coeficientes constantes:* Los multiplicadores $a_n$ son números reales, no funciones de $x$.
- **Pase al Expositor 2:** "Ahora que entendemos qué es la ecuación, mi compañero(a) explicará cómo el Método de la Ecuación Auxiliar nos permite resolverla transformando el cálculo en álgebra simple."

---

## 🧮 Expositor 2: El Calculista (Método y Solución Exponencial)
**Objetivo:** Explicar el "truco" de asumir una solución exponencial y demostrar cómo interactúa visualmente.

**Acciones en la App:**
1. Navegar a la sección **"Método de la Ecuación Auxiliar"**.
2. Interactuar con los pasos (Step 1 a Step 3) y con el simulador de la **Gráfica Exponencial**.

**Puntos Clave del Guion:**
- **La Hipótesis:** Explicar que asumimos una solución del tipo $y = e^{rx}$ porque la derivada de una exponencial es siempre proporcional a sí misma. 
- **El Paso a Paso:** Mostrar en la app cómo al sustituir $y$, $y'$, $y''$ se puede factorizar $e^{rx}$ y, como la exponencial nunca es cero, nos quedamos con un polinomio algebraico: la *Ecuación Auxiliar*.
- **Interacción con la Gráfica Exponencial:**
  - Jugar con el deslizador de la raíz $r$.
  - *Análisis:* "Fíjense cómo un $r > 0$ genera inestabilidad (crecimiento explosivo), mientras que un $r < 0$ genera estabilidad (decaimiento). ¡Ese simple número dictará el futuro de todo el sistema!"
- **Pase al Expositor 3:** "Al resolver el polinomio, podemos obtener diferentes tipos de raíces. ¿Qué pasa físicamente con cada tipo? Mi compañero lo demostrará a continuación."

---

## 📊 Expositor 3: El Analista Gráfico (Casos de Raíces y Dinámica)
**Objetivo:** Desglosar los 3 casos matemáticos (Reales Distintas, Repetidas y Complejas) y demostrar su comportamiento en tiempo real usando la gráfica comparativa.

**Acciones en la App:**
1. Navegar a la sección **"Interpretación de Raíces"**.
2. Seleccionar cada uno de los 3 casos en la botonera dinámica de la izquierda y observar el cambio en la gráfica **"Comparativa Dinámica"**.

**Puntos Clave del Guion:**
- **Explicación de las Tarjetas:** Mencionar brevemente los tres bloques matemáticos (Azul, Morado, Verde).
- **Interacción (Caso 1 - Raíces Reales Distintas):** Haz clic en la primera opción. Explica que la solución es simplemente una suma de exponenciales. Si ambas son negativas, el sistema colapsa rápidamente sin cruzar el eje.
- **Interacción (Caso 2 - Raíces Reales Repetidas):** Haz clic en la segunda opción. Muestra cómo aparece un factor lineal $(C_1 + C_2x)$. Esto permite que la gráfica pueda tener un único punto de inflexión o un cruce del eje antes de dispararse o decaer.
- **Interacción (Caso 3 - Raíces Complejas Conjugadas):** Haz clic en la tercera opción. ¡Aquí ocurre la magia! Por la fórmula de Euler, los números imaginarios se convierten en senos y cosenos. Muestra cómo la gráfica verde genera ondas y oscilaciones perfectas.
- **Pase al Expositor 4:** "Vimos ondas, exponenciales y decaimientos en abstracto. Pero, ¿cómo se ve esto en una máquina real? Mi compañero nos llevará al Laboratorio Físico."

---

## ⚙️ Expositor 4: El Ingeniero (Laboratorio Físico y Ejercicios)
**Objetivo:** Aterrizar los conceptos matemáticos en simulaciones físicas interactivas (Masa-resorte y Fase) y cerrar la exposición con la sección de evaluación.

**Acciones en la App:**
1. Bajar a la sección **"Laboratorio Virtual de Ingeniería"**.
2. Jugar con los simuladores: **Sistema Masa-Resorte**, **Oscilador Amortiguado** y **Espacio de Fase**.
3. Cerrar mostrando la sección **"Práctica y Evaluación"**.

**Puntos Clave del Guion:**
- **Masa Resorte Ideal:** Jugar con los deslizadores de Masa ($m$) y Resorte ($k$). Explicar que como no hay fricción, la ecuación auxiliar da raíces *complejas puras*, creando una oscilación que nunca se detiene (energía conservada).
- **Oscilador Amortiguado:** Ahora agregar el amortiguador ($c$). Mostrar cómo el sistema pasa de *Subamortiguado* (oscila perdiendo amplitud, raíces complejas) a *Sobreamortiguado* (cae directo sin oscilar, raíces reales).
- **El Espacio de Fase:** Explicar el gráfico de Posición vs Velocidad. 
  - La línea azul (conservativo) es un ciclo cerrado de energía infinita.
  - La espiral morada (amortiguado) es el "Atractor" succionando toda la energía hasta llevar la velocidad y posición a cero.
- **Cierre y Ejercicios:** Mostrar la sección final. "Nuestra aplicación permite que los estudiantes pongan a prueba su aprendizaje evaluando raíces y contrastando con el ejercicio resuelto paso a paso. Muchas gracias por su atención, bienvenidos a la nueva era de educación STEM interactiva."

---

## 📝 Instrucciones Técnicas Adicionales
Para correr la presentación en su entorno local (durante la exposición):
1. Abran una terminal en el directorio del proyecto.
2. Ejecuten `npm run dev`.
3. Abran `http://localhost:4321` en su navegador.
4. Presionen `F11` para pantalla completa y naveguen por la aplicación utilizando la barra superior o haciendo scroll.
