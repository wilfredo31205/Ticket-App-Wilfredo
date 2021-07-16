


import React, { useContext, useState } from 'react'



import {Button, Col, Row , 

    Typography} from 'antd';
import { CloudDownloadOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../Context/SocketContext';


const { Title, Text} = Typography



export const CrearTicket = () => {



    useHideMenu(true);


    const { socket }  = useContext(SocketContext)

    const [ticket, setTicket] = useState(null)









    const NuevoTicket = ()=>{


        console.log('Nuevo Ticket');

        // desde aqui se comienza a trabajar con socket 


        socket.emit('solicitar-ticket',null, (ticket)=>{ // creando un callback para que el backend es quien le va a decir ejecutate o haz este codigo cuando el backend quiera que se ejecute

        


            setTicket(ticket);     // CUANDO Y A TENEMOS EL TICKET , SE VA A DISPARAR ESTE CALLBACK
        
                   

            console.log(ticket);





        }) // en este caso no queremos mandar nada ,por lo que lo colocamos como null 





    }




    return (
        <>
            
        <Row>

          <Col span={14} offset={6} align="center">


            <Title level={3}>

            Presione el boton para generar un nuevo ticket

            </Title>



            <Button
            
                type="primary"
                shape="round"
                icon={<CloudDownloadOutlined />}
                size="large"
                onClick={NuevoTicket}
              
                className="parrafo animate__animated animate__backInUp"
            
            
            >

                Nuevo Ticket

            </Button>



          </Col>




        </Row>



            {


                ticket && (

                    // si existe el ticket, mostramos esta informacion 

                    <Row style={{marginTop: 100}}>
                    <Col
                    
                    span={14}
                    offset={6}
                    align="center"
                    
                    >
                    <Text level={2}>
                    Su Número
                    </Text>
                    <br />
                    
                    <Text type="success" style={{ fontSize: 55}}>{ticket.numero}
                    
                    
                    </Text>
                    
                    
                    
                    
                    </Col>
                    </Row>


                )


            }
    
        </>
    )
}
