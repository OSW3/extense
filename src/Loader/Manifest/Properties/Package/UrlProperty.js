/**
 * Homepage_url Property
 * --
 * Generate the "homepage_url" property of manifest.json
 * 
 * @version 1.0
 * @since 1.0
 */
'use strict';

const PropertyProvider = require('../../../../Providers/PropertyProvider');

const PROPERTY_ID = 'homepage_url';

module.exports = class UrlProperty extends PropertyProvider
{
    getProperty()
    {
        let value = this.config.package.url;
        
        if (value)
        {
            // TODO: Check the URL syntaxe
            
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}