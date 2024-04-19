import './form.css'

const Form = () =>{
    return(
    <>
    <div className="corpo">
      <input type="name" className='place'  placeholder='First Name' />
      <input type="name" className='place' placeholder='Last Name' />
      <input type="mail" className='place' placeholder='Email Address' />
      <input type="password" className='place' placeholder='Password' />
      <button className='butao'>CLAIM YOUR FREE TRIAL</button>
      
    </div>
    </>
    )
}

export default Form