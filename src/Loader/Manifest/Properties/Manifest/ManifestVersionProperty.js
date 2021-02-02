/**
 * Manifest Version
 * --
 * Generate the "manifest_version" property of manifest.json
 * 
 * @version 1.0
 * @since 1.0
 */
'use strict';
const PropertyProvider = require('../../../../Providers/PropertyProvider');

const PROPERTY_ID = 'manifest_version';
const { MANIFEST_VERSION_MIN,
        MANIFEST_VERSION_MAX } = require('../../../../Config/Config');

module.exports = class ManifestVersionProperty extends PropertyProvider
{
    getProperty()
    {
        let value = this.config.manifest.version;

        if (null == value)
        {
            throw new Error(`The manifest version is required`);
        }

        if (value < MANIFEST_VERSION_MIN || value > MANIFEST_VERSION_MAX)
        {
            throw new Error(`The manifest version must be an integer value between ${MANIFEST_VERSION_MIN} and ${MANIFEST_VERSION_MAX}`);
        }

        return {[`${PROPERTY_ID}`]: value};
    }
}