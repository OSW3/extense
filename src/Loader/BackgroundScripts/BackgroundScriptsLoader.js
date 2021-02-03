'use strict';

const yaml = require('yaml-reader');
const EmptyLoader = require('../Empty/EmptyLoader');

const { BASE_CONFIG } = require('../../Config/webpack.config');





// const path = require("path");
const { BACKGROUND_CONFIG_FILE,
        FRAMEWORK_DIST_OUTPUT } = require("../../Config/Config");

const LOADER_ID = 'background_scripts';



const SOURCE = '/src/app/background/index.js';
const OUTPUT = 'app/background.js';

// const outputPath = path.resolve(__dirname, "../../dist/");



module.exports = class BackgroundScriptsLoader
{
    // /**
    //  * Output loader config
    //  * 
    //  * @var Object
    //  */
    // #loader = new Object;

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
     * Config definition from "background.yml"
     */
    #config;

    constructor( kernel )
    {
        // retrieve the Kernel instance
        this.#kernel = kernel;

        // Merge the default loader config with the base config
        // this.#loader = Object.assign(this.#loader, BASE_CONFIG);

        // Build the absolute path of the manifest config file
        this.source = `${this.#kernel.project_dir}${BACKGROUND_CONFIG_FILE}`;

        try 
        {
            // Read the manifest data of the YML source
            this.#config = yaml.read( this.source );
            this.#hasConfigData = true;
        } 
        catch(e) {}
    }
    
    getConfig()
    {
        // Loader object for BackgroundScriptsLoader
        let loader = new Object;
        let scripts = new Array;

        // If file "background.yml" is not found
        if (!this.#hasConfigData)
        {
            // Get the base config frome the empty loader
            let baseConfig = new EmptyLoader( this.#kernel ).getConfig();

            // Merge the default loader config with the base config
            loader = Object.assign(loader, baseConfig);

            return this.render(loader);
        }

        // Background scripts definition
        let items = this.#config.background;

        for (let index in items) 
        {
            let loader_id = `${LOADER_ID}.${index}`;

            // Single script definition
            let item = items[ index ];

            let entry = item.input;

            if (typeof entry === 'string')
            {
                entry = new Array(entry);
            }

            let loader = Object.assign(new Object, {
                name: loader_id,
                entry: entry,
                output: {
                    path: `${this.#kernel.project_dir}${FRAMEWORK_DIST_OUTPUT}`,
                    filename: item.output
                },
            });

            scripts.push(this.render(loader));
        }
        
        return scripts;
    }

    render(data)
    {
        this.#kernel.log(`Background Scripts Loader`, data);
        return Object.assign(new Object, BASE_CONFIG, data);
    }
}