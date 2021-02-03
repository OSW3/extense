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


        let styles = [];

        // Background styles definition
        let items = this.config.content.styles;

        for (const index in items) 
        {
            // Single script definition
            let item = items[ index ];

            // Get the Output filename
            styles.push(item.output);
        }

        return {[`${PROPERTY_ID}`]: styles};
    }
}