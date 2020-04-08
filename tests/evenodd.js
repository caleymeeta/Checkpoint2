let evenOdd = {}
module.exports = {
    beforeEach: browser => {
        evenOdd = browser.page.PageObjectpage()
        evenOdd.navigate()
    },
    afterEach: browser => {
        evenOdd
            .end()
    },
    
    'Blank input': browser => {

       evenOdd
            .assert.containsText('@heading', "Evens and Odds")
            .setValue('@evenOddInput', " ")
            .click('@splitButton')
            .expect.element('@evenResult').text.to.equal('')
            .expect.element('@oddResult').text.to.equal('')
        evenOdd    
            .pause(3000)


   },

   'Giving alpabhets as input': browser => {

    evenOdd
         .assert.containsText('@heading', "Evens and Odds")
         .setValue('@evenOddInput', " a,b,c")
         .click('@splitButton')
         .assert.containsText('@evenResult', "[]","should be blank [],No null value")
         .assert.containsText('@oddResult', "[]","should be blank [],No null value")
         .pause(3000)


}
}

