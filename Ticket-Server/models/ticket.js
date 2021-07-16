
const {v4: uuidv4 } = require('uuid')



class Ticket{

    constructor(numero){


        this.id = uuidv4();

        this.numero = numero;

        this.escritorio = null;

        this.agente     = null;



       // this.agente  = null; // vamos a tener el agente, unicamente cuando sean asignados 

     //   this.escritorio = null;  // vamos a tener el escritotio , unicamente cuando sean asignados 



    }



    







}

module.exports =  Ticket