'use strict';

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const EmptyLoader = require('../Empty/EmptyLoader');
// const LocalesProperties = require('./Properties/LocalesProperties');


const LOADER_ID = 'clean';

module.exports = class CleanLoader
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

    constructor( kernel ) 
    {
        // retrieve the Kernel instance
        this.#kernel = kernel;

        // Get the base config frome the empty loader
        let baseConfig = new EmptyLoader( this.#kernel ).getConfig();

        // Merge the default loader config with the base config
        this.#loader = Object.assign(this.#loader, baseConfig);
    }

    getConfig()
    {
        // Loader object for CleanLoader
        let loader = {
            name: LOADER_ID,
            plugins: this.#loader.plugins.concat([
                new CleanWebpackPlugin()
            ]),
        };

        return Object.assign(this.#loader, loader);
    }
}