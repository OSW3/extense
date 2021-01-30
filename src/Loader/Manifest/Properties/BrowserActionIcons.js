/**
 * background.scripts Property
 * --
 * Generate the "background.scripts" property of manifest.json
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

const PROPERTY_ID = 'default_icon';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class BrowserActionIcons extends ManifestConfig
{
    getProperty()
    {
        let value = null;
        
        if (null != this.config.app.browser_action.icon)
        {
            value = this.config.app.browser_action.icon;
            
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}