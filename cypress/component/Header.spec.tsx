/// <reference types="cypress" />
import * as React from 'react'
import { mount } from '@cypress/react'
import { Header } from '../../components/Header'

describe('<Header /> component', () => {
  it('renders component', () => {
    mount(<Header />)

    cy.get('[data-testid=header]').should('exist')
  })
})
