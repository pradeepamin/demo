describe('Demo for dropdown', function () {
    function Calc(a, b, c) {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element.all(by.tagName("option")).each(function (allOperators) {
            allOperators.getAttribute("value").then(function (optr) {
                console.log(optr, "ooooo");
                if (optr == c) {
                    console.log(allOperators, "allOperators");
                    allOperators.click();
                }
            })
        })
        element(by.id('gobutton')).click();
    }

    it('DropDownCase', function () {
        browser.get('http://juliemr.github.io/protractor-demo/')
        //Will grab all the five element
        Calc(6, 2, 'SUBTRACTION')
        Calc(60, 2, 'DIVISION')

        //To get only one result
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function (text) {
            console.log(text, "Result of the value");
        })

        //To get all results
        element.all(by.repeater('result in memory')).each(function (item) {
            item.element(by.css("td:nth-child(3)")).getText().then(function (texts) {
                console.log(texts, "All results");
            })
        })

    });
})

describe('Demo for dropdown', function () {
})