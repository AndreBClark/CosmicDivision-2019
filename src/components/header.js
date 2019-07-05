import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Logo from '../images/logo.svg'

const HeaderWrapper = styled.div`
  background: #534763;
  img {
    margin-bottom: 0;
  }
`
const HeaderContainer = styled.div`
max-width: 960px;
margin: 0 auto;
padding: 1.45rem;
`


const Header = ({ siteTitle }) => (
  <HeaderWrapper> 
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
          >
          <img
            style={{
              width: '100px',
            }}
            src={Logo}
            alt="Logo"
            />
        </Link>
      </h1>
    </HeaderContainer>
</HeaderWrapper>
)

export default Header
