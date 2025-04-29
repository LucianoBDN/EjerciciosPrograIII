class FiguraGeometrica{
    #perimetro;
    #superficie;


    constructor(){
        if(this.constructor === FiguraGeometrica){
            throw new Error("No se puede instanciar la clase FiguraGeometrica")
        }
    }

    toString(){
        return `Perimetro: ${this.#perimetro} \nSuperficie: ${this.#superficie}`
    }

    dibujar(){
        console.log("logica")
    }

    setPerimetro(perimetro) {
        this.#perimetro = perimetro;
    }
    
    setSuperficie(superficie) {
        this.#superficie = superficie;
    }

    calcularDatos(){
        console.log("datos")
    }

}



class Rectangulo extends FiguraGeometrica{
    _ladoUno;
    _ladoDos;

    constructor(lado1, lado2){
        super();
        this._ladoUno = lado1;
        this._ladoDos = lado2;
        this.calcularDatos();
    }

    calcularDatos(){
        let perimetro = 2 * (this._ladoUno + this._ladoDos);
        let superficie = this._ladoUno * this._ladoDos;

        this.setPerimetro(perimetro);
        this.setSuperficie(superficie);
    }

    dibujar() {
        for (let i = 0; i < this._ladoUno; i++) {
            let fila = "";
            for (let j = 0; j < this._ladoDos; j++) {
                fila += "* ";
            }
            console.log(fila);
        }
    }

    toString() {
        return `Rectángulo:\n` +
               `Lado 1: ${this._ladoUno}\n` +
               `Lado 2: ${this._ladoDos}\n` +
               `${super.toString()}`;
    }

}


 class Triangulo extends FiguraGeometrica{
    _altura;
    _base;

     constructor(altura, base){
        super();
        this._altura = altura;
        this._base = base;
        this.calcularDatos();
    }

    calcularDatos(){
        let perimetro = this._base * 3;
        let superficie = (this._base * this._altura) / 2;

        this.setPerimetro(perimetro);
        this.setSuperficie(superficie);
    }

    dibujar(){
        let dibujo = "";
        for (let i = 1; i <= this._altura; i++) {
            let espacios = this._altura - i; 
            let asteriscos = (i * 2) - 1;   
            dibujo += " ".repeat(espacios) + "*".repeat(asteriscos) + "\n";
        }
        console.log(dibujo)
    }

    toString() {
        return `Triángulo:\n` +
               `Altura: ${this._altura}\n` +
               `Base: ${this._base}\n` +
               `${super.toString()}`;
    }


 }








let miRectangulo = new Rectangulo(7, 5);


miRectangulo.dibujar();


console.log(miRectangulo.toString());



let otroRectangulo = new Rectangulo(2, 4);


otroRectangulo.dibujar();


console.log(otroRectangulo.toString());


let miTriangulo = new Triangulo(10, 20);


miTriangulo.dibujar();


console.log(miTriangulo.toString());


















