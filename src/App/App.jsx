import Body from '../Body/body'
import Form from '../Form/form'
import Header from '../Header/Header'
import './App.css'

const App = () => {
    return(
        <>
        <Header/>
        <Body
        Title="Learn to code by Watching others"
        Texto="See hpw experienced developers solve problems in real-time."
        Sub="Witching scripted tutoriaçs is great, but understanding how developers think is invaluable."
        />
        <Form/>
        </>
    )
}

export default App