import './Home.css'
import { History } from '../History/History'
export function Home(){
    return(
        <>
            <section className="banner">

            </section>
            <section>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h4>INCUBUS</h4>
                            <p>
                            Incubus es una banda de rock alternativo2​3​ estadounidense formado por el vocalista Brandon Boyd, guitarrista Mike Einziger y batería José Pasillas cuando estudiaban juntos y después expandieron con la inclusión del bajista Alex "Dirk Lance" Katunich y Gavin "DJ Lyfe" Koppell; ambos reemplazados finalmente por Ben Kenney y DJ Kilmore respectivamente. Para el 2001 tuvieron un enorme éxito con el sencillo "Drive", seguido de su álbum Morning View.En 2003, la banda establece la fundación "Make Yourself Foundation" para donar dinero a fundaciones de beneficencia
                            </p>
                            <img src="https://firebasestorage.googleapis.com/v0/b/musicajjg-e86d3.appspot.com/o/incubus.jpg?alt=media&token=10784a7b-d56f-4fc0-baa6-61714a7f2b9a" alt="foto" className='img-fluid w-100'/>
                            <p>Incubus se forma en un garaje de Calabasas, California en enero de 1991. Empezaron tocando en pequeños clubes y fiestas, para saltar a telonear a todo un elenco de bandas consagradas de Hollywood como Poison.En el año 1990 Jose Pasillas (Percusión) conoce a Mike Einziger (guitarrista) quien pasaba la mayor parte de su tiempo tocando la guitarra y a Alex Katunich (bajo) quien había participado en una banda de jazz de la cual lo expulsan por no saber leer partituras. Los tres deciden juntarse a tocar por diversión versiones de Megadeth y Metallica. En muy poco tiempo logran hacerse conocidos en el barrio, pero, faltaba un vocalista</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/musicajjg-e86d3.appspot.com/o/Incubus2.jpg?alt=media&token=b87485bc-b37c-41fb-8667-2174669dc975" alt="foto" className='img-fluid w-100' />
                            <p>El disco, llega a manos de KoRn, quienes deciden invitar a Incubus para que estos teloneen en su gira por Europa. Esta gira logra que Incubus vaya consiguiendo lentamente la fama que tanto esperaba dentro de la industria de la música, aprovechando esto, lanzan el 9 de septiembre de 1997 el disco S.C.I.E.N.C.E, el cual es promocionado en una pequeña gira, que los lleva posteriormente a un tour con 311 y Sugar Ray. Esta gira en principio se planeó solo para los Estados Unidos, pero debido al gran éxito, esta se extiende hacia algunos países de Europa. El éxito está llegando lentamente a la banda. Después de algunos problemas y discrepancias con Dj Lyfe, este se va de la banda, entrando en reemplazo el Dj Chris Kilmore. Aprovechando el buen momento que viven posterior a una gira con Sugar Ray y 311, Incubus comienza una nueva etapa iniciando diversas presentaciones, entre ellas: con Limp Bizkit y Cold, la participación en el Ozzfest ’98 y el Family Values, donde se presentan con la canción «New Skin».</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="banner2"></section>
            <section className='my-5'>
                <History/>
            </section>
        </>
    )
}