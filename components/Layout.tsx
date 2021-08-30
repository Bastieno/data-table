import React, { ReactNode } from 'react'
import { Box } from '../components/primitives'
import { AsideMenu } from './AsideMenu'
import { Header } from './Header'
import styled from 'styled-components'

const StyledMain = styled(Box)`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  .sticky-header {
    padding: 10px 16px;
    z-index: 10;
    background-color: rgba(246, 248, 249, 1);
    position: fixed;
    top: 0;
    width: 100%;
  }

  .sticky-header + .content {
    padding-top: 100px;
    padding-bottom: 30px;
  }
`

const LayoutContainer = styled(Box)`
  display: grid;
  grid-template-columns: minmax(5px, 150px) minmax(200px, 250px) minmax(
      600px,
      1fr
    );
  grid-template-rows: minmax(100vh, max-content);
  background-color: rgba(246, 248, 249, 1);
`

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <LayoutContainer>
      <div className="space"></div>
      <AsideMenu />
      <StyledMain>
        <Header />
        <Box className="content" pl={'5%'} pr={'4%'}>
          {children}
        </Box>
      </StyledMain>
    </LayoutContainer>
  )
}
