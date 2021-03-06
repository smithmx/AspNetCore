﻿describe("when checking element with format if element has format", function () {

    var format = "something";
    var formatter = null;
    var formatterBefore = null;
    var result;

    beforeEach(function () {
        var element = {
            nodeType: 1,
            attributes: {
                getNamedItem: sinon.stub().returns(format)
            }
        }

        formatterBefore = Dolittle.values.Formatter;
        Dolittle.values.Formatter = {
            getExtenders: sinon.stub().returns([])
        };

        formatter = Dolittle.values.stringFormatter.createWithoutScope();
        result = formatter.hasFormat(element);
    });

    afterEach(function () {
        Dolittle.values.Formatter = formatterBefore;
    });

    it("should be considered to have format", function () {
        expect(result).toBe(true);
    });
});