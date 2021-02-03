'use strict';

const yaml = require('yaml-reader');
const CopyPlugin = require("copy-webpack-plugin");
const EmptyLoader = require('../Empty/EmptyLoader');
const { LOCALES_CONFIG_FILE, 
        DEFAULT_LOCALES_SOURCES_PATH,
        FRAMEWORK_DIST_DIRECTORY } = require("../../Config/Config");

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
        // Define path with default path value
        let path = DEFAULT_LOCALES_SOURCES_PATH;

        // Override the path if its defined in locales.yml
        if (this.#config.locales && this.#config.locales.path)
        {
            path = this.#config.locales.path;
        }

        // Check the first char of "path", must be a "/"
        if (path.charAt(0) != '/')
        {
            path = `/${path}`;
        }
        
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