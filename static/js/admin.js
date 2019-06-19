pimcore.registerNS('pimcore.plugin.сustomPanel');

/**
 * CustomPanel Plugin
 * @type {pimcore.plugin.admin}
 */
pimcore.plugin.customPanel = Class.create(pimcore.plugin.admin, {

    /**
     * Gets the plugin class name
     * @returns {string}
     */
    getClassName: function() {
        return 'pimcore.plugin.customPanel';
    },

    /**
     * Registers the plugin
     */
    initialize: function() {
        pimcore.plugin.broker.registerPlugin(this);
    },

    /**
     * Hide Remove Group checkbox
     * @param params
     * @param broker
     */
    pimcoreReady: function (params,broker){
        var user = pimcore.globalmanager.get('user');

        if(!user.admin) {
            $('#tool-1442-toolEl').hide();
        }
    }


});

var customPanel = new pimcore.plugin.customPanel();
