/**
 * Manifest Version
 * --
 * Generate the "manifest_version" property of manifest.json
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

const PROPERTY_ID = 'manifest_version';

const MANIFEST_VERSION_MIN = 2;
const MANIFEST_VERSION_MAX = 3;


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class ManifestVersion extends ManifestConfig
{
    getProperty()
    {
        let value = null;

        if (null == (value = this.config.manifest.version))
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