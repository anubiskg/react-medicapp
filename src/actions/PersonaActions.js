import axios from 'axios';

const API_URL = 'http://localhost:8080/api/persona';

const PersonaActions = {
  async buscarRegistro(correo, contraseña) {
    const response = await axios.post(`${API_URL}/buscarRegistro`, { correo, contraseña });
    return response.data;
  },
};

export default PersonaActions;
