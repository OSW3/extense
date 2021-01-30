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

const EmptyLoader = require('../Empty/EmptyLoader');

const ManifestConfig = require('./ManifestConfig');

const Manifest_VersionProperty = require('./Properties/Manifest/VersionProperty');
const ExtensionName = require('./Properties/ExtensionName');
const ExtensionShortName = require('./Properties/ExtensionShortName');
const ExtensionDescription = require('./Properties/ExtensionDescription');
const ExtensionVersion = require('./Properties/ExtensionVersion');
const ExtensionAuthor = require('./Properties/ExtensionAuthor');
const ExtensionUrl = require('./Properties/ExtensionUrl');
const LocalesDefault = require('./Properties/LocalesDefault');
const UI_IconsProperty = require('./Properties/UI/IconsProperty');
const PermissionsDefault = require('./Properties/PermissionsDefault');
const PermissionsOptional = require('./Properties/PermissionsOptional');
const BackgroundScripts = require('./Properties/BackgroundScripts');
const BrowserAction = require('./Properties/BrowserAction');
const ContentScripts = require('./Properties/ContentScripts');


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Consts

const LOADER_ID = 'manifest';
// const BASE_CONFIG = require('../../Config/webpack.config');


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class ManifestLoader extends ManifestConfig
{
    manifest = Object.assign({});

    properties = [
        new Manifest_VersionProperty( this.kernel ),
        new ExtensionName( this.kernel ),
        new ExtensionShortName( this.kernel ),
        new ExtensionDescription( this.kernel ),
        new ExtensionVersion( this.kernel ),
        new ExtensionAuthor( this.kernel ),
        new ExtensionUrl( this.kernel ),
        new LocalesDefault( this.kernel ),
        new UI_IconsProperty( this.kernel ),
        new PermissionsDefault( this.kernel ),
        new PermissionsOptional( this.kernel ),
        new BackgroundScripts( this.kernel ),
        new BrowserAction( this.kernel ),
        new ContentScripts( this.kernel ),
    ];

    getConfig()
    {
        let config = new EmptyLoader( this.kernel ).getConfig()

        return Object.assign(config, {
            name: LOADER_ID,
            plugins: config.plugins.concat([
                new GenerateJsonPlugin(
                    this.output, 
                    this.getData(),
                )
            ]),
            // __dump: this.getData(),
        });
    }

    getData()
    {
        this.properties.forEach(property => {
            // console.log( property.getProperty() );
            this.manifest = Object.assign(this.manifest, property.getProperty()) ;
        });

        return this.manifest;
    }
}