


import React from 'react';
import { SocketProvider } from './Context/SocketContext';
import { UiProvider } from './Context/UiContext';
import { RouterPages } from './pages/RouterPages';
















export const TicketApp = () => {
    return (

        < SocketProvider>

              <UiProvider>
            

             <RouterPages />

 

             </UiProvider>

        </SocketProvider>
    
    )
}
 