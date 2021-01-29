/**
 * icons Property
 * --
 * Generate the "icons" property of manifest.json
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

const PROPERTY_ID = 'icons';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class UiIcons extends ManifestConfig
{
    getProperty()
    {
        let value = null;
        
        if (value = this.config.icons)
        {
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}