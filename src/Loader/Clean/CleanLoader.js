'use strict';

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const EmptyLoader = require('../Empty/EmptyLoader');
// const LocalesProperties = require('./Properties/LocalesProperties');


const LOADER_ID = 'clean';

module.exports = class CleanLoader
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

        // Get the base config frome the empty loader
        let baseConfig = new EmptyLoader( this.#kernel ).getConfig();

        // Merge the default loader config with the base config
        this.#config = Object.assign(this.#config, baseConfig);
    }

    getConfig()
    {
        return Object.assign(this.#config, {
            name: LOADER_ID,
            plugins: this.#config.plugins.concat([
                new CleanWebpackPlugin()
            ]),
        });
    }
}