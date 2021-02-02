/**
 * Version Property
 * --
 * Generate the "version" property of manifest.json
 * 
 * @version 1.0
 * @since 1.0
 */
'use strict';

const fs = require('fs');
const PropertyProvider = require('../../../../Providers/PropertyProvider');

const PROPERTY_ID = 'version';
const PACKAGE_CONFIG = JSON.parse(fs.readFileSync('./package.json'));

module.exports = class VersionProperty extends PropertyProvider
{
    getProperty()
    {
        let value = this.config.package.version || PACKAGE_CONFIG.version;

        if (null != value)
        {
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}