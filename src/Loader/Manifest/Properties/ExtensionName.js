/**
 * Name Property
 * --
 * Generate the "name" property of manifest.json
 * https://developer.chrome.com/docs/extensions/mv2/manifest/name/#name
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

const PROPERTY_ID = 'name';
const PACKAGE_CONFIG = JSON.parse(fs.readFileSync('./package.json'));


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class ExtensionName extends ManifestConfig
{
    getProperty()
    {
        let value = this.config.extension.name || PACKAGE_CONFIG.name;

        if (null == value)
        {
            throw new Error(`The name of the extension is required.`);
        }
        
        return {[`${PROPERTY_ID}`]: value};
    }
}