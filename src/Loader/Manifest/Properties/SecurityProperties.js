'use strict';

const PropertiesProvider = require('../../../Providers/PropertiesProvider');
const { SECURITY_CONFIG_FILE } = require('../../../Config/Config');

const PermissionsDefaultProperty = require('./Security/PermissionsDefaultProperty');
const OptionalPermissionsProperty = require('./Security/OptionalPermissionsProperty');
const IncognitoProperty = require('./Security/IncognitoProperty');

module.exports = class SecurityProperties extends PropertiesProvider
{
    /**
     * Get properties for "package" section 
     */
    properties = [
        PermissionsDefaultProperty,
        OptionalPermissionsProperty,
        IncognitoProperty,
    ];

    constructor( kernel )
    {
        super(kernel, SECURITY_CONFIG_FILE);
    }

    get hasValidConfig()
    {
        return this.hasConfigData && null != this.config.security;
    }
}
