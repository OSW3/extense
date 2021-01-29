/**
 * default_locale Property
 * --
 * Generate the "default_locale" property of manifest.json
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

const PROPERTY_ID = 'default_locale';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class LocalesDefault extends ManifestConfig
{
    getProperty()
    {
        let value = null;
        
        if (null != this.config.locales && null != this.config.locales.default)
        {
            value = this.config.locales.default;

            return {[`${PROPERTY_ID}`]: value};
        }
    }
}