export async function consultarCanciones(){

    //RECETA PARA CONSUMIR APIS CON JS

    //1. PA' ONDE VAS OME
    // URL+ EP DEL SERVICIO
    const IDARTISTA="3YcBF2ttyueytpXtEzn1Za"
    const URI=`https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`
    const TOKEN="Bearer BQCL4AbpdgYMcx5eB_8l6VYPp0I_I_MYVZBK22m-QWMguGPamQe5MoKMt3zXaZDIc5L6QvaWcSN744r8wCRdF_YbLgo4t72SAnNszN6OUVyiODTS85s"

    //2. QUE VAS HACER ALLA OME...
    //CONFIGURO LA PETICION
    let peticion={
        method:"GET",
        headers:{
            "Authorization":TOKEN
        },
    }

    //3. PIDA EL TAXI
    //utilice la promesa FETCH para ir al back y consumir el API
    let respuesta=await fetch(URI,peticion)
    let canciones=await respuesta.json()

    return canciones


    


}