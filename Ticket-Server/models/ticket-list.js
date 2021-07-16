

const Ticket = require('./ticket');




class TicketList{


    constructor(){


            this.ultimoNumero = 0;

            this.pendientes = []; // es decir cuando yo asigne un ticket voy a mover ese ticket de pendiente a los de asignados 

            this.asignados  = [];



    }


        get siguienteNumero(){ // metodos 


            this.ultimoNumero ++; // aumentando en 1 

            return this.ultimoNumero;

        }



        // 3 ticket que se veran en las tarjetas y 10 en el historial 


        get ultimos13(){


            return this.asignados.slice(0,13) //.slice es para recortar  y nos traiga los ticket del 0 al 13 


        }

        crearTicket(){


            const nuevoTicket = new Ticket(this.siguienteNumero); // creando la constante para crear un nuevo ticket y pasandole el ultimo numero, para que nos los genere 

            this.pendientes.push(nuevoTicket);

            return nuevoTicket;


        }


        asignarTicket(agente, escritorio){ // pasandole como parametro el agente y el escritorio, que lo voy a necesitar, para asignar el ticket


            if( this.pendientes.length === 0){ // si no hay ningun ticket pendiente

                return null; // que se salga  , porque si quiero asignar uno , tengo que leer el primer ticket asignado y lo voy a tener que mover y si hubiera 0 , explota la aplicacion



            }



            const siguienteTicket = this.pendientes.shift();   // con shift es un metodo que remueve el primer elemento del arreglo y lo regresa


        
            siguienteTicket.agente = agente; // el ticket va a tener el agente y el escritorio

            siguienteTicket.escritorio = escritorio;


            this.asignados.unshift(siguienteTicket); // para que no los agregue al inicio del arreglo 

            return siguienteTicket;


        }



}


module.exports =   TicketList;