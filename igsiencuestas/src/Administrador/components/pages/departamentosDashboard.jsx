import React, {useState} from "react";

const DepartamentosDashboard = () => {

    //let alumnos = "Ninguno";
    let titulo = "Dashboard de Departamentos";


    const [nombre,setNombre] = useState("Victor");

    let departamentos = [
        "1",
        "2",
        "3",
        "4",
        "5"
    ]

    const cambiarNombre = (nombre) => {
      setNombre(nombre)
    }

  return (
    <div className="departamentos-dashboard">
      <h1>{titulo}</h1>
      <p>Bienvenido al dashboard de departamentos. Aquí podrás gestionar los departamentos de la aplicación. {nombre}</p>
      {
          departamentos.map( (departamento , indice) => {
            return (
            <li key={indice}>
                {departamento}
            </li>
            );
          })
        }
        <button onClick={ e => cambiarNombre("Victor")}>Hola</button>
    </div>
  );
}

export default DepartamentosDashboard;