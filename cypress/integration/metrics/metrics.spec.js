describe('Metrics integration tests', () => {
  beforeEach(() => {
    cy.fixture('user1').then((user) => {
      localStorage.setItem('userData', JSON.stringify(user));
    });
  });

  it('should visit metrics page', () => {
    cy.visit('/metrics');
    cy.url().should('eq', 'http://localhost:4200/metrics');
  })
});
