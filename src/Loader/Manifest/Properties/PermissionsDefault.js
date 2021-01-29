/**
 * permissions Property
 * --
 * Generate the "permissions" property of manifest.json
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

const PROPERTY_ID = 'permissions';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class PermissionsDefault extends ManifestConfig
{
    getProperty()
    {
        let value = null;

        if (null != this.config.permissions && null != this.config.permissions.defaults)
        {
            value = this.config.permissions.defaults;

            return {[`${PROPERTY_ID}`]: value};
        }
    }
}