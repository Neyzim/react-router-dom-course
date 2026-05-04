import {use, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (event) =>{
        event.preventDefault();
        console.log("O usuario foi logado");

        navigate("/");
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <input type="text" value={username} placeholder='Usuário' onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" value={password} placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'>Entrar</button>
        </form>
    </div>
  )
}

export default Login
