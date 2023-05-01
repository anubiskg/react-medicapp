import React from 'react';
import { Link } from 'react-router-dom';

function AppointmentForm() {
  return (
    <div className="formContainer">
      <h1 className="form-title">MedicApp</h1>
      <div className="scrollable-list">
        <ul>
          <li>Examenes generales</li>
          <li>Cita preoperatoria</li>
          <li>Cita de seguimiento</li>
          <li>Cita por dolencia</li>
          <li>Examenes odontologicos</li>
          <li>Cita de control</li>
          <li>Cita prioritaria</li>
          <li>Examenes de optometría</li>
          <li>Examenes de sangre</li>
        </ul>
      </div>
      <br></br>
      <div className="text-center mt-3">
                <a href="/">Volver al inicio </a>
        </div>
    </div>
  );
}

export default AppointmentForm;
