import "./Members.css"

export function Members(){

    let integrantes=[
        {
            nombre:"Leo Messi",
            rol:"Baterista",
            foto:"https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
            nacimiento:"Rosario argentina-1987",
            id:1
        },
        {
            nombre:"Crisitano Ronaldo",
            rol:"voz principal",
            foto:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
            nacimiento:"Madeira Portugal-1985",
            id:2
            
        },
        {
            nombre:"James Rodriguez",
            rol:"voz suplente",
            foto:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Jamesrodriguez.jpg",
            nacimiento:"Ibage Colombia-1991",
            id:3

        },
        {
            nombre:"Totono grisales",
            rol:"Guitarrista",
            foto:"https://www.futbolred.com/files/image_800_600/uploads/2018/02/08/5a7c7e1964e12.jpeg",
            nacimiento:"Bello Antioquia-1993",
            id:4
        }
    ]

    function quehagocuandosedeelevento(evento){
        (evento.target.classList.add("blancoYnegro"))
    }

    function quehagocuandosedeelotroevento(evento){
        (evento.target.classList.remove("blancoYnegro"))
    }
    
    return(
        <>
            
            <div className="row row-cols-1 row-cols-md-3 g-3">

                {
                    integrantes.map(function(integrante){
                        return(
                            <div key={integrante.id}>
                                <div className="col">
                                    <div className="card h-100 shadow">
                                        <h3 className="text-center fw-bold">{integrante.nombre}</h3>
                                        <img src={integrante.foto} alt="foto" className="img-fluid w-100" onMouseOver={quehagocuandosedeelevento} onMouseLeave={quehagocuandosedeelotroevento}/>
                                        <h4 className="mt-3">Rol: {integrante.rol}</h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </>
    )
}