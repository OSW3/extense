'use strict';


const path = require("path");
const { FRAMEWORK_DIST_OUTPUT } = require("../../Config/Config");

const LOADER_ID = 'background_scripts';


// const BASE_CONFIG = require('../../Config/webpack.config');

const SOURCE = '/src/app/background/index.js';
const OUTPUT = 'app/background.js';

const outputPath = path.resolve(__dirname, "../../dist/");


const { BASE_CONFIG } = require('../../Config/webpack.config');

module.exports = class BackgroundScriptsLoader
{
    /**
     * Initialize outpout data
     * 
     * @var Object
     */
    #config = new Object;

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

        let baseConfig = BASE_CONFIG;

        // Merge the default loader config with the base config
        this.#config = Object.assign(this.#config, baseConfig);
    }
    
    getConfig()
    {
        // Compiled output config
        let loader = {
            name: LOADER_ID,
            entry: SOURCE,
            output: {
                // path: outputPath,
                path: `${this.#kernel.project_dir}${FRAMEWORK_DIST_OUTPUT}`,
                filename: OUTPUT
            },
        };

        this.#kernel.log(`Background Scripts Loader`, loader);

        return Object.assign(this.#config, loader);
    }
}