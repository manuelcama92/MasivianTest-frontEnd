import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from "react-router-bootstrap";
import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import StartPage from './components/StartPage';
import Gallery  from './components/Gallery';
import NotFound from './containers/NotFound';

export const App = () => {
  const [ordered, setOrdered] = useState(false);


  return (
<> {ordered}
  <BrowserRouter>   

					<Navbar id="nav" expand="sm" bg="dark" variant="dark">              
					   <a href="/">Home </a>
						&nbsp; &nbsp; <Navbar.Brand>Puntuacion de comic's  &rarr; </Navbar.Brand>             
						<Nav className="mr-auto" >
						  <LinkContainer to="/Gallery">
						  	<Nav.Link>Puntuación</Nav.Link>
						  </LinkContainer>  						          
						</Nav>
					</Navbar>			 
					
<Switch>							
<Route exact path="/" component={StartPage} />
<Route exact path="/Gallery" component={Gallery} />	
<Route component={NotFound} />		 
</Switch>								   						            
  </BrowserRouter>
</>
  );
};
