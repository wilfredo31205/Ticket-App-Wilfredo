





export const getUsuarioStorage = ()=>{ // cuando llame a esta funcion , siempre voy a tener el aente y el escritorio


    return{
        

        agente: localStorage.getItem('agente') ,// si eso no existe lo mandamos como null 

        escritorio: localStorage.getItem('escritorio') // si eso no existe lo mandamos como null 






    }


    




}

































