/**
 * background.scripts Property
 * --
 * Generate the "background_scripts.matches" property of manifest.json
 * Generate the "background_scripts.exclude_matches" property of manifest.json
 * 
 * @version 1.0
 * @since 1.0
 */
'use strict';

const PropertyProvider = require('../../../../Providers/PropertyProvider');

const INCLUDE_PROPERTY_ID = 'matches';
const EXCLUDE_PROPERTY_ID = 'exclude_matches';

module.exports = class MatchesProperty extends PropertyProvider
{
    getProperty()
    {
        // TODO: check matches value is an aray or null
        if (null != this.config.content.matches)
        {
            if (null != this.config.content.matches.include)
            {
                return {[`${INCLUDE_PROPERTY_ID}`]: this.config.content.matches.include};
            }
            if (null != this.config.content.matches.exclude)
            {
                return {[`${EXCLUDE_PROPERTY_ID}`]: this.config.content.matches.exclude};
            }
        }
    }
}