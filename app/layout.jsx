//Aqui aplica todo lo global de la pagina

//Para que funcione hay que modifcar jsconfig.json
import '@styles/global.css'

import NavBar from '@components/NavBar';


//Para llamar el contenido de page, hay que setear el hijo
const RootLayout = ({children}) => {
    return (
        <html>
            <body>
                <div>
                </div>
                <main>
                    <NavBar/>
                    {children}
                </main>
            </body>
        </html>
    );
}

export default RootLayout;
