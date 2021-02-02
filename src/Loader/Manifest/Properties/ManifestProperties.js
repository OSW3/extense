'use strict';

const { MANIFEST_CONFIG_FILE } = require('../../../Config/Config');

const PropertiesProvider = require('../../../Providers/PropertiesProvider');
const ManifestVersionProperty = require('./Manifest/ManifestVersionProperty');

module.exports = class ManifestProperties extends PropertiesProvider
{
    /**
     * Get properties for "manifest" section 
     */
    properties = [
        ManifestVersionProperty,
    ];

    constructor( kernel )
    {
        super(kernel, MANIFEST_CONFIG_FILE);
    }

    get hasValidConfig()
    {
        return this.hasConfigData && null != this.config.manifest;
    }
}