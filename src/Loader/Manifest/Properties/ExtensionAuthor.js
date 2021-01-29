/**
 * Author Property
 * --
 * Generate the "author" property of manifest.json
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

const PROPERTY_ID = 'author';
const PACKAGE_CONFIG = JSON.parse(fs.readFileSync('./package.json'));


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class ExtensionAuthor extends ManifestConfig
{
    getProperty()
    {
        let value = this.config.extension.author || PACKAGE_CONFIG.author;
        
        if (value)
        {
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}