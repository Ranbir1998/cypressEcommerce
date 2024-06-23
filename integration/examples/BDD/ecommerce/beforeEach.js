beforeEach(function(){
    //runs once before every tests
    cy.fixture('example').then(function(data)
 {//since the scope is only inside therefore for having scope outside we use this keyword
 this.data=data
 })
    })