import React, {useState} from "react";
import uniqid from 'uniqid';

const Form = () => {
    const [nombre, setNombre] = useState('')
    const [fecha, setFecha] = useState('')
    const [listaFecha, setListadoFecha] = useState([])
    const [listanombres, setListadoNombres] = useState([])
    const [modoEdicion, setModoEdicion] = useState(false)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)

    const addNombre =(e)=>{
        e.preventDefault()
        if(!nombre.trim()){
                setError('Favor de llenar el campo de Nombre')
                return
        }
        const nuevoNombre = {
            id:uniqid(),
            tituloNombre:nombre
        }
        setListadoNombres([...listanombres, nuevoNombre])
        setNombre('');  
        setError(null)     
    }
    const addFecha =(e)=>{
        e.preventDefault()
        if(!fecha.trim()){
                setError('Favor de llenar el campo de la Fecha')
                return
        }
        const nuevaFecha = {
            id:uniqid(),
            tituloFecha:fecha
        }
        setListadoFecha([...listaFecha, nuevaFecha])
        setFecha('');  
        setError(null)     
    }

    const deleteNombre = (id) => {
        const nuevaArray = listanombres.filter(item => item.id !== id);
        setListadoNombres(nuevaArray);
    }
    const editar = (item) => {
        setModoEdicion(true)
        setNombre(item.tituloNombre)
        setId(item.id)
    }
    const editarNombre = (e) =>{
        e.preventDefault()
        const NuevoArray = listanombres.map( item => item.id === id ? {id:id, tituloNombre:nombre}: item)
        setListadoNombres(NuevoArray)
        setModoEdicion(false)
        setNombre('')
    }

    return(
        <div>
            <h2>Applicacion Para tareas</h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de Tareas</h2>
                    <ul className="list-group">
                        {
                            listanombres.map( item =>
                                <li key="{item.id}" className="list-group-item">{item.tituloNombre}
                                <button className="btn btn-danger float-right"
                                onClick={() => {deleteNombre(item.id)}}>
                                    BORRAR
                                    </button>
                                    {/*<button className="btn btn-info float-right"
                                onClick={() => {editar(item)}}>
                                    EDITAR
                            </button>*/}
                                </li>
                                )
                            
                          
                        }
                        
                        

                    </ul>
                </div>
                <div className="col">
                    <h2>Formulario para agregar las tareas</h2>
                    <form onSubmit={modoEdicion ? editarNombre : addNombre} className="form-group">
                        <input onChange={(e)=>{setNombre(e.target.value)}} className="form-control mb-3" type="text" placeholder="introduce el nombre" value={nombre}/>
                        <input className="btn btn-info btn-block" 
                        type="submit" 
                        value={modoEdicion ? 'Editar Nombre':'Registrar nombre'}
                        /></form>
                        
                    <form onSubmit={addNombre} className="form-group">
                        <input onChange={(e)=>{setNombre(e.target.value)}} className="form-control mb-3" type="text" placeholder="introduce el nombre" value={nombre}/>
                        <input onChange={(e)=>{setFecha(e.target.value)}} className="form-control mb-3" type="date" placeholder="introduce la fecha" value={fecha}/>
                        <input className="btn btn-info btn-block" 
                        type="submit" 
                        value={'Registrar Tarea'}
                        /></form>

                    {
                        error != null ? (
                            <div className="alert alert-danger">{error}</div>
                        ):
                        (
                            <div></div>
                        )
}
                </div>
            </div>
        </div>

    )
}

export default Form