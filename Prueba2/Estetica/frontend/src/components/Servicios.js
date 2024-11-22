import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Servicios = ({ seleccionarServicio }) => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    // Obtén los servicios desde la API del backend
    axios.get('http://localhost:8000/api/servicios/')  // Cambia la URL si tu backend está en otro puerto
      .then(response => {
        setServicios(response.data);  // Respuesta de la API con los servicios
      })
      .catch(error => {
        console.error('Error al obtener los servicios:', error);
      });
  }, []);

  return (
    <div>
      <h2>Servicios Disponibles</h2>
      <ul>
        {servicios.map((servicio) => (
          <li key={servicio.id}>
            {servicio.nombre}
            <button onClick={() => seleccionarServicio(servicio.id)}>Ver Horarios</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Servicios;

