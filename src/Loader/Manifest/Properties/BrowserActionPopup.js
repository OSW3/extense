/**
 * browser_action.default_popup Property
 * --
 * Generate the "browser_action.default_popup" property of manifest.json
 * 
 * @version 1.0
 * @since 1.0
 */

'use strict';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Imports

const ManifestConfig = require('../ManifestConfig');


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Consts

const PROPERTY_ID = 'default_popup';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class BrowserActionPopup extends ManifestConfig
{
    getProperty()
    {
        let value = null;
        
        if (null != this.config.app.browser_action.popup)
        {
            value = this.config.app.browser_action.popup;
            
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}