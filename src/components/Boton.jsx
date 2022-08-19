const Boton = ({disabled}) => {
    return(
        <button className="btn mt-3 btn-danger" disabled={!disabled}>Ingresar</button>
    )
}

export default Boton;