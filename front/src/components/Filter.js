import React from "react";
import { Link } from "react-router-dom";
const Filtrar = (props) => {
  let materia = "";
  const handleChange = (event) => {
    materia = event.target.value;
  };

  const enviar = () => {
    props.enviar(materia);
  };

  return (
    <div>
      <form>
        <label>Escriba la materia:</label>
        <input type="text" onChange={handleChange} required />
      </form>
      <button onClick={enviar} className="btn btn-primary">
        <Link to="/">Filtrar</Link>
      </button>
    </div>
  );
};

export default Filtrar;
