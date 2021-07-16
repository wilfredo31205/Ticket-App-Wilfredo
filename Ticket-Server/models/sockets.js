
//const TicketList = require('./ticket-list');

const TicketList = require('./ticket-list')



class Sockets {

    constructor( io ) {

        this.io = io;


        // Crear la instancia de nuestro ticket list 

        this.ticketList = new TicketList(); // tenemos toda la instancia lista para trabajar desde ticket-list ya que lo importamos aqui 





        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {


            console.log('Cliente COnectado');


            socket.on('solicitar-ticket',(data , callback)=>{ // llamando la data o payload y el callback que esta en la funcion de  NuevoTicket  de lo cual esta emitiendo        // escuchando 
                

                const nuevoTicket = this.ticketList.crearTicket();

                callback(nuevoTicket); // llamando el callback y pasandole el argumento de nuevoticket 

                // este callback hace referencia a esta funcion :  socket.emit('Solicitar-ticket',null, (ticket)=>{ /
                    // console.log(ticket);


              //  console.log(nuevoTicket);n 


            //    console.log('Nuevo ticket backend');

            
            });


            socket.on('siguiente-ticket-trabajar', ({agente,escritorio},callback)=>{





               // const { agente , escritorio } = usuario;


                const suTicket = this.ticketList.asignarTicket(agente,escritorio)

                callback(suTicket);

                this.io.emit( 'ticket-asignado', this.ticketList.ultimos13 );


            })




 





            // Escuchar evento: mensaje-to-server
            // socket.on('mensaje-to-server', ( data ) => {
                // console.log( data );
                // 
                // this.io.emit('mensaje-from-server', data );
            // });
            // 
        
        });
    }


}


module.exports = Sockets;