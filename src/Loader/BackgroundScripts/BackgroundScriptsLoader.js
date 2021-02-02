'use strict';


const path = require("path");

const LOADER_ID = 'background_scripts';


// const BASE_CONFIG = require('../../Config/webpack.config');

const SOURCE = '/src/app/background/index.js';
const OUTPUT = '/app/background.js';

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


    kernel;

    constructor( kernel )
    {
        this.kernel = kernel;

        let baseConfig = BASE_CONFIG;

        // Merge the default loader config with the base config
        this.#config = Object.assign(this.#config, baseConfig);
    }
    
    getConfig()
    {
        return Object.assign(this.#config, {
            name: LOADER_ID,
            entry: SOURCE,
            output: {
                path: outputPath,
                filename: OUTPUT
            },
        });
    }
}