'use strict';

const { LOCALES_CONFIG_FILE } = require('../../../Config/Config');

const PropertiesProvider = require('../../../Providers/PropertiesProvider');
const LocaleDefaultProperty = require('./Locales/LocaleDefaultProperty');

module.exports = class LocalesProperties extends PropertiesProvider
{
    /**
     * Get properties for "manifest" section 
     */
    properties = [
        LocaleDefaultProperty,
    ];

    constructor( kernel )
    {
        super(kernel, LOCALES_CONFIG_FILE);
    }

    get hasValidConfig()
    {
        return this.hasConfigData && null != this.config.locales;
    }
}