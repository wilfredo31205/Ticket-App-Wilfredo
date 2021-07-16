


import React, { useState } from 'react'



import { Form, Input, Button, InputNumber, Typography, Divider } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

// Typography lo utilizamos para trabajar con textos en antd 

import {Redirect, useHistory} from 'react-router-dom';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/GetUsuarioStorage';


const {Title, Text } = Typography; // nos permiten trabajar el titulo y los textos  de manera centralizada



const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 14 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 14 },
  };




export const Ingresar = () => {

        
    useHideMenu(false);

        const history = useHistory();


        const [usuario ] = useState( getUsuarioStorage ()); // LLAMANDO LA FUNCIOON QUE ESTA EN EL HELPERS


        console.log(usuario);




        const onFinish = ({agente,escritorio}) => { // agente y escritorio vienen de los input especificamente del name 
         // console.log('Success:', values);

          localStorage.setItem('agente', agente);

          localStorage.setItem('escritorio', escritorio);


            // si todo salio bien , entonces que nos diriga a : 

            history.push('/escritorio');



        };
      
        const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        };



        if(usuario.agente && usuario.escritorio){ // si usuario.agente y usuario.escritorio existen : 


          return <Redirect to="/escritorio" /> /// que nos reedicione a escritorio 





        }





    return (
       
        <>

        <Title level={2}>Ingresar</Title>

        <Text>Ingrese su nombre y número de escritorio</Text>

        <Divider />

<Form
   {...layout}
   name="basic"
   initialValues={{ remember: true }}
   onFinish={onFinish}
   onFinishFailed={onFinishFailed}
 >
   <Form.Item
     label="Nombre del Agente"
     name="agente"
     rules={[{ required: true, message: 'Por favor , ingrese su nombre' }]}
   >
     <Input />
   </Form.Item>
   <Form.Item
     label="Escritorio"
     name="escritorio"
     rules={[{ required: true, message: 'Ingrese el numero de escritorio' }]}
   >
     <InputNumber min={1} max={99} />
   </Form.Item>
  
  
  
   <Form.Item {...tailLayout}>
     <Button 
     type="primary"
      htmlType="submit"
       shape="round"
       
       >Ingresar
       <SaveOutlined />
     </Button>
   </Form.Item>
 </Form>
  






        </>








       
       
    )
}
