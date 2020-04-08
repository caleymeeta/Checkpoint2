let Automatebasic = {}
module.exports = {
    beforeEach: browser => {
        Automatebasic = browser.page.PageObjectpage()
        Automatebasic.navigate()
    },
    afterEach: browser => {
        Automatebasic
            .end()
    },
    
    'Even and Odd 1': browser => {

        Automatebasic
            .assert.containsText('@heading', "Evens and Odds")
            .setValue('@evenOddInput', "1,6,9,23,8,6")
            .click('@splitButton')
            .assert.containsText('@evenResult', "[6,8,6]")
            .assert.containsText('@oddResult', "[1,9,23]")
            .pause(3000)


   },
   'Filterobject 2': browser => {

    Automatebasic
            .assert.containsText('@filterObjectheading', "Filter Object")
            .setValue('@filterObjectInput',"hairColor")
            .click('@filterButton')
            .assert.containsText('@filterResult',"brown")
            .pause(3000)
        },


  'FilterSring 3': browser => {

    Automatebasic
            .assert.containsText('@stringHeading','Filter String')
            .setValue('@stringInput',"James")
            .click('@stringfilterButton')
            .assert.containsText('@stringResult',"James")
            .pause(3000)
  },
   

  'Palindrome 4':browser => {

    Automatebasic
            .assert.containsText('@palindromeHeading',"Palindrome")
            .setValue('@palindromeInput',"101")
            .click('@checkButton')
            .pause(5000)
            .assert.containsText('@palindromeResults',"true")
            .pause(3000)
            .clearValue('@palindromeInput')
            .setValue('@palindromeInput',"racer")
            .click('@checkButton')
            .assert.containsText('@palindromeResults',"false")
            .pause(3000)
            
            
  },
  
  'Sum 5':browser => {

    Automatebasic
    .assert.containsText('@sumHeading',"Sum")
    .setValue('@firstSumInput',"34")
    .setValue('@secondSumInput',"21")
    
    .click('@addButton')
    .assert.containsText('@sumResult',"55")
    .pause(5000)
    
    
}
  



  }
