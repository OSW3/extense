/**
 * background_scripts.css Property
 * --
 * Generate the "background_scripts.css" property of manifest.json
 * 
 * @version 1.0
 * @since 1.0
 */
'use strict';

const PropertyProvider = require('../../../../Providers/PropertyProvider');
const PROPERTY_ID = 'css';

module.exports = class StylecheetsProperty extends PropertyProvider
{
    getProperty()
    {
        let value = this.config.content.stylesheets;
        
        if (value)
        {            
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}