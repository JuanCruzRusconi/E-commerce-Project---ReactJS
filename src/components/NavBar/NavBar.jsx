import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CarWidget"
import { Title } from "../Title/Title"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

import "./NavBar.css"

const categorias = [
  {id: 1, categoria: "apple", name: "Apple"},
  {id: 2, categoria: "stanley", name: "Stanley"}
]

export const NavBar = (props) => {

  
  return (
    
    <>
      <ul className="navBar-container">
        <li className="brand">
          <NavLink to={"/"}>
            <h2 className="navBar-logo">ReactJs-Ecommerce</h2>
          </NavLink>
        </li>
        <div className="categories">
          <li>
            <NavLink to={"/categoria/"} className={"navBar"}>PRODUCTS</NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/Apple"} className={"navBar"}>APPLE</NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/Stanley"} className={"navBar"}>STANLEY</NavLink>
          </li>
          <li>
            <NavLink to={"/form"} className={"navBar"}>CONTACT</NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}>
              <CartWidget />
            </NavLink>
          </li>
        </div>
      </ul>
      {props.children}
    </>
    
  )
}

/*


<>
      <ul className="contenedorNav">
        <li className="brand">
          <NavLink to={"/"}>
            <Title brand={brand} />
          </NavLink>
        </li>
        <div className="categorias">
          <li>
            <NavLink to={"/categoria/"} className={"navBar"}>Productos</NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/Apple"} className={"navBar"}>Apple</NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/Stanley"} className={"navBar"}>Stanley</NavLink>
          </li>
          <li>
            <NavLink to={"/form"} className={"navBar"}>Contacto</NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}>
              <CartWidget />
            </NavLink>
          </li>
        </div>
      </ul>
      {props.children}
    </>




    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

      <Container>

        <Navbar.Brand>
          <Link to={'/'}>
            <Title brand={brand} />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">

          </Nav>

          <Nav className="categorias">

            <NavLink to={"/categoria/Apple"} className={"navBar"}>Apple</NavLink>
            <NavLink to={"/categoria/Stanley"} className={"navBar"}>Stanley</NavLink>
            <NavLink to={"/form"} className={"navBar"}>Contacto</NavLink>
            <NavLink to={"/cart"}>
              <CartWidget />
            </NavLink>

          </Nav>

        </Navbar.Collapse>  

      </Container>

    </Navbar>
    */