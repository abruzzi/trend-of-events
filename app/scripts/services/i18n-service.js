define(['services/services', 'jquery-i18n-properties'], function(services) {
    services.factory('I18NService', function() {
        jQuery.i18n.properties({
            name: 'strings',
            path: 'resources/i18n/',
            mode: 'map',
            language: 'zh_CN'
        });

        return {
            prop: jQuery.i18n.prop
        };
    });
});
