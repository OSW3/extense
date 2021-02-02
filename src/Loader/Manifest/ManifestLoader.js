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

const { MANIFEST_OUTPUT_FILE } = require('./../../Config/Config');

const GenerateJsonPlugin = require('generate-json-webpack-plugin');

const EmptyLoader = require('../Empty/EmptyLoader');
const LocalesProperties = require('./Properties/LocalesProperties');

const ManifestProperties = require('./Properties/ManifestProperties');
const PackageProperties = require('./Properties/PackageProperties');
const UiProperties = require('./Properties/UiProperties');
const SecurityProperties = require('./Properties/SecurityProperties');
const BackgroundProperties = require('./Properties/BackgroundProperties');
const ContentScriptsProperties = require('./Properties/ContentScriptsProperties');
const BrowserActionProperties = require('./Properties/BrowserActionProperties');


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Consts

const LOADER_ID = 'manifest';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class ManifestLoader
{
    /**
     * Initialize outpout data
     * 
     * @var Object
     */
    #config = new Object;

    /**
     * Output manifest json data
     * 
     * @var Object
     */
    #manifest = new Object;

    /**
     * Properties loaders
     * 
     * @var array
     */
    #properties = [
        ManifestProperties,
        PackageProperties,
        LocalesProperties,
        UiProperties,
        SecurityProperties,
        BackgroundProperties,
        ContentScriptsProperties,
        BrowserActionProperties,
    ];

    /**
     * Kernel Instance
     * 
     * @var Kernel
     */
    #kernel;

    constructor( kernel ) 
    {
        // retrieve the Kernel instance
        this.#kernel = kernel;

        // Get the base config frome the empty loader
        let baseConfig = new EmptyLoader( this.#kernel ).getConfig();

        // Merge the default loader config with the base config
        this.#config = Object.assign(this.#config, baseConfig);
    }

    get getManifest()
    {
        return this.#manifest;
    }

    set addToManifest( data )
    {
        Object.assign(this.#manifest, data) ;
    }

    getConfig()
    {
        this.propertiesBuilder();

        this.#kernel.log(`The Manifest`, this.getManifest);

        return Object.assign(this.#config, {
            name: LOADER_ID,
            plugins: this.#config.plugins.concat([
                new GenerateJsonPlugin(
                    `${MANIFEST_OUTPUT_FILE}`, 
                    this.getManifest
                )
            ]),
        });
    }

    propertiesBuilder()
    {
        this.#properties.forEach(item => {

            let property = new item( this.#kernel );

            this.addToManifest = property.builder();
        });
    }
}