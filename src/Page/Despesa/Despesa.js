import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import Formulario from '../../Componentes/Formulario/Formulario';
import Tabela from '../../Componentes/Tabela/Tabela';

function Despesa() {
  return (
    <section>
      <Formulario />
      <Tabela />
    </section>
  )
}

export default Despesa;
