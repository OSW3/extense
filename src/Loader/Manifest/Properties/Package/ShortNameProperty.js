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

const PropertyProvider = require('../../../../Providers/PropertyProvider');

const PROPERTY_ID = 'short_name';

module.exports = class ShortNameProperty extends PropertyProvider
{
    getProperty()
    {
        let value = this.config.package.short_name;

        if (value)
        {
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}