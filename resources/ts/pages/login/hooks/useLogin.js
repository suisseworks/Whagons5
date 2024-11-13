import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext  } from '../../../context/AuthContext/AuthContext';



const useLogin = () => {

    const { authUser } = useContext(AuthContext);

    const [username, setUsername] = useState();
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const callLoginApi = async () => {

        try {

            const response = await axios.post(
                `/api/login`,
                { email: username, password },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );

            const data = await response.data;

            if (data.success) {

                console.log("Login correcto");
                authUser(data);
                navigate('/welcome');
            } else {
                setError(data.message || "Error en el login");
            }
        } catch (responseError) {
            if (responseError.status === 401) {
                setError("Credenciales incorrectas");
            }

            if (responseError.status === 422) {
                setError("Datos incorrectos");
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        callLoginApi();
    };

    return {
        username,
        password,
        error,
        setUsername,
        setPassword,
        handleSubmit
    };
};

export default useLogin;