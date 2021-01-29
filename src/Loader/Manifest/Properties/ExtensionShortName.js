/**
 * Short Name Property
 * --
 * Generate the "short_name" property of manifest.json
 * https://developer.chrome.com/docs/extensions/mv2/manifest/name/#short_name
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

const PROPERTY_ID = 'short_name';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class ExtensionName extends ManifestConfig
{
    getProperty()
    {
        let value = null;

        if (value = this.config.extension.short_name)
        {
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}