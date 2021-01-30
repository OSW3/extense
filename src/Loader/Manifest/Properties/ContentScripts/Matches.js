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

const ManifestConfig = require('../../ManifestConfig');


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Consts

const INCLUDE_PROPERTY_ID = 'matches';
const EXCLUDE_PROPERTY_ID = 'exclude_matches';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class Matches extends ManifestConfig
{
    getProperty()
    {
        if (null != this.config.app.content.matches)
        {
            if (null != this.config.app.content.matches.include)
            {
                return {[`${INCLUDE_PROPERTY_ID}`]: this.config.app.content.matches.include};
            }
            if (null != this.config.app.content.matches.exclude)
            {
                return {[`${EXCLUDE_PROPERTY_ID}`]: this.config.app.content.matches.exclude};
            }
        }
    }
}