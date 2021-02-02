/**
 * background_scripts.include_globs Property
 * --
 * Generate the "background_scripts.include_globs" property of manifest.json
 * Generate the "background_scripts.exclude_globs" property of manifest.json
 * 
 * @version 1.0
 * @since 1.0
 */
'use strict';

const PropertyProvider = require('../../../../Providers/PropertyProvider');

const INCLUDE_PROPERTY_ID = 'include_globs';
const EXCLUDE_PROPERTY_ID = 'exclude_globs';

module.exports = class GlobsProperty extends PropertyProvider
{
    getProperty()
    {
        // TODO: check globs value is an aray or null
        if (null != this.config.content.globs)
        {
            if (null != this.config.content.globs.include)
            {
                return {[`${INCLUDE_PROPERTY_ID}`]: this.config.content.globs.include};
            }
            if (null != this.config.content.globs.exclude)
            {
                return {[`${EXCLUDE_PROPERTY_ID}`]: this.config.content.globs.exclude};
            }
        }
    }
}