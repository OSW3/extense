/**
 * Manifest Loader
 * --
 * Generate the "manifest.json" file
 * 
 * @version 1.0
 * @since 1.0
 */

'use strict';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Imports

const GenerateJsonPlugin = require('generate-json-webpack-plugin');

const ManifestVersion = require('./Properties/ManifestVersion');
const ManifestConfig = require('./ManifestConfig');
const ExtensionName = require('./Properties/ExtensionName');
const ExtensionShortName = require('./Properties/ExtensionShortName');
const ExtensionDescription = require('./Properties/ExtensionDescription');
const ExtensionVersion = require('./Properties/ExtensionVersion');
const ExtensionAuthor = require('./Properties/ExtensionAuthor');
const ExtensionUrl = require('./Properties/ExtensionUrl');
const LocalesDefault = require('./Properties/LocalesDefault');


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Consts

const LOADER_ID = 'manifest';
const BASE_CONFIG = require('../../Config/webpack.config');


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class ManifestLoader extends ManifestConfig
{
    manifest = Object.assign({});

    properties = [
        new ManifestVersion( this.kernel ),
        new ExtensionName( this.kernel ),
        new ExtensionShortName( this.kernel ),
        new ExtensionDescription( this.kernel ),
        new ExtensionVersion( this.kernel ),
        new ExtensionAuthor( this.kernel ),
        new ExtensionUrl( this.kernel ),
        new LocalesDefault( this.kernel ),
    ];

    getConfig()
    {
        return Object.assign(BASE_CONFIG, {
            name: LOADER_ID,
            plugins: BASE_CONFIG.plugins.concat([
                new GenerateJsonPlugin(
                    this.output, 
                    this.getData(),
                )
            ]),
            __dump: this.getData(),
        });
    }

    getData()
    {
        this.properties.forEach(property => {
            this.manifest = Object.assign(this.manifest, property.getProperty()) ;
        });

        return this.manifest;
    }
}