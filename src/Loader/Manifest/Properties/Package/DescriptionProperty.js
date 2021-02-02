/**
 * Description Property
 * --
 * Generate the "description" property of manifest.json
 * 
 * @version 1.0
 * @since 1.0
 */
'use strict';

const fs = require('fs');
const PropertyProvider = require('../../../../Providers/PropertyProvider');

const PROPERTY_ID = 'description';
const PACKAGE_CONFIG = JSON.parse(fs.readFileSync('./package.json'));

module.exports = class DescriptionProperty extends PropertyProvider
{
    getProperty()
    {
        let value = this.config.package.description || PACKAGE_CONFIG.description;

        if (null != value)
        {
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}