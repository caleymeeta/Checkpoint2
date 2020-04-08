

let FilterObject = {}
module.exports = {
    beforeEach: browser => {
        FilterObject = browser.page.PageObjectpage()
        FilterObject.navigate()
    },
    afterEach: browser => {
        FilterObject
            .end()
 },
   'Giving blank value as input ': browser => {

    FilterObject
            .assert.containsText('@filterObjectheading', "Filter Object")
            .setValue('@filterObjectInput'," ")
            .click('@filterButton')
            .assert.containsText('@filterResult'," ","Should be blank after clicking Blank")
            .pause(10000)
        }
    }