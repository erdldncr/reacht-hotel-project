import {Error} from './pages/Error'
import {Home} from './pages/Home'
import {Rooms} from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import {Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route path='/' exact  >
          <Home/>
        </Route>
        <Route path='/rooms' exact  >
             <Rooms/>
        </Route>
        <Route path='/rooms/:id' exact  render={(props)=>{
         return <SingleRoom
            {...props}
          />
        }} >
        </Route> 
        <Route path='*'>
            <Error/>
        </Route>
        
      </Switch>
    </>
  );
}

export default App;
