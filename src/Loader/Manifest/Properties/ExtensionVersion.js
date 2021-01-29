/**
 * Version Property
 * --
 * Generate the "version" property of manifest.json
 * 
 * @version 1.0
 * @since 1.0
 */

'use strict';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Imports

const fs = require('fs');
const ManifestConfig = require('../ManifestConfig');


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Consts

const PROPERTY_ID = 'version';
const PACKAGE_CONFIG = JSON.parse(fs.readFileSync('./package.json'));


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class ExtensionVersion extends ManifestConfig
{
    getProperty()
    {
        let value = this.config.extension.version || PACKAGE_CONFIG.version;

        if (null != value)
        {
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}