if (typeof ko !== 'undefined') {
    ko.extenders.validation = function (target, options) {
        Dolittle.validation.Validator.applyTo(target, options);
        target.subscribe(function (newValue) {
            target.validator.validate(newValue);
        });

        // Todo : look into aggressive validation
        //target.validator.validate(target());
        return target;
    };
}
