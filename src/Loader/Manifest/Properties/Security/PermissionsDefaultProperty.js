/**
 * permissions Property
 * --
 * Generate the "permissions" property of manifest.json
 * 
 * @version 1.0
 * @since 1.0
 */
'use strict';

const PropertyProvider = require('../../../../Providers/PropertyProvider');
const PROPERTY_ID = 'permissions';

module.exports = class PermissionsDefaultProperty extends PropertyProvider
{
    getProperty()
    {
        let value = this.config.security.permissions;

        if (value)
        {
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}