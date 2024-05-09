import { Container, Navbar } from "react-bootstrap"

const MyNav = ()=>{
    return (
<Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          EpiBlog
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
}
export default MyNav

