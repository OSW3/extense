/**
 * Manifest Version
 * --
 * Generate the "manofest_version" property
 * 
 * @version 1.0
 * @since 1.0
 */

'use strict';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Imports

const yaml = require('yaml-reader');
const path = require("path");

const { MANIFEST_CONFIG_FILE, 
        MANIFEST_OUTPUT_FILE } = require('./../../Config/Config');


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class ManifestConfig
{
    kernel;

    config;

    /**
     * The absolute path of the YAML manifest source
     * 
     * @var string
     */
    source;

    /**
     * The absolute path of the JSON manifest
     * 
     * @var string
     */
    output;

    constructor( kernel )
    {
        this.kernel = kernel;

        // Build the absolute path of the manifest config file
        this.source = `${kernel.project_dir}${MANIFEST_CONFIG_FILE}`;

        // Build the absolute path of the manifest json
        // this.output = `${kernel.project_dir}${OUTPUT}`;
        this.output = path.resolve(kernel.project_dir, MANIFEST_OUTPUT_FILE);

        // Read the manifest data of the YML source
        this.config = yaml.read( this.source );
    }

}