



import  { useContext, useEffect } from 'react'
import { UiContext } from '../Context/UiContext'

export const useHideMenu = (ocultar ) => { // le pasamos como parametro el parametro de ocultar, si ocultar es true, lo ocultamos, si es false, pues no 


    const {showMenu ,  hiddenMenu  } = useContext(UiContext)




    useEffect(() => {
     
     

        




       if(ocultar){

        hiddenMenu()

       }else{
            showMenu()

       }



       
       
    }, [ocultar, hiddenMenu,showMenu])




}
