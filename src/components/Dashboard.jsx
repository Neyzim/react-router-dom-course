import React from 'react'
import { Link, Outlet } from 'react-router-dom'
//a ideia aqui é que somente tenha acesso ao porfile e config quem acessa Dashboard
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
            <li>
                <Link to={'profile'}>Perfil</Link>
            </li>
            <li>
                <Link to={'config'}>Configurações</Link>
            </li>
        </ul>
      </nav>
      <div>
        <Outlet /> {/*Sinalizo a partir de onde as rotas filhas vão aparecer "/dashboard/profile" */}
      </div>
    </div>
  )
}

export default Dashboard
