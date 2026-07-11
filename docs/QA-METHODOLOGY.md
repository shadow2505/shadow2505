# Metodología QA Manual

## 1. Definir alcance

Antes de probar, se documenta:

- qué debe funcionar,
- quién usará el producto,
- qué dispositivos o navegadores se revisarán,
- qué está fuera del alcance,
- cómo se define una entrega aceptable.

## 2. Preparar casos de prueba

Se incluyen casos:

- positivos,
- negativos,
- de borde,
- de navegación,
- de responsive,
- de contenido.

## 3. Ejecutar pruebas

Cada prueba registra:

| Campo | Descripción |
|---|---|
| ID | identificador único |
| Área | sección afectada |
| Precondición | estado previo |
| Pasos | acciones para reproducir |
| Resultado esperado | comportamiento correcto |
| Resultado obtenido | comportamiento observado |
| Severidad | impacto del problema |
| Evidencia | captura, URL o nota |

## 4. Severidad

| Nivel | Criterio |
|---|---|
| Crítica | bloquea el flujo principal o expone información |
| Alta | una función importante no trabaja correctamente |
| Media | afecta la experiencia, pero existe alternativa |
| Baja | detalle visual, de contenido o consistencia |

## 5. Entrega

El reporte final incluye:

- resumen ejecutivo,
- alcance,
- entorno de prueba,
- bugs encontrados,
- evidencia,
- riesgos,
- recomendación de publicación.

## 6. Criterio de cierre

Un bug se considera cerrado cuando:

1. la corrección fue aplicada,
2. el caso original fue repetido,
3. el resultado coincide con lo esperado,
4. no apareció una regresión evidente.
