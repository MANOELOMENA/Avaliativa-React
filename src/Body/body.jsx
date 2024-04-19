import './body.css'

const Body = ({Title, Texto, Sub}) => {
    return (
        <>
        <h2>{Title}</h2>
        <p className='Texto'>{Texto}</p>
        <q className='Sub'>{Sub}</q>
        </>
    )
}

export default Body