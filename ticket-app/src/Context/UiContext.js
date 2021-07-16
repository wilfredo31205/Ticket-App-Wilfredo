




import React,{createContext , useState} from 'react'







export const UiContext = createContext();




export const UiProvider = ({children}) => {


 

const [OcultarMenu, setOcultarMenu] = useState(true)



const showMenu = ()=>{


    setOcultarMenu(false);

}


const hiddenMenu = ()=>{


    setOcultarMenu(true);

}






    

    return (


        <UiContext.Provider value={{

            OcultarMenu,
            showMenu,
            hiddenMenu


        }}>


            {children}


        
       



        </UiContext.Provider>


       
       
    )
}
