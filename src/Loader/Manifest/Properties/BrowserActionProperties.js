'use strict';

const { BROWSER_ACTION_CONFIG_FILE } = require('../../../Config/Config');

const PropertiesProvider = require('../../../Providers/PropertiesProvider');
const IconsProperty = require('./BrowserAction/IconsProperty');
const PopupProperty = require('./BrowserAction/PopupProperty');
const TooltipProperty = require('./BrowserAction/TooltipProperty');

const PROPERTY_ID = 'browser_action';

module.exports = class BrowserActionProperties extends PropertiesProvider
{
    properties = [
        PopupProperty,
        TooltipProperty,
        IconsProperty,
    ];

    constructor( kernel )
    {
        super(kernel, BROWSER_ACTION_CONFIG_FILE);
    }

    get hasValidConfig()
    {
        return this.hasConfigData && null != this.config.browser_action;
    }

    get parent()
    {
        return PROPERTY_ID;
    }
}