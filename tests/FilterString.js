let filterString = { }

module.exports = {
    beforeEach: browser => {
        filterString  = browser.page.PageObjectpage()
        filterString .navigate()
    },
    afterEach: browser => {
        filterString 
            .end()
    },

  'Giving blank as input in FilterSring': browser => {

    filterString 
            .assert.containsText('@stringHeading','Filter String')
            .setValue('@stringInput'," ")
            .click('@stringfilterButton')
            .expect.element('@stringResult').text.to.equal(' ')
    filterString
            .pause(3000)
  }
}