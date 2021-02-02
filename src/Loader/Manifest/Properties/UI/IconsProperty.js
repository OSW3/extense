/**
 * icons Property
 * --
 * Generate the "icons" property of manifest.json
 * 
 * @version 1.0
 * @since 1.0
 */
'use strict';

const PropertyProvider = require('../../../../Providers/PropertyProvider');

const PROPERTY_ID = 'icons';

module.exports = class IconsProperty extends PropertyProvider
{
    getProperty()
    {
        let value = this.config.ui.icons;
        
        if (value)
        {
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}