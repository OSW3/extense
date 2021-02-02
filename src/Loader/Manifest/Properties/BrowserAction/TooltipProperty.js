'use strict';

const PropertyProvider = require('../../../../Providers/PropertyProvider');
const PROPERTY_ID = 'default_title';

module.exports = class TooltipProperty extends PropertyProvider
{
    getProperty()
    {
        let value = null;
        
        if (null != this.config.browser_action.tooltip)
        {
            value = this.config.browser_action.tooltip;
            
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}