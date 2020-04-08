let palindrome = {}
module.exports = {
    beforeEach: browser => {
        palindrome= browser.page.PageObjectpage()
        palindrome.navigate()
    },
    afterEach: browser => {
        palindrome
            .end()
    },
    'Giving Blank space':browser => {

        palindrome
            .assert.containsText('@palindromeHeading',"Palindrome")
            .setValue('@palindromeInput'," ")
            .click('@checkButton')
            .pause(5000)
            .expect.element('@palindromeResults').text.to.equal(' ')
        palindrome    
            .pause(3000)
            
            
  }
}