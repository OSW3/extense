/**
 * background.persistent Property
 * --
 * Generate the "background.persistent" property of manifest.json
 * 
 * @version 1.0
 * @since 1.0
 */
'use strict';

const PropertyProvider = require('../../../../Providers/PropertyProvider');
const PROPERTY_ID = 'persistent';

module.exports = class PersistentProperty extends PropertyProvider
{
    getProperty()
    {
        // TODO: switch at TRUE if the chorme.webRequest is used
        // https://developer.chrome.com/docs/extensions/reference/webRequest/
        let value = false;
        
        return {[`${PROPERTY_ID}`]: value};
    }
}