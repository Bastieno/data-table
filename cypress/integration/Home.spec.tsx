context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should render the header in the home page', () => {
    cy.get('[data-testid=header]').should('exist')
  })

  it('should render the AsideMenuLinks in the home page', () => {
    cy.get('[data-testid=aside-menu-links]').should('exist')
  })

  it('should render the Content in the home page', () => {
    cy.get('[data-testid=content]').should('exist')
  })

  it('displays 6 AsideMenuLinks items by default', () => {
    cy.get('.nav-item').should('have.length', 6)

    // We can go even further and check that the default nav-links each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    cy.get('.nav-item').first().should('have.text', 'simple')
    cy.get('.nav-item').last().should('have.text', 'remote-data')
  })

  it('adds the `active` class to the last nav-item', () => {
    cy.get('.nav-item').last().click().should('have.class', 'active')

    cy.get('[data-testid=header]').should(
      'have.text',
      'Table that renders data from a remote api'
    )
  })

  it('renders the RemoteDataTable when last nav-item is clicked', () => {
    cy.get('.nav-item').last().click()

    cy.get('[data-testid=remote-data-table]').should('exist')
  })

  it('renders the InfinityTable', () => {
    cy.get('.nav-item')
      .last()
      .prev()
      .prev()
      .click()
      .should('have.text', 'infinite-scroll')

    cy.get('[data-testid=infinity-table-container]').should('exist')
  })

  it('renders the NumericTextRightAlignedTable', () => {
    cy.get('.nav-item')
      .first()
      .next()
      .click()
      .should('have.text', 'right-align')

    cy.get('[data-testid=numeric-text]').should(
      'have.css',
      'max-width',
      '900px'
    )
  })
})

export {}
