'use strict';

const yaml = require('yaml-reader');
const CopyPlugin = require("copy-webpack-plugin");
const EmptyLoader = require('../Empty/EmptyLoader');
const { LOCALES_CONFIG_FILE, FRAMEWORK_DIST_DIRECTORY } = require("../../Config/Config");

const LOADER_ID = 'locales';

module.exports = class LocalesLoaders
{
    /**
     * Output loader config
     * 
     * @var Object
     */
    #loader = new Object;

    /**
     * Kernel Instance
     * 
     * @var Kernel
     */
    #kernel;

    /**
     * Flag of config file
     * 
     * @var bool False if the YML config file is not found
     */
    #hasConfigData = false;

    /**
     * Config definition from "locales.yml"
     */
    #config;

    constructor( kernel )
    {
        // retrieve the Kernel instance
        this.#kernel = kernel;

        // Get the base config frome the empty loader
        let baseConfig = new EmptyLoader( this.#kernel ).getConfig();

        // Merge the default loader config with the base config
        this.#loader = Object.assign(this.#loader, baseConfig);

        // Build the absolute path of the manifest config file
        let source = `${this.#kernel.project_dir}${LOCALES_CONFIG_FILE}`;

        try 
        {
            // Read the manifest data of the YML source
            this.#config = yaml.read( source );
            this.#hasConfigData = true;
        } 
        catch(e) {}
    }

    getConfig()
    {
        // console.log( this.#config );

        let path = `src/translations/`;

        let loader = {
            name: LOADER_ID,
            plugins: this.#loader.plugins.concat([
                new CopyPlugin({ patterns: [{
                    from: `${this.#kernel.project_dir}${path}`, 
                    to: `${this.#kernel.project_dir}${FRAMEWORK_DIST_DIRECTORY}_locales`, 
                    toType: "dir"
                }]}),
            ])
        };

        return Object.assign(this.#loader, loader);
    }
}