import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { UploadCloud } from 'react-feather'
import { Link } from 'react-router-dom'


function Header() {
  return (
   <>
      <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to={''} style={{textDecoration:'none'}} >
            <UploadCloud color='black'/>
            Video-app
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
   </>
  )
}

export default Header