/**
 * default_locale Property
 * --
 * Generate the "default_locale" property of manifest.json
 * 
 * @version 1.0
 * @since 1.0
 */
'use strict';

const PropertyProvider = require('../../../../Providers/PropertyProvider');

const PROPERTY_ID = 'default_locale';

module.exports = class LocaleDefaultProperty extends PropertyProvider
{
    getProperty()
    {
        let value = null;
        
        if (null != this.config.locales.default)
        {
            value = this.config.locales.default;

            return {[`${PROPERTY_ID}`]: value};
        }
    }
}