/**
 * optional permissions Property
 * --
 * Generate the "optional_permissions" property of manifest.json
 * 
 * @version 1.0
 * @since 1.0
 */

'use strict';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Imports

const ManifestConfig = require('../ManifestConfig');


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Consts

const PROPERTY_ID = 'optional_permissions';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class PermissionsOptional extends ManifestConfig
{
    getProperty()
    {
        let value = null;

        if (null != this.config.permissions && null != this.config.permissions.optional)
        {
            value = this.config.permissions.optional;

            return {[`${PROPERTY_ID}`]: value};
        }
    }
}