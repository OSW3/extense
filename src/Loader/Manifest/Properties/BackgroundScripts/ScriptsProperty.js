/**
 * background.scripts Property
 * --
 * Generate the "background.scripts" property of manifest.json
 * 
 * @version 1.0
 * @since 1.0
 */

'use strict';

const PropertyProvider = require('../../../../Providers/PropertyProvider');
const PROPERTY_ID = 'scripts';

module.exports = class ScriptsProperty extends PropertyProvider
{
    getProperty()
    {
        // TODO: Value must be an array or string if once
        
        let value = null;
        
        if (null != this.config.background.scripts)
        {
            value = this.config.background.scripts;
            
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}