describe('caesar app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('../../lightbox.html')
    })

    //ouverture lightbox
    it('open lightbox', () =>{
        //open lightbox
        cy.get('[data-cy=lightbox]').click()

    })

    //fermeture lightbox
    it('close lightbox', () =>{
        //open lightbox
        cy.get('[data-cy=lightbox]').click()

        cy.get('[data-cy=background-lightbox]').click(0,0);

    })




});