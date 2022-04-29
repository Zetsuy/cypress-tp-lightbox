describe('caesar app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('../../lightbox.html')
  })

  //ouverture lightbox
  it('open lightbox', () => {
    //open lightbox
    cy.dataCy('lightbox').click()

  })

  //fermeture lightbox
  it('close lightbox', () => {
    //open lightbox
    cy.dataCy('lightbox').click()

    cy.dataCy('background-lightbox').click(0, 0);

  })

  it('like image', () => {
    //open lightbox
    cy.dataCy('lightbox').click()

    cy.dataCy('lightbox-2').scrollTo('bottom')

    //add like
    cy.dataCy('bouton-like').click()


    //compteur like
    cy.dataCy('nombre-like')
      .should('contain', '1')

    cy.dataCy('background-lightbox').click(0, 0);

    cy.dataCy('lightbox').trigger('mouseover');

    cy.dataCy('nombre-like-hover')
      .should('contain', '1')


  })

  it('dislike image', () => {
    //open lightbox
    cy.dataCy('lightbox').click()

    cy.dataCy('lightbox-2').scrollTo('bottom')

    //add like
    cy.dataCy('bouton-like').click()


    //compteur like
    cy.dataCy('nombre-like')
      .should('contain', '1')

    //delete like
    cy.dataCy('bouton-dislike').click()

    //compteur like
    cy.dataCy('nombre-like')
      .should('contain', '0')

    cy.dataCy('background-lightbox').click(0, 0);

    cy.dataCy('lightbox').trigger('mouseover');

    cy.dataCy('nombre-like-hover')
      .should('contain', '0')

  })

  it('add comment', () => {
    //open lightbox
    cy.dataCy('lightbox').click()

    cy.dataCy('lightbox-2').scrollTo('bottom')

    //add comment
    cy.dataCy('texte-comment')
      .type('Coucou mec').should('have.value', 'Coucou mec')

    //clique bouton add
    cy.dataCy('button-comment').click()

    //regarde contenu commentaire
    cy.dataCy('comment-body')
      .should('contain', 'Coucou mec')

    //regarde auteur commentaire
    cy.dataCy('author-comment')
      .should('contain', 'johndoe')

    cy.dataCy('background-lightbox').click(0, 0);

    cy.dataCy('lightbox').trigger('mouseover');

    cy.dataCy('nombre-commentaires-hover')
      .should('contain', '1')

  })


  it('show hide comment', () => {
    //open lightbox
    cy.dataCy('lightbox').click()

    cy.dataCy('lightbox-2').scrollTo('bottom')

    //add comment
    cy.dataCy('texte-comment')
      .type('Coucou mec').should('have.value', 'Coucou mec')

    //clique bouton add
    cy.dataCy('button-comment').click()

    //regarde contenu commentaire
    cy.dataCy('comment-body')
      .should('contain', 'Coucou mec')

    //regarde auteur commentaire
    cy.dataCy('author-comment')
      .should('contain', 'johndoe')

    cy.dataCy('texte-comment')
      .type('Ca va ?').should('have.value', 'Ca va ?')

    //clique bouton add
    cy.dataCy('button-comment').click()

    cy.dataCy('show-hide-comment').click()

    cy.dataCy('show-hide-comment').click()

    

  })



  it('delete comment', () => {
    //open lightbox
    cy.dataCy('lightbox').click()

    cy.dataCy('lightbox-2').scrollTo('bottom')

    //add comment
    cy.dataCy('texte-comment')
      .type('Coucou mec').should('have.value', 'Coucou mec')

    //clique bouton add
    cy.dataCy('button-comment').click()

    //regarde contenu commentaire
    cy.dataCy('comment-body')
      .should('contain', 'Coucou mec')

    //regarde auteur commentaire
    cy.dataCy('author-comment')
      .should('contain', 'johndoe')

    cy.dataCy('texte-comment')
      .type('Ca va ?').should('have.value', 'Ca va ?')

    //clique bouton add
    cy.dataCy('button-comment').click()

    //clique bouton delete
    cy.dataCy('comment-supp-1').click()


    //regarde si commentaire supprimé
    cy.dataCy('list-comment')
      .should('be.empty')

    cy.dataCy('background-lightbox').click(0, 0);

    cy.dataCy('lightbox').trigger('mouseover');

    cy.dataCy('nombre-commentaires-hover')
      .should('contain', '1')

  })


});