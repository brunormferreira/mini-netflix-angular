describe('Login 1 integration tests', () => {
  it('should go to auth page', () => {
    cy.visit('/auth');
  });

  it('should be disabled submit button', () => {
    cy.get('[data-cy="submit"]').should('be.disabled');
  })

  it('should login user one', () => {
    cy.get('[data-cy="email"]').type('dev@test.com').should('have.value', 'dev@test.com');
    cy.get('[data-cy="password"]').type(123456).should('have.value', '123456');
    cy.get('[data-cy="submit"]').click();
  });

  it('should be able submit button', () => {
    cy.get('[data-cy="submit"]').should('not.be.disabled');
  })

  it('should go to home page', () => {
    cy.get('h1').should('contain', 'Seja bem vindo(a)');
  })

  it('should logout user one', () => {
    cy.get('[data-cy="menu"]').contains('Menu').click({ force: true });
    cy.get('[data-cy="logout"]').contains('Sair').click({ force: true });
  });

  it('should return to auth page', () => {
    cy.url().should('include', '/auth');
  })
});

describe('Login 2 integration tests', () => {
  it('should login user two', () => {
    cy.get('[data-cy="email"]').type('sup@test.com');
    cy.get('[data-cy="password"]').type(123456);
    cy.get('[data-cy="submit"]').click();
  });

  it('should logout user two', () => {
    cy.get('[data-cy="menu"]').contains('Menu').click({ force: true });
    cy.get('[data-cy="logout"]').contains('Sair').click({ force: true });
  });

  it('should return to auth page', () => {
    cy.url().should('eq', 'http://localhost:4200/auth')
  })
});
