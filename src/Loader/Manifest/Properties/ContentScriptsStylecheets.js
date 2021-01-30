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

const PROPERTY_ID = 'css';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class ContentScriptsStylecheets extends ManifestConfig
{
    getProperty()
    {
        let value = null;
        
        if (null != this.config.app.content.stylesheets)
        {
            value = this.config.app.content.stylesheets;
            
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}