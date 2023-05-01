import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://springgcp-medicapp.uc.r.appspot.com/api/persona/buscarRegistro?correo=${email}&contrasena=${password}`);
      if (response.data) {
        history.push('/citas');
        window.location.reload(true);
      } else {
        alert('Correo o contraseña incorrectos');
      }
    } catch (error) {
      console.error(error);
      alert('Ocurrió un error al iniciar sesión');
    }
  };

  return (
    <div className="formContainer">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="text-center mb-5">MedicApp</h1>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico </label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña </label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <br></br>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Ingresar</button>
        </div>
        <br></br>
        <div className="text-center mt-3">
          ¿Aún no tienes cuenta? <a href="/registro">Regístrate aquí</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
