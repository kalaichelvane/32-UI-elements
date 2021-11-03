import React from 'react'
import {CNav, CNavItem,CNavLink } from '@coreui/react';

function Tabs() {
    return (
        <div>
           <CNav>
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" enabled>
      Enabled
    </CNavLink>
  </CNavItem>
</CNav >
        </div>
    )
}

export default Tabs
