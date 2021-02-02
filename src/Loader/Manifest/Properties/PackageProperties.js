'use strict';

const { PACKAGE_CONFIG_FILE } = require('../../../Config/Config');

const PropertiesProvider = require('../../../Providers/PropertiesProvider');
const VersionProperty = require('./Package/VersionProperty');
const DescriptionProperty = require('./Package/DescriptionProperty');
const NameProperty = require('./Package/NameProperty');
const ShortNameProperty = require('./Package/ShortNameProperty');
const AuthorProperty = require('./Package/AuthorProperty');
const UrlProperty = require('./Package/UrlProperty');

module.exports = class PackageProperties extends PropertiesProvider
{
    /**
     * Get properties for "package" section 
     */
    properties = [
        NameProperty,
        ShortNameProperty,
        DescriptionProperty,
        VersionProperty,
        AuthorProperty,
        UrlProperty
    ];

    constructor( kernel )
    {
        super(kernel, PACKAGE_CONFIG_FILE);
    }

    get hasValidConfig()
    {
        return this.hasConfigData && null != this.config.package;
    }
}
