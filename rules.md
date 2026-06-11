Guía Maestra para el Desarrollo de Material Didáctico Web
Ecuaciones Diferenciales – Proyecto Educativo STEM
Objetivo
Desarrollar una página web estática, moderna, interactiva y visualmente atractiva para la enseñanza de Ecuaciones Diferenciales, utilizando herramientas compatibles con agentes de Inteligencia Artificial y metodologías modernas de aprendizaje STEM.
---
Arquitectura General Recomendada
Frontend
Framework Principal
```text
Astro
```
Razones:
Genera sitios extremadamente rápidos.
Produce HTML estático optimizado.
Excelente integración con Markdown.
Compatible con React, Vue y Svelte.
Ideal para materiales educativos.
Alternativa
```text
Next.js + React + TypeScript
```
Recomendado si el proyecto crecerá hacia una plataforma educativa completa.
---
Lenguaje de Programación
```text
TypeScript
```
Ventajas:
Tipado estático.
Menos errores.
Mejor integración con IA.
Código más mantenible.
---
Estilos
Framework CSS
```text
Tailwind CSS
```
Ventajas:
Desarrollo rápido.
Consistencia visual.
Fácil personalización.
Excelente integración con Astro.
---
Backend
Opción Recomendada
```text
Sin Backend
```
Generar únicamente:
HTML
CSS
JavaScript
Markdown
Beneficios:
Mayor velocidad.
Menor costo.
Menor complejidad.
Fácil despliegue.
---
Si se requiere escalabilidad futura
```text
Supabase
```
Permite:
Autenticación
Base de datos
Estadísticas
Comentarios
Almacenamiento
Sin administrar servidores.
---
Herramientas Matemáticas
Renderizado de Fórmulas
Recomendación Principal
```text
KaTeX
```
Ventajas:
Muy rápido.
Excelente compatibilidad con LaTeX.
Ideal para contenido educativo.
Ejemplo:
```latex
y'' - 5y' + 6y = 0
```
---
Visualización Científica
Plotly.js
Utilizar para:
Gráficas científicas.
Soluciones de ecuaciones diferenciales.
Diagramas de fase.
Comparación de soluciones.
---
Desmos API
Ideal para:
Interactividad matemática.
Manipulación de parámetros.
Visualización de funciones.
---
D3.js
Utilizar únicamente para:
Visualizaciones avanzadas.
Diagramas complejos.
Representaciones personalizadas.
---
Librerías Complementarias
Animaciones
```text
Framer Motion
```
Usar para:
Aparición progresiva.
Transiciones suaves.
Explicaciones paso a paso.
---
Iconografía
```text
Lucide Icons
```
---
Estructura Pedagógica Recomendada
Módulo 1
Introducción a las Ecuaciones Diferenciales
Concepto
Historia
Aplicaciones
---
Módulo 2
Clasificación
Ordinarias
Parciales
Lineales
No lineales
Homogéneas
No homogéneas
---
Módulo 3
Ecuaciones Diferenciales Lineales Homogéneas
Definición
Forma general
Interpretación física
---
Módulo 4
Método de la Ecuación Auxiliar
Teoría
Demostración
Procedimiento general
---
Módulo 5
Casos de Resolución
Raíces reales distintas
Raíces reales repetidas
Raíces complejas conjugadas
---
Módulo 6
Aplicaciones de Ingeniería
Circuitos eléctricos
Vibraciones mecánicas
Sistemas masa-resorte
Sistemas de control
---
Módulo 7
Ejercicios Resueltos
Formato:
```text
Problema
Análisis
Procedimiento
Resultado
Interpretación
```
---
Módulo 8
Ejercicios Propuestos
Con retroalimentación automática.
---
Reglas de Diseño Visual
Filosofía
Tema:
```text
Scientific Neon Dark
```
Inspiración:
MIT Media Lab
Interfaces científicas
Dashboards tecnológicos
Laboratorios de investigación
---
Colorimetría Principal
Fondo Principal
```css
#0A0E17
```
Azul negro profundo.
---
Fondo Secundario
```css
#121826
```
Tarjetas y contenedores.
---
Fondo Terciario
```css
#1A2333
```
Paneles interactivos.
---
Texto Principal
```css
#EAF2FF
```
---
Texto Secundario
```css
#B0C4DE
```
---
Color Matemático
```css
#00E5FF
```
Cian neón.
---
Color de Ejemplos
```css
#A78BFA
```
Violeta tecnológico.
---
Color de Éxito
```css
#00FFB3
```
Verde neón.
---
Advertencias
```css
#FFD166
```
---
Errores
```css
#FF5C8A
```
---
Tipografías
Títulos
```text
Orbitron
```
---
Contenido
```text
Inter
```
---
Código
```text
JetBrains Mono
```
---
Efectos Visuales
Glow Suave
```css
box-shadow:
0 0 10px rgba(0,229,255,.3),
0 0 20px rgba(0,229,255,.2);
```
---
Grid Científico
```css
background-image:
linear-gradient(rgba(0,229,255,.05) 1px, transparent 1px),
linear-gradient(90deg, rgba(0,229,255,.05) 1px, transparent 1px);
```
---
Reglas para Gráficas Interactivas
Objetivo
Toda gráfica debe contribuir al aprendizaje conceptual.
No deben ser elementos decorativos.
---
Gráfica 1
Soluciones Exponenciales
Mostrar:
```text
y = e^(2x)
y = e^(3x)
```
Controles:
Zoom
Mostrar/Ocultar curvas
Cambio de escala
---
Gráfica 2
Comparación de Raíces
Comparar:
Reales distintas
Reales repetidas
Complejas
El estudiante debe observar cómo cambia la solución.
---
Gráfica 3
Sistema Masa-Resorte
Parámetros manipulables:
```text
m
k
```
Visualizar:
Movimiento
Solución temporal
Frecuencia
---
Gráfica 4
Oscilaciones Amortiguadas
Parámetros:
```text
m
c
k
```
Visualizar:
Subamortiguado
Críticamente amortiguado
Sobreamortiguado
---
Gráfica 5
Espacio de Fase
Representar:
```text
x
vs
dx/dt
```
Permite comprender estabilidad dinámica.
---
Reglas para Animaciones Educativas
Paso a Paso
Cada ejercicio debe mostrarse en etapas:
```text
Paso 1
Planteamiento

Paso 2
Derivadas

Paso 3
Sustitución

Paso 4
Ecuación auxiliar

Paso 5
Raíces

Paso 6
Solución final
```
---
Velocidad
Utilizar transiciones entre:
```text
300 ms
500 ms
```
Evitar animaciones excesivas.
---
Reglas para Agentes de IA
El agente encargado de generar código debe:
Utilizar TypeScript.
Utilizar Astro.
Utilizar Tailwind CSS.
Utilizar KaTeX.
Utilizar Plotly.js.
Mantener diseño responsive.
Mantener accesibilidad WCAG.
Optimizar para dispositivos móviles.
Generar componentes reutilizables.
Separar contenido, lógica y presentación.
---
Estructura Final del Proyecto
```text
src/
│
├── pages/
├── components/
├── layouts/
├── content/
├── assets/
├── styles/
│
├── formulas/
├── exercises/
├── graphs/
│
└── animations/
```
---
Stack Tecnológico Final Recomendado
```text
Frontend
Astro
TypeScript
Tailwind CSS

Matemáticas
KaTeX

Visualización
Plotly.js
Desmos API

Animaciones
Framer Motion

Iconos
Lucide Icons

Control de versiones
GitHub

Despliegue
Cloudflare Pages

IA para desarrollo
ChatGPT
Claude Code
Cursor AI
GitHub Copilot
```
---
Resultado Esperado
Un material didáctico moderno, interactivo, científicamente riguroso y visualmente atractivo, orientado a estudiantes universitarios de ingeniería que cursan Ecuaciones Diferenciales, con énfasis en comprensión conceptual, visualización matemática y aprendizaje activo.