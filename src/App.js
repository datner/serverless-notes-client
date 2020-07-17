import React from "react";
import "./App.css";
import { Link, useHistory } from "react-router-dom";
import Routes from "./Routes";
import { Nav, Navbar } from "react-bootstrap";

function App() {
	const history = useHistory();
	return (
		<div className="App container">
			<Navbar bg="light" variant="light" collapseOnSelect>
				<Navbar.Brand>
					<Link to="/">Scratch</Link>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Nav
						className="justify-content-end"
						defaultActiveKey="/"
						onSelect={(to) => history.push(to)}
					>
						<Nav.Item>
							<Nav.Link eventKey="/signup">Signup</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="/login">Login</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Routes />
		</div>
	);
}

export default App;
