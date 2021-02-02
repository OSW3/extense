'use strict';

const { BACKGROUND_CONFIG_FILE } = require('../../../Config/Config');

const PropertiesProvider = require('../../../Providers/PropertiesProvider');
const PersistentProperty = require('./BackgroundScripts/PersistentProperty');
const ScriptsProperty = require('./BackgroundScripts/ScriptsProperty');

const PROPERTY_ID = 'background';

module.exports = class BackgroundProperties extends PropertiesProvider
{
    properties = [
        ScriptsProperty,
        PersistentProperty,
    ];

    constructor( kernel )
    {
        super(kernel, BACKGROUND_CONFIG_FILE);
    }

    get hasValidConfig()
    {
        return this.hasConfigData && null != this.config.background;
    }

    get parent()
    {
        return PROPERTY_ID;
    }
}