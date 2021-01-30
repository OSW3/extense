/**
 * browser_action.tooltip Property
 * --
 * Generate the "browser_action.tooltip" property of manifest.json
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

const PROPERTY_ID = 'default_title';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class BrowserActionTooltip extends ManifestConfig
{
    getProperty()
    {
        let value = null;
        
        if (null != this.config.app.browser_action.tooltip)
        {
            value = this.config.app.browser_action.tooltip;
            
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}