const Input = ({setEnabled}) =>{

return(
<div>
<label>Nombre</label>    
<input type="text" className="form-control"/>
<label>Contraseña</label>
<input type="password" className="form-control"
onChange={(event)=> event.target.value === '252525' ? setEnabled(true) : setEnabled(false)}/>

</div>



)}

export default Input;