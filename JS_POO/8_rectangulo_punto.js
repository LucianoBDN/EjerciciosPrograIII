class Punto {
    _x;
    _y;


    constructor(x , y){
        this.x = x;
        this.y = y;
    }

    get_x(){
        return this.x;
    }
    get_y(){
        return this.y;
    }

}


class Rectangulo{
    _vertice1;
    _vertice2;
    _vertice3;
    _vertice4;
    _area;
    _perimetro;
    _ladoUno;
    _ladoDos;


    constructor(vertice1, vertice3){
        this._vertice1 = vertice1;
        this._vertice3 = vertice3;

        this._vertice2 = new Punto(vertice3.get_x(), vertice1.get_y());
        this._vertice4 = new Punto(vertice1.get_x(), vertice3.get_y());


        this._ladoUno = Math.abs(vertice1.get_x() - vertice3.get_x());
        this._ladoDos = Math.abs(vertice1.get_y() - vertice3.get_y());
        
        this._area = this._ladoUno * this._ladoDos;
        this._perimetro = 2 * (this._ladoUno + this._ladoDos);

    }



    get_area(){
        return this._area;
    }

    get_perimetro(){
        return this._perimetro

    }
    toString() {
        return `Rectángulo:
        Vértice 1: (${this._vertice1.get_x()}, ${this._vertice1.get_y()})
        Vértice 2: (${this._vertice2.get_x()}, ${this._vertice2.get_y()})
        Vértice 3: (${this._vertice3.get_x()}, ${this._vertice3.get_y()})
        Vértice 4: (${this._vertice4.get_x()}, ${this._vertice4.get_y()})
        Lado Uno (base): ${this._ladoUno}
        Lado Dos (altura): ${this._ladoDos}
        Área: ${this._area}
        Perímetro: ${this._perimetro}`;
    }
}


let p1 = new Punto(2, 5);  
let p3 = new Punto(8, 1); 


let rectangulo = new Rectangulo(p1, p3);


console.log(rectangulo.toString());
