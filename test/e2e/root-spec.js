describe("index page", function() {
    beforeEach(function() {
        browser().navigateTo("/app/index.html");
        sleep(1);
    });

    it("should have navigator", function() {
        expect(element("#navigator")).toBeDefined();
    });

    it("have events path", function() {
        expect(browser().location().path()).toBe("/");
    });
});

