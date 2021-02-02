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
const PROPERTY_ID = 'run_at';

module.exports = class RunTimeProperty extends PropertyProvider
{
    getProperty()
    {
        // TODO: Check runtime value
        let value = null;
        
        if (null != this.config.content.run_time)
        {
            value = this.config.content.run_time;
            
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}