export const PI = 3.14159

export function getCircumference(radius) {
    return (2 * PI * radius).toFixed(2)
}

export function getArea(radius) {
    return (PI * radius * radius).toFixed(2)
}

export function getVolume(radius) {
    return (4 / 3 * PI * radius * radius * radius).toFixed(2)
}