import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {

    const navigate = useNavigate();
    
    const handleLogin = () => {
        navigate('/dashboard')
    }
    

    return (
        <div className="text-center m-5 text-2xl">
            <h1>LOGIN DE WHAGONS</h1>
            <button className="m-10 bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-700 rounded"
                    onClick={handleLogin}
            >
                Ingresar
            </button>
        </div>

    )
}

export default Login;