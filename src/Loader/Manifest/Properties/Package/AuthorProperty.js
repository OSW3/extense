/**
 * Author Property
 * --
 * Generate the "author" property of manifest.json
 * 
 * @version 1.0
 * @since 1.0
 */
'use strict';

const fs = require('fs');
const PropertyProvider = require('../../../../Providers/PropertyProvider');

const PROPERTY_ID = 'author';
const PACKAGE_CONFIG = JSON.parse(fs.readFileSync('./package.json'));

module.exports = class AuthorProperty extends PropertyProvider
{
    getProperty()
    {
        let value = this.config.package.author || PACKAGE_CONFIG.author;
        
        if (value)
        {
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}