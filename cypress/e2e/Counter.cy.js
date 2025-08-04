import { mount } from 'cypress/react';
import { Counter } from '../../src/components/Counter';

describe('Counter', () => {
  it('should render with the initial value', () => {
    mount(<Counter initialValue={5} />);
    cy.get('[data-cy="counter-value"]').should('have.text', '5');
  });

  it('should increment the value when the increment button is clicked', () => {
    mount(<Counter initialValue={0} />);
    cy.get('[data-cy="increment-button"]').click();
    cy.get('[data-cy="counter-value"]').should('have.text', '1');
  });

  it('should decrement the value when the decrement button is clicked', () => {
    mount(<Counter initialValue={10} />);
    cy.get('[data-cy="decrement-button"]').click();
    cy.get('[data-cy="counter-value"]').should('have.text', '9');
  });
});
