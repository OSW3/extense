'use strict';

const PropertyProvider = require('../../../../Providers/PropertyProvider');
const PROPERTY_ID = 'default_popup';

module.exports = class PopupProperty extends PropertyProvider
{
    getProperty()
    {
        let value = null;
        
        if (null != this.config.browser_action.popup)
        {
            value = this.config.browser_action.popup;
            
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}