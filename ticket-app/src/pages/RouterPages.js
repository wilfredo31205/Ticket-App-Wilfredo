
import { Layout, Menu } from 'antd';
import {


  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';



import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


import {Ingresar} from './Ingresar'

import {Cola} from './Cola'

import {CrearTicket } from './CrearTicket'
import { Escritorio } from './Escritorio';
import { UiContext } from '../Context/UiContext';



const {Sider, Content } = Layout;




export const RouterPages = () => {


      const { OcultarMenu } = useContext(UiContext)




    return (
       
      
        <Router>


    <Layout   style={{height:'180vh'}} > {/* con  style {{height:'100vh'}} : hacemos que tome todo el tamaño vertical  */ }
     <Sider collapsedWidth="0" /* te permite deslizar el menu*/
     breakpoint="md"
     hidden={OcultarMenu }> {/* llamando la funcion de  ocultar menu que está en el context */ } 
     

    
    <div className="logo" />
    <Menu theme="dark" mode="inline" className="color" defaultSelectedKeys={['1']}> { /* con  defaultSelectedKeys={['2']  colocamos que cual menu se quede 
    
    subraad o la opcion
    
    */}
      <Menu.Item key="1" icon={<UserOutlined />}>

        <Link to="/ingresar">
       
        Ingresar
        </Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
    
      <Link to="/cola">
 
        Cola
        </Link>


      </Menu.Item>

      <Menu.Item key="3" icon={<UploadOutlined />}>

      <Link to="/crearTicket">
       
       Crear Ticket
       </Link>

        
      </Menu.Item>
    </Menu>
  </Sider>
  <Layout className="site-layout">
    
    
    
    
    
    
    <Content
      className="site-layout-background"
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
      }}
    >
    
        <Switch>

        <Route path="/ingresar" component={Ingresar} />

        <Route path="/cola" component={Cola} />

        <Route path="/crearTicket" component={CrearTicket} />

        <Route path="/escritorio" component={Escritorio} />

        <Redirect to="/ingresar" /> 



        </Switch>






    </Content>
  </Layout>
</Layout>












        </Router>
      
      
      
      
      

      
      
      
      


  

    )
}




















