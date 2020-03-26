import React, { memo } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Link from 'next/link'
function Header({ Menu, Search, SubHeader = () => '' }) {
  return (
    <header className="header">
      <Navbar expand="md">
        <Navbar.Brand>
          <Link href="/">
            <div className="clickable">
              <img
                className="logo"
                src="/commercetools-logo.png"
                title="Home"
              />
              <span className="d-none d-sm-block">
                Integration Marketplace
              </span>
            </div>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Menu />
          <Search />
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}
export default memo(Header)
