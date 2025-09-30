# Formularios: Astronautas

# Ejercicio: Formulario de Selección de Astronautas

## Contexto

La **Agencia Espacial Internacional** está en plena búsqueda de candidatos para la **Misión Marte 2030**.

Como desarrollador web, tu tarea es construir un **formulario de postulación** que valide los datos de los aspirantes de manera estricta, mostrando errores cuando sea necesario y confirmando la postulación sólo si todo es correcto.

Además de los mensajes de error, cada campo deberá **cambiar de estilo visual**:

- Verde cuando el dato sea válido.
- Rojo cuando no cumpla los requisitos.

---

## Requisitos

El formulario debe incluir los siguientes campos y validaciones:

1. **Nombre completo** (texto)
    - Obligatorio.
    - Al menos 3 caracteres.
2. **Correo de contacto** (email)
    - Obligatorio.
    - Debe tener formato válido.
3. **Código de seguridad** (password)
    - Obligatorio.
    - Al menos 8 caracteres.
    - Debe contener una mayúscula, un número y un símbolo especial (`!@#$%&*`).
4. **Edad** (number)
    - Obligatorio.
    - Entre 25 y 50 años.
5. **Especialidad** (radio: Piloto, Ingeniero, Médico, Científico)
    - Obligatorio seleccionar una opción.
6. **Planeta de origen** (select)
    - Obligatorio.
    - No se acepta la opción vacía.
7. **Fecha de disponibilidad para despegar** (date)
    - Obligatoria.
    - Debe ser **una fecha futura** respecto al día actual.
8. **Nivel de condición física** (range de 1 a 10)
    - Obligatorio.
    - El valor debe ser **7 o más**.
9. **Expediente médico** (file)
    - Obligatorio.
    - Debe subirse un archivo **PDF**.
10. **Comentarios adicionales** (textarea)
    - Opcional.
    - Si se rellena, debe tener **al menos 10 caracteres**.
11. **Acepto los riesgos de la misión** (checkbox)
    - Obligatorio.

### Comportamiento esperado

- Cada campo inválido se mostrará con borde y fondo **rojo**.
- Cada campo válido se mostrará con borde y fondo **verde**.
- Los mensajes de error deben ser **temáticos** (ej: “Acceso denegado”, “Selecciona tu planeta de origen”).
- Si todo es correcto, mostrar: **Todo ha sido correcto.**
