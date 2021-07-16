

import { CloseCircleOutlined,RightOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd'
import React, { useState } from 'react'

import { SocketContext } from '../Context/SocketContext';

import { Redirect, useHistory } from 'react-router';

import { getUsuarioStorage } from '../helpers/GetUsuarioStorage';
import { useHideMenu } from '../hooks/useHideMenu';
import { useSocket } from '../hooks/useSocket';


const {Title, Text } =Typography;


export const Escritorio = () => {



    
    useHideMenu(false);

    const [usuario ] = useState(getUsuarioStorage()); // LLAMANDO LA FUNCIOON QUE ESTA EN EL HELPERS


    const { socket } = useSocket(SocketContext) // importando el socket 

   
    const [ticket, setTicket] = useState(null);



    const history = useHistory();


    const Salir = (e)=>{


        e.preventDefault();

            localStorage.clear(); // borramos todo lo que esta en el localstorage

            history.replace('/ingresar'); // lo podiamos hacer un .push , pero lo hago con .replace , para que no pueda regresar a la pantalla anterior de la app 

        console.log('salir');




    }



    const siguienteTicket = ()=>{

            console.log(usuario);
            socket.emit('siguiente-ticket-trabajar',usuario, ( ticket )=>{// mandandole al backend el usuario 

            setTicket(ticket) //state        // mandadno el ticket que estoy recibiendo en el callback


            console.log(ticket);




       }) 




    }

    if(!usuario.agente || !usuario.escritorio){ // si  no hay usuario.agente y usuario.escritorio no existen  : 
        return <Redirect to="/ingresar" /> /// que nos reedicione a ingresar 
      }



    return (
        <>
            
        <Row>{/* EL rOW ES UNA HILERA  SON Componentes DE ANTD */ }

        <Col span={20}>
        
        <Title level={2}>{usuario.agente}</Title>
        <Text>Usted está atendiendo  en el escritorio: </Text>

        <Text type="success"> { usuario.escritorio } </Text>
        
        
        
        </Col>

        <Col span={4} align="right">
        

        <Button

        shape="round"
        type="danger"
        onClick={Salir}

        
        >
        




    
        <CloseCircleOutlined />

        Salir  
        </Button>
        
        
        
        </Col>
        



        </Row>

        <Divider />


            {


                ticket && (

                    <Row>

                     <Col>
        
        
                   <Text>Está atendiendo al ticket número:</Text>
                  <Text
                 style={{fontSize:30}}
                 type="danger"
    
              >
                { ticket.numero }
              
              </Text>
        
        
            </Col>
            </Row>


                    

                )

            
        

        }


        <Row>


        <Col offset={18} span={6} align="right">


        <Button

        onClick={siguienteTicket}

        shape="round"

        type="primary"

        >

        <RightOutlined/>
        Siguiente</Button>





        </Col>

 




        </Row>





        </>
    )
}
