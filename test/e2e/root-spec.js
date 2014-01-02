describe("index page", function() {
    beforeEach(function() {
        browser.get("http://localhost:9999/app/index.html");
    });

    it("should have navigator", function() {
        expect(element("#navigator")).toBeDefined();
    });

    it("should have input box", function() {
        element(by.css('.legend')).click();
        expect(element(by.id('settings'))).toBeDefined();
    })

});

