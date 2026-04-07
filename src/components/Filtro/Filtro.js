
import React, { Component } from 'react';

class Filtro extends Component {
  render() {
    return (
      <form onSubmit={this.props.evitarSubmit} className="filter-form px-0 mb-3">
        <input
          type="text" placeholder="Buscar dentro de la lista" onChange={this.props.controlarCambios} value={this.props.valor}
        />
      </form>
    );
  }
}

export default Filtro;