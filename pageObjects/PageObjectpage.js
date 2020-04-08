module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {

        heading: {
            selector: '//h4[contains(text(),"Evens and Odds")]',
            locateStrategy: 'xpath'
        },
        evenOddInput: {
            selector: "//input[@name='evenOddInput']",
            locateStrategy: 'xpath'
        },
        splitButton: {
            selector: "//button[@name='evenOddButton']",
            locateStrategy: 'xpath'
        },
        evenResult: {
            selector: "//span[@name='evenResults']",
            locateStrategy: 'xpath'
        },
        oddResult: {
            selector: "//span[@name='oddResults']",
            locateStrategy: 'xpath'
        },
        filterObjectheading: {
            selector: '//h4[contains(text(),"Filter Object")]',
            locateStrategy: 'xpath'
        },

        filterObjectPuzzlebox: {
            selector: "//span[@name='objectFilterObjects']",
            locateStrategy: 'xpath'

        },
        filterObjectInput: {
            selector: "//input[@name='objectFilterInput']",
            locateStrategy: 'xpath'
        },
        filterButton: {
            selector: "//button[@name='objectFilterButton']",
            locateStrategy: 'xpath'
        },
        filterResult: {
            selector: "//span[@name='objectFilterResults']",
            locateStrategy: 'xpath'
        },
        stringHeading: {
            selector: '//h4[contains(text(),"Filter String")]',
            locateStrategy: 'xpath'
        },

        stringPuzzlebox: {
            selector: "//span[@name='nameFilterNames']",
            locateStrategy: 'xpath'

        },
        stringInput: {
            selector: "//input[@id='nameFilterInput']",
            locateStrategy: 'xpath'
        },
        stringfilterButton: {
            selector: "//button[@id='nameFilterButton']",
            locateStrategy: 'xpath'
        },
        stringResult: {
            selector: "//span[@name='nameFilterResults']",
            locateStrategy: 'xpath'
        },
        palindromeHeading: {
            selector: '//h4[contains(text(),"Palindrome ")]',
            locateStrategy: 'xpath'
        },
        palindromeInput: {
            selector: "//input[@name='palindromeInput']",
            locateStrategy: 'xpath'

        },
        checkButton: {
            selector: "//button[@name='palindromeButton']",
            locateStrategy: 'xpath'  
        },
        palindromeResults: {
            selector: "//span[@name='palindromeResults']",
            locateStrategy: 'xpath'
        }, 
        sumHeading: {
            selector: '//h4[contains(text(),"Sum")]',
            locateStrategy: 'xpath'
        },
        firstSumInput: {
            selector: "//input[@name='sumInput1']",
            locateStrategy: 'xpath'
        }, 
        secondSumInput: {
            selector: "//input[@name='sumInput2']",
            locateStrategy: 'xpath' 
        },
        addButton: { 
        selector: "//button[@name='sumButton']",
            locateStrategy: 'xpath'
        },
        sumResult: {
            selector: "//span[@name='sumResults']",
            locateStrategy: 'xpath'

        }   


  }
}