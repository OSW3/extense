/**
 * background_scripts.js Property
 * --
 * Generate the "background_scripts.js" property of manifest.json
 * 
 * @version 1.0
 * @since 1.0
 */
'use strict';

const PropertyProvider = require('../../../../Providers/PropertyProvider');
const PROPERTY_ID = 'js';

module.exports = class ScriptsProperty extends PropertyProvider
{
    getProperty()
    {
        let value = null;
        
        if (null != this.config.content.scripts)
        {
            value = this.config.content.scripts;
            
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}