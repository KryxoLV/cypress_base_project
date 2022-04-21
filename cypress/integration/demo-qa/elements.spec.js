import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtonPage from "../../pageObjects/radioButtonPage";
import webTablePage from "../../pageObjects/webTablePage";
import buttonPage from "../../pageObjects/buttonPage";
import LinkPage from "../../pageObjects/linksPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    it("Filling in Text Boxes", () => {
      TextBoxPage.fullNameInput.type('TestCase');
      TextBoxPage.userEmailInput.type("email@testuser.com");
      TextBoxPage.currentAdressInput.type("Current test address");
      TextBoxPage.permanentAddressInput.type("Permanent test address");
      TextBoxPage.submitButton.click();
      TextBoxPage.nameParagraph
        .should('be.visible')
        .should('contain', "TestCase");
      TextBoxPage.emailParagraph
        .should('be.visible')
        .should('contain', "email@testuser.com");
      TextBoxPage.currentAddressParagraph
        .should('be.visible')
        .should('contain', "Current test address");
      TextBoxPage.permanentAddressParagraph
        .should('be.visible')
        .should('contain', "Permanent test address");
    });

    it("Filling in Text Boxes with fixtures", () => {
      cy.fixture('textBoxPageData').then(data => {
        TextBoxPage.fullNameInput.type(data.fullName);
        TextBoxPage.userEmailInput.type(data.email);
        TextBoxPage.currentAdressInput.type(data.currentAddress);
        TextBoxPage.permanentAddressInput.type(data.permanentAddress);
        TextBoxPage.submitButton.click();
        TextBoxPage.nameParagraph
        .should('be.visible')
        .should('contain', "TestCase");
      TextBoxPage.emailParagraph
        .should('be.visible')
        .should('contain', "email@testuser.com");
      TextBoxPage.currentAddressParagraph
        .should('be.visible')
        .should('contain', "Current test address");
      TextBoxPage.permanentAddressParagraph
        .should('be.visible')
        .should('contain', "Permanent test address");
      });
    });
  });

  context("Check box scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });

    it("Clicking check box - Notes", () => {
      CheckBoxPage.expandAllButton.click();
      CheckBoxPage.checkBoxListItems.contains("Notes").click();
      CheckBoxPage.checkBoxListItems.contains("General").click();
      CheckBoxPage.selectedItemsArea
        .should('be.visible')
        .should('contain', "notes")
        .should('contain', "general");

    });

    
  });

  context("Check box scenarios Office", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });

    it("Clicking check box - Office", () => {
      CheckBoxPage.expandAllButton.click();
      CheckBoxPage.checkBoxListItems.contains("Office").click();
      CheckBoxPage.selectedItemsArea
        .should('be.visible')
        .should('contain', "office")
        .should('contain', "public")
        .should('contain', "private")
        .should('contain', "classified")
        .should('contain', "general");

    });

    
  });

  context("Radio-button clicking scenarios ", () => {
    beforeEach(() => {
      RadioButtonPage.visit();
    });

    it("radio button page", () => {
      RadioButtonPage.yesRadioButton.click();
      RadioButtonPage.resultsText
        .should('contain', 'Yes');
      RadioButtonPage.impressiveRadioButton.click();
      RadioButtonPage.resultsText
        .should('contain', 'Impressive');
      RadioButtonPage.noRadioButton.should('be.disabled');
    });

    
  });

  context("web-tables clicking scenarios ", () => {
    beforeEach(() => {
      webTablePage.visit();
    });

    it("adding new row in table", () => {
      webTablePage.addButton.click();
      webTablePage.firstName.type('Test Name');
      webTablePage.lastName.type('Test lastName');
      webTablePage.userEmail.type('testemail@email.test');
      webTablePage.userAge.type('99');
      webTablePage.salary.type('696969');
      webTablePage.department.type('test');
      webTablePage.submitButton.click();
      webTablePage.allTable
        .should('contain', 'Test Name')
        .should('contain', 'Test lastName')
        .should('contain', 'testemail@email.test')
        .should('contain', '99')
        .should('contain', '696969')
        .should('contain', 'test')


    });

    it("delete one record", () => {
      webTablePage.deleteRow('cierra@example.com');
      webTablePage.deleteRow('kierra@example.com');
      webTablePage.deleteRow('alden@example.com');
    });

    
  });

  context("buttons ", () => {
    beforeEach(() => {
      buttonPage.visit();
    });

    it("pressing all buttons", () => {
      buttonPage.doubleClickMe.dblclick();
      buttonPage.validateDouble.should('contain', 'You have done a double click');
      buttonPage.rightClickMe.rightclick();
      buttonPage.validateRight.should('contain', 'You have done a right click');
      buttonPage.dynamicClickButton.click();
      buttonPage.validateDynamic.should('contain', 'You have done a dynamic click');



    });  
  });


  context("link scenarios ", () => {
    beforeEach(() => {
      LinkPage.visit();
    });

    it.only("links", () => {
    cy.intercept('GET', 'created').as('getCreated');
    LinkPage.clickCreated.click();
    cy.wait('@getCreated').then(data => {expect(data.response.statusCode).to.eq(201)})
    ;
    LinkPage.clickNoContent.click();
    LinkPage.clickMoved.click();



    });  
  });
  


});
