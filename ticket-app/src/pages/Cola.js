

import React,{Fragment} from 'react'


import Familia from '../images/familia.jpg';
import {Col, Typography  , List, Row, Card, Tag, Divider } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';


const { Title,  Text} = Typography;





const data = [
    {
        ticketNo: 33,
        escritorio: 3,
        agente: 'Fernando Herrera'
    },
    {
        ticketNo: 34,
        escritorio: 4,
        agente: 'Melissa Flores'
    },
    {
        ticketNo: 35,
        escritorio: 5,
        agente: 'Carlos Castro'
    },
    {
        ticketNo: 36,
        escritorio: 3,
        agente: 'Fernando Herrera'
    },
    {
        ticketNo: 37,
        escritorio: 3,
        agente: 'Fernando Herrera'
    },
    {
        ticketNo: 38,
        escritorio: 2,
        agente: 'Melissa Flores'
    },
    {
        ticketNo: 39,
        escritorio: 5,
        agente: 'Carlos Castro'
    },
];










export const Cola = () => {

    
    useHideMenu(true);


    return (
        <>



        <h1 className="colores">Banco Renacer</h1>

        <p className="parrafo animate__animated animate__backInUp">"Tus Problemas son parte de nuestros problemas"</p>

        <img src={Familia} className="familia  animate__fadeInLeft"  alt="imagenfondo" />




        <Title level={1}>Atendiendo al Cliente : </Title>

        <Row>

        <Col span={12}> {/*ant o andesing tiene 24 columnas por lo que solamente utilizamos 12 o la mitad*/}

        <List 
        
        
         //lAS LISTAS NECESITAN UN DATASOURCE , EL DATASOURCE, VAN A HACER NUESTRA DATA GENERALMENTE

         // 

        
        dataSource={data.slice(0,3)} // QUE CORTE LOS PRIMEROS 3 

        renderItem={item =>( // PARA QUE NOS MUESTRE LOS ELEMENTOS DE LA LISTA DEBEMOS DE DECLARAR EL RENDERITEM , ES UN CICLO EN LA CUAL VAMOS A RECCORRER CADA UNO
            // DE LOS ELEMENTOS DE LA DATA 

            <List.Item>  {/*  LIST.ITEM ES PARA SABER COMO LO QUEREMOS RETORNAR    */ }

                <Card 
                
                    style={{width: 300, marginTop:16}}

                    actions={[ // los actions es un objeto mediante el cual podemos rendelizarlo de esta manera

                        <Tag color="volcano">{item.agente}</Tag>,

                        <Tag color="magenta">Escritorio{item.escritorio}</Tag>, 



                     ]}
                
                    >

                        <Title>No.{item.escritorio}</Title>
                
                

                </Card>
             



            </List.Item>



        )}
        
        
        
        
        />




        </Col>


  
        <Col span={12}>



            <Divider>Historial</Divider>

            <List 
            
                    
            dataSource={data.slice(3)}
            renderItem={item =>(

                <List.Item>


                <List.Item.Meta 
                
                
                    title={`Ticket No. ${item.ticketNo}`}
                    description={

                        <>



                        <Text type="secondary">En el escritorio</Text>

                        <Tag color="magenta">{item.ticketNo}</Tag>

                        <Text type="secondary">Agente: </Text>

                        <Tag color="volcano">{item.agente}</Tag>




                        </>


                    }
                
                
                
                
                />





            



                </List.Item>



            )}
            
            
            
            
            
            />



        </Col>





        </Row>



     


        </>
    )
}
