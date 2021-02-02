/**
 * optional permissions Property
 * --
 * Generate the "optional_permissions" property of manifest.json
 * 
 * @version 1.0
 * @since 1.0
 */
'use strict';

const PropertyProvider = require('../../../../Providers/PropertyProvider');
const PROPERTY_ID = 'optional_permissions';

module.exports = class OptionalPermissionsProperty extends PropertyProvider
{
    getProperty()
    {
        let value = this.config.security.optional_permissions;

        if (value)
        {
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}