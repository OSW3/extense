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
        let scripts = [];

        // Background scripts definition
        let items = this.config.background;

        for (const index in items) 
        {
            // Single script definition
            let item = items[ index ];

            // Get the Output filename
            scripts.push(item.output);
        }

        return {[`${PROPERTY_ID}`]: scripts};
    }
}