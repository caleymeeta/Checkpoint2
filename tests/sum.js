let sum= {}
module.exports = {
    beforeEach: browser => {
        sum = browser.page.PageObjectpage()
        sum.navigate()
    },
    afterEach: browser => {
        sum
            .end()
    },
    'Giving no value':browser => {

        sum
        .assert.containsText('@sumHeading',"Sum")
        .setValue('@firstSumInput'," ")
        .setValue('@secondSumInput'," ")
        
        .click('@addButton')
        .expect.element('@sumResult').text.to.equal(' ')
        sum
        .pause(5000)
        
        
    }
}