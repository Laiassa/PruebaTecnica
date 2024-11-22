import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Turnos = ({ servicioId }) => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    // Obtén los turnos disponibles para el servicio seleccionado
    if (servicioId) {
      axios.get(`http://localhost:8000/api/turnos/${servicioId}/`)  // Cambia la URL si tu backend está en otro puerto
        .then(response => {
          setTurnos(response.data);  // Respuesta con los turnos disponibles
        })
        .catch(error => {
          console.error('Error al obtener los turnos:', error);
        });
    }
  }, [servicioId]);  // Vuelve a ejecutar si cambia el servicioId

  const reservarTurno = (turnoId) => {
    // Realiza la reserva del turno
    axios.post(`http://localhost:8000/api/turnos/reservar/${turnoId}/`)
      .then(() => {
        alert('Turno reservado exitosamente');
      })
      .catch((error) => {
        console.error('Error al reservar el turno:', error);
      });
  };

  return (
    <div>
      <h2>Turnos Disponibles</h2>
      {turnos.length > 0 ? (
        <ul>
          {turnos.map((turno) => (
            <li key={turno.id}>
              {turno.hora}
              <button onClick={() => reservarTurno(turno.id)}>Reservar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay turnos disponibles.</p>
      )}
    </div>
  );
};

export default Turnos;

