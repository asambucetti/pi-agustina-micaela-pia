
import React from 'react';

function Filtro(props){
    return (
      <form onSubmit={props.evitarSubmit} className="filter-form px-0 mb-3">
        <input
          type="text" placeholder="Buscar dentro de la lista" onChange={props.controlarCambios} value={props.valor}
        />
      </form>
    );
  }

export default Filtro;