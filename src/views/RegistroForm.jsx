import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function RegistroForm() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [genero, setGenero] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const history = useHistory();

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  }

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  }

  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  }

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  }

  const handleContrasenaChange = (event) => {
    setContrasena(event.target.value);
  }

  const handleRegistro = async () => {
    const registroData = {
      nombre: nombre,
      apellido: apellido,
      genero: genero,
      correo: correo,
      contrasena: contrasena
    }

    try {
      const response = await axios.post('https://springgcp-medicapp.uc.r.appspot.com/api/persona/registro', registroData);
      alert('Registro exitoso');
      history.push('/');
      window.location.reload(true);
    } catch (error) {
      alert('Error al registrar, intenta de nuevo');
    }
  }

  return (
    <div className="formContainer">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <form className="form-signin" onSubmit={handleRegistro}>
            <h1 className="h3 mb-3 font-weight-normal text-center">Regístrate en MedicApp</h1>
            <label htmlFor="inputNombre" className="sr-only formLabel">Nombre</label>
            <input type="text" id="inputNombre" className="form-control mb-2 formInput" placeholder="Nombre" value={nombre} onChange={handleNombreChange} required autoFocus />
            <label htmlFor="inputApellido" className="sr-only formLabel">Apellido</label>
            <input type="text" id="inputApellido" className="form-control mb-2 formInput" placeholder="Apellido" value={apellido} onChange={handleApellidoChange} required />
            <div className="formGroup">
                <label className="mr-2 formLabel">Género:</label>
                <div className="form-check form-check-inline">
                    <input className="form-check-input formRadio" type="radio" name="inlineRadioOptions" id="inlineRadio1"  value="Masculino" onChange={handleGeneroChange} />
                    <label className="form-check-label" htmlFor="inlineRadio1">Masculino</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input formRadio" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Femenino" onChange={handleGeneroChange} />
                    <label className="form-check-label" htmlFor="inlineRadio2">Femenino</label>
                </div>
            </div>
            <label htmlFor="inputEmail" className="sr-only formLabel">Correo electrónico</label>
            <input type="email" id="inputEmail" className="form-control mb-2 formInput" placeholder="Correo electrónico" value={correo} onChange={handleCorreoChange} required />
            <label htmlFor="inputPassword" className="sr-only formLabel">Contraseña</label>
            <input type="password" id="inputPassword" className="form-control mb-3 formInput" placeholder="Contraseña" value={contrasena} onChange={handleContrasenaChange} required />
            <button type="submit" className="formButton">Registrarse</button>
            <br></br>
            <br></br>
            <div className="text-center mt-3">
                <a href="/">volver al inicio de sesión </a>
            </div>
            </form>
            </div>
        </div>
    </div>
  );
};
export default RegistroForm;
