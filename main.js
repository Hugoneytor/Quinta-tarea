var btnCarrera = document.querySelector("#btnCarrera").addEventListener("click", ()=>{

    class Corredor{
        constructor(nombre,numero){
            this._nombre = nombre;
            this._numero = numero;
            
        }
    }

    class Tortuga extends Corredor{
    constructor(nombre, numero, edad){
        super(nombre,numero);
     
        this._sumaT = 0;
        this._edad = edad;
    }

    get sumaT(){
        return this._sumaT;
    }

    correr(){
        
            let avance = Math.trunc(Math.random()*10)+1;
            

            if(avance >= 1 && avance <= 4){
                this._sumaT += 3;
            }else if(avance >= 5 && avance <= 7 ){
               this._sumaT -= 3;
            }else{
                this._sumaT += 1;
            }

        
    }
}

class Liebre extends Corredor{
    constructor(nombre, numero, altura){
        super(nombre, numero)
        this._altura = altura;
        this._suma = 0;
    }

    get suma(){
        return this._suma;
    }

    correrLiebre(){
       
            let avanceL = Math.trunc(Math.random()*100) + 1;
            
            if(avanceL>=1 && avanceL <= 20){
                this._suma += 0;
            }else if(avanceL >= 21 && avanceL <= 40){
                this._suma += 9;
            }else if(avanceL >= 41 && avanceL <= 50){
                this._suma -= 12;
            }else if(avanceL>=51 && avanceL <= 85){
                this._suma += 1;
            }else{
                this._suma -=2;
            }
        
    }
}

class Ganador{
    constructor(){
    }
    finCompeticion(){
        var tortuga = new Tortuga();
        var liebre = new Liebre();
    
        while(tortuga.sumaT < 90 && liebre.suma < 90){
            tortuga.correr();
            liebre.correrLiebre();


        }
        console.log('Posición de la tortuga ' + tortuga.sumaT);
        console.log('Posición de la liebre '+ liebre.suma)
        
        if(tortuga._sumaT>90){
            alert("Ganó la tortuga");
        }else if(liebre._suma>90){
            alert("Ganó la liebre");
        }else if(liebre._suma> 90 && t > 90){
            alert("Hubo empate xd");
        }
    }
}

var ganador = new Ganador();
ganador.finCompeticion();




})