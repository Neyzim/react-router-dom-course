import {Routes, Route, Link, NavLink} from 'react-router-dom'
import './App.css'
import Home from './components/home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Proflle from './components/Proflle'
import Configurations from './components/Configurations'
import TaskDetails from './components/TaskDetails'
import NotFound from './components/NotFound'


function App() {

  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Inicio</Link>
          </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive ? "active-link" : "")} to={'/contact'}>
            Contato
          </NavLink>
        </li>
          <li>
            <NavLink to={'/login'}>
                Faça login
            </NavLink>
          </li>
        <li>
          <NavLink to={'/dashboard'}>Dashboard</NavLink>
        </li>
      </ul>
       <Link to={'/task/1'} >Tarefa 1</Link>
      <Link to={'/task/2'} >Tarefa 2</Link>
    </nav>
    <div>
      <h2>Itens</h2>
      <Link to={'/itens/1'} >Item 1</Link>
    </div>


     <Routes > {/*Todas as rotas precisam estar dentro do elemento Routes */}
      <Route path="/" element={<Home />}/> 
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      {/*Rota dinâmica */}
      <Route path='/task/:taskId' element={<TaskDetails />}/>
      {/*Rotas aninhadas */}
      <Route path='/dashboard' element={<Dashboard />} >
        <Route path='profile' element={<Proflle />} />
        <Route path='config' element={<Configurations />} />
      </Route>
      {/*rota 404 */}
      <Route path='*' element={<NotFound />} />

     
     </Routes>
    </>
  )
}

export default App
