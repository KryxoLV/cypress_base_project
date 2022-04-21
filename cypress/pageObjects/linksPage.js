import BasePage from "./basePage";

class LinkPage extends BasePage {
  static get url () {
    return '/links';
  }

  static get exampleElement () {
    return cy.get('exampleSelector');
  }

  static get clickCreated() {
      return cy.get('a#created');
  }

  static get clickNoContent() {
    return cy.get('a#no-content');
}

static get clickMoved() {
    return cy.get('a#moved');
}
  
  
}


export default LinkPage;
