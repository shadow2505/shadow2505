# Caso demostrativo: limpieza de datos

## Objetivo

Crear una estructura simple para organizar registros semanales y convertir informacion dispersa en una tabla util.

## Problema

Cuando la informacion llega desde varias fuentes, puede haber errores como:

- formatos mezclados,
- datos duplicados,
- columnas desordenadas,
- fechas inconsistentes,
- notas dificiles de comparar.

## Propuesta de solucion

Crear una tabla base con campos claros:

| Fecha | Fuente | Cantidad | Categoria | Estado | Observaciones |
|---|---|---:|---|---|---|
| 2026-07-01 | Registro A | 500 | Operacion | Revisado | Dato validado |
| 2026-07-02 | Registro B | 800 | Servicio | Pendiente | Falta confirmar |

## Indicadores sugeridos

- Total por categoria.
- Total por fuente.
- Registros pendientes.
- Registros revisados.
- Promedio diario.

## Reglas de control

1. Registrar informacion el mismo dia.
2. Separar categorias.
3. Revisar duplicados.
4. Mantener nombres consistentes.
5. Documentar cambios realizados.

## Resultado esperado

Una tabla mas clara, facil de revisar y lista para convertirse en reporte o dashboard.
