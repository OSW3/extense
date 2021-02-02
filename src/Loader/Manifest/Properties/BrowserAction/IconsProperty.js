'use strict';

const PropertyProvider = require('../../../../Providers/PropertyProvider');
const PROPERTY_ID = 'default_icon';

module.exports = class IconsProperty extends PropertyProvider
{
    getProperty()
    {
        let value = null;
        
        if (null != this.config.browser_action.icon)
        {
            value = this.config.browser_action.icon;
            
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}