import React from 'react';
import Formulario from '../../Componentes/Formulario/Formulario';
import Tabela from '../../Componentes/Tabela/Tabela';

function Despesa() {
  return (
    <section style={{height: '100vh', overflow: 'auto'}}>
      <Formulario />
      <Tabela />
    </section>
  )
}

export default Despesa;
