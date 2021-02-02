'use strict';

const { UI_CONFIG_FILE } = require('../../../Config/Config');

const PropertiesProvider = require('../../../Providers/PropertiesProvider');
const IconsProperty = require('./UI/IconsProperty');

module.exports = class UiProperties extends PropertiesProvider
{
    /**
     * Get properties for "manifest" section 
     */
    properties = [
        IconsProperty
    ];

    constructor( kernel )
    {
        super(kernel, UI_CONFIG_FILE);
    }

    get hasValidConfig()
    {
        return this.hasConfigData && null != this.config.ui;
    }
}