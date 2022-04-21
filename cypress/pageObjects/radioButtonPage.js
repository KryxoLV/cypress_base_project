import BasePage from "./basePage";

class RadioButtonPage extends BasePage {
  static get url () {
    return '/radio-button';
  }

  static get yesRadioButton () {
    return cy.get('label[for="yesRadio"]');
  }

  static get impressiveRadioButton () {
    return cy.get('label[for="impressiveRadio"]');
  }

  static get noRadioButton () {
    return cy.get('#noRadio');
  }

  static get resultsText() {
    return cy.get('.text-success');
  }
}


export default RadioButtonPage;
