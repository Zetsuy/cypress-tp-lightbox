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
        cy.dataCy('lightbox').click()

    })

    //fermeture lightbox
    it('close lightbox', () =>{
        //open lightbox
        cy.dataCy('lightbox').click()

        cy.dataCy('background-lightbox').click(0,0);

    })

it('like image', () =>{
    //open lightbox
    cy.dataCy('lightbox').click()

    cy.dataCy('lightbox-2').scrollTo('bottom')

    //add like
    cy.dataCy('bouton-like').click()

    
    //compteur like
    cy.dataCy('nombre-like')
    .should('contain', '1')

    cy.dataCy('background-lightbox').click(0,0);

    cy.dataCy('lightbox').trigger('mouseover');

    cy.dataCy('nombre-like-hover')
    .should('contain', '1')

    /*
       .type('1').should('have.value', '1')

       cy.get('[data-cy=texte]')
       .type('test').should('have.value', 'test')

       cy.get('[data-cy=button-cypher]').click()
       cy.get('[data-cy=resultat]')
       .should('contain', 'uftu')
       */
})




});