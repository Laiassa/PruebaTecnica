import React, { useState } from 'react';
import Servicios from './components/Servicios';
import Turnos from './components/Turnos';

function App() {
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  const seleccionarServicio = (id) => {
    setServicioSeleccionado(id);  // Cambia el servicio seleccionado
  };

  return (
    <div>
      <h1>Reserva de Turnos</h1>
      {!servicioSeleccionado ? (
        <Servicios seleccionarServicio={seleccionarServicio} />
      ) : (
        <Turnos servicioId={servicioSeleccionado} />
      )}
    </div>
  );
}

export default App;

