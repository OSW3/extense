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

const INCLUDE_PROPERTY_ID = 'include_globs';
const EXCLUDE_PROPERTY_ID = 'exclude_globs';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class ContentScriptsGlobs extends ManifestConfig
{
    getProperty()
    {
        if (null != this.config.app.content.globs)
        {
            if (null != this.config.app.content.globs.include)
            {
                return {[`${INCLUDE_PROPERTY_ID}`]: this.config.app.content.globs.include};
            }
            if (null != this.config.app.content.globs.exclude)
            {
                return {[`${EXCLUDE_PROPERTY_ID}`]: this.config.app.content.globs.exclude};
            }
        }
    }
}