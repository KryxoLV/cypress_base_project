import BasePage from "./basePage";

class SelectablePage extends BasePage {
  static get url () {
    return '/selectable';
  }

  static get exampleElement () {
    return cy.get('exampleSelector');
  }

  static get CrasJustoOdio () {
      return cy.get('ul#verticalListContainer').contains('Cras justo odio');
  }
  static get MorbiLeoRisus () {
    return cy.get('ul#verticalListContainer').contains('Morbi leo risus');
}
static get PortaAcConsecteturAc () {
    return cy.get('ul#verticalListContainer').contains('Porta ac consectetur ac');
}
static get DapibusAcFacilisisIn () {
    return cy.get('ul#verticalListContainer').contains('Dapibus ac facilisis in');
}

static get gridClick(){
    return cy.get('a#demo-tab-grid');
}
static get GridNrOne(){
    return cy.get('div#gridContainer').contains('One');
}
static get ClickOnTwo(){
    return cy.get('div#gridContainer').contains('Two');
}
static get GridNrThree(){
    return cy.get('div#gridContainer').contains('Three');
}
static get ClickOnFour(){
    return cy.get('div#gridContainer').contains('Four');
}
static get GridNrFive(){
    return cy.get('div#gridContainer').contains('Five');
}
static get ClickOnSix(){
    return cy.get('div#gridContainer').contains('Six');
}
static get GridNrSeven(){
    return cy.get('div#gridContainer').contains('Seven');
}
static get ClickOnEight(){
    return cy.get('div#gridContainer').contains('Eight');
}
static get GridNrNine(){
    return cy.get('div#gridContainer').contains('Nine');
}
}


export default SelectablePage;
