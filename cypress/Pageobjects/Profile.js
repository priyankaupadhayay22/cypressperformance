class Profile
{
    prof()
    {
        cy.xpath("//button[@id='profile']")   //click on profile icon
        .click({force : true})
        .should('be.visible');
        cy.log('https://staging.performance.lmdmax.com/profile'); // profile page opened

        // Log the content of user details section
            cy.get('.css-wx2p24').then(($el) => {
            cy.log($el.text()+'   ');
        });

        // Log the content of the company details section
            cy.get('.css-5yicxn').then(($el) => {
            cy.log($el.text().trim());

        //Log profile picture
            cy.get('h6.css-172n921')
            .eq(1)
            .invoke('text')
            .then((el) => {
                cy.log(`Company NAME:${el.trim()}`);
            });
            //print image url
             cy.get('img.css-1hy9t21')
             .should('be.visible')
             .invoke('attr','src')
             .then((src)=>{
                cy.log(`profile picture URL:${src}`);
                console.log(`profile picture URL:${src}`);
             })
        });

        
    }



}
export default Profile;