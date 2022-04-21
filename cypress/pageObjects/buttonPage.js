import BasePage from "./basePage";

class buttonPage extends BasePage {
  static get url () {
    return '/buttons';
  }

  static get exampleElement () {
    return cy.get('exampleSelector');
  }
  
  static get dynamicClickButton() {
    return cy.get('button.btn-primary').contains(/^\bClick Me\b/)
  }

  static get doubleClickMe()
  {
      return cy.get('#doubleClickBtn');
  }

  static get rightClickMe()
  {
      return cy.get('#rightClickBtn');
  }

  static get validateDouble()
  {
      return cy.get('#doubleClickMessage');
  }

  static get validateRight()
  {
      return cy.get('#rightClickMessage');
  }

  static get validateDynamic()
  {
      return cy.get('#dynamicClickMessage');
  }
}


export default buttonPage;
