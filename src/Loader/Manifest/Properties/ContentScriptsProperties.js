'use strict';

const { CONTENT_SCRIPTS_CONFIG_FILE } = require('../../../Config/Config');

const PropertiesProvider = require('../../../Providers/PropertiesProvider');
const FramesProperty = require('./ContentScripts/FramesProperty');
const GlobsProperty = require('./ContentScripts/GlobsProperty');
const MatchesProperty = require('./ContentScripts/MatchesProperty');
const RunTimeProperty = require('./ContentScripts/RunTimeProperty');
const ScriptsProperty = require('./ContentScripts/ScriptsProperty');
const StylecheetsProperty = require('./ContentScripts/StylecheetsProperty');

const PROPERTY_ID = 'content_scripts';

module.exports = class ContentScriptsProperties extends PropertiesProvider
{
    properties = [
        ScriptsProperty,
        StylecheetsProperty,
        FramesProperty,
        RunTimeProperty,
        MatchesProperty,
        GlobsProperty,
    ];

    constructor( kernel )
    {
        super(kernel, CONTENT_SCRIPTS_CONFIG_FILE);
    }

    get hasValidConfig()
    {
        return this.hasConfigData && null != this.config.content;
    }

    get parent()
    {
        return PROPERTY_ID;
    }
}