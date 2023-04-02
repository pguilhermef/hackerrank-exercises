// I needed print the area and the perimeter of circle with radius passed in readLine()

// Eu precisava printar a area e o perimetro do circulo com o raio passado no readLine()

function main() {
    const r = readLine()
    const PI = Math.PI
    // Print the area of the circle:
    console.log(PI * (r**2))
    // Print the perimeter of the circle:
    console.log(2 * PI * r)
}