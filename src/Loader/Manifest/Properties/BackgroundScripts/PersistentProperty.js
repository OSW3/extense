/**
 * background.persistent Property
 * --
 * Generate the "background.persistent" property of manifest.json
 * 
 * @version 1.0
 * @since 1.0
 */

'use strict';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Imports

const ManifestConfig = require('../../ManifestConfig');


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Consts

const PROPERTY_ID = 'persistent';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class PersistentProperty extends ManifestConfig
{
    getProperty()
    {
        let value = null;
        
        if (null != this.config.app.background.persistent)
        {
            value = this.config.app.background.persistent;
            
            return {[`${PROPERTY_ID}`]: value};
        }
    }
}