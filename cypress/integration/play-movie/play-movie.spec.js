describe('Play-Movie integration tests', () => {
  beforeEach(() => {
    cy.fixture('user1').then((user) => {
      localStorage.setItem('userData', JSON.stringify(user));
    });
  });

  it('should be in home page', () => {
    cy.visit('/');
    cy.url().should('eq', 'http://localhost:4200/');
  })

  it('should contains all movie length', () => {
    cy.get('[data-cy="movie"]').should('have.length', 32)
    cy.scrollTo(0, 1000, { duration: 1500 });
  })

  it('should be visible scroll movies', () => {
    cy.get('[data-cy="scroll"]').should('be.visible')
  })
});
