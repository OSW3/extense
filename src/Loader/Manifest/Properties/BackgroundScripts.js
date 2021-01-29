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

const PROPERTY_ID = 'scripts';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class BackgroundScripts extends ManifestConfig
{
    getProperty()
    {
        let value = null;
        
        if (null != this.config.app.background.scripts)
        {
            value = this.config.app.background.scripts;
            
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}