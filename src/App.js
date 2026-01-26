import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddReview from './components/add-review';
import MoviesList from './components/movie-list';
import Movie from './components/movie';
import Login from './components/login';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import { Link, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <div className="App">
      <NavBar bg='light' expand='lg'>
        <NavBar.Brand href='#home'>Movie Reviews</NavBar.Brand>
        <NavBar.Toggle aria-controls='basic-navbar-nav'></NavBar.Toggle>
        <NavBar.Collapse id="basic-navbar-nav">
          <Nav className='mr-auto'>
            <Nav.Link>
              <Link to={"/movies"}>Movies</Link>
            </Nav.Link>
            <Nav.Link>
              {user ? (
                <a onClick={logout}>Logout User</a>
              ) : (
                <Link to={"/login"}>Login</Link>
              )}
            </Nav.Link>
          </Nav>
        </NavBar.Collapse>
      </NavBar>

      <Switch>
              <Route exact path={["/", "/movies"]} component={MoviesList}></Route>
              <Route path="/movies/:id/review" render={(props)=> <AddReview {...props} user={user} /> }></Route>
              <Route path="/movies/:id" render={(props)=> <Movie {...props} user={user} /> }></Route>
              <Route path="/login" render={(props)=> <Login {...props} login={login} /> }></Route>
      </Switch>
    </div>
  );
}

export default App;