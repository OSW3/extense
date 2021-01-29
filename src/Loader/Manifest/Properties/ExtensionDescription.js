/**
 * Description Property
 * --
 * Generate the "description" property of manifest.json
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

const PROPERTY_ID = 'description';
const PACKAGE_CONFIG = JSON.parse(fs.readFileSync('./package.json'));


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class ExtensionDescription extends ManifestConfig
{
    getProperty()
    {
        let value = this.config.extension.description || PACKAGE_CONFIG.description;

        if (null != value)
        {
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}