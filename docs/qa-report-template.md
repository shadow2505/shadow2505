# Reporte QA demostrativo

Proyecto: Landing page con formulario.
Tipo de prueba: QA manual y web testing.
Objetivo: detectar errores antes de publicar una pagina.

## Alcance

- Navegacion principal.
- Botones de accion.
- Formulario de contacto.
- Vista movil.
- Enlaces externos.
- Consistencia visual.

## Entorno de prueba

| Elemento | Detalle |
|---|---|
| Navegador | Chrome |
| Dispositivo | Laptop y vista movil simulada |
| Resoluciones | 1366x768, 768x1024, 390x844 |

## Resumen ejecutivo

La pagina puede publicarse despues de corregir errores de formulario, ajuste responsive y enlaces externos. Los problemas principales se concentran en confirmacion del formulario y navegacion movil.

## Bugs encontrados

| ID | Area | Severidad | Problema | Pasos | Resultado esperado | Recomendacion |
|---|---|---:|---|---|---|---|
| QA-001 | Formulario | Alta | El formulario no muestra confirmacion al enviar | Abrir pagina, llenar campos, enviar | Mostrar mensaje visible | Agregar estado de envio y validacion |
| QA-002 | Responsive | Media | El titulo se corta en pantalla pequena | Abrir en 390px de ancho | Titulo completo | Ajustar fuente y margenes |
| QA-003 | Navegacion | Media | Un boton no desplaza a la seccion correcta | Clic en boton | Ir a la seccion correcta | Revisar href e id |
| QA-004 | Enlaces | Baja | Un enlace externo abre en la misma pestana | Clic en enlace | Abrir nueva pestana | Usar configuracion de enlace externo |
| QA-005 | Contenido | Baja | Textos con estilo inconsistente | Revisar tarjetas | Textos uniformes | Unificar redaccion |

## Criterio de aceptacion

La pagina se considera lista cuando los formularios responden correctamente, la vista movil funciona, los enlaces navegan bien y el contenido mantiene un estilo consistente.
