/**
 * Background Scripts Loader
 * --
 * 
 * @version 1.0
 * @since 1.0
 */

'use strict';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Imports

const path = require("path");


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Consts

const LOADER_ID = 'background_scripts';


const BASE_CONFIG = require('../../Config/webpack.config');

const SOURCE = '/src/app/background/index.js';
const OUTPUT = '/app/background.js';

const outputPath = path.resolve(__dirname, "../../dist/");


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class BackgroundScriptsLoader
{
    kernel;

    constructor( kernel )
    {
        this.kernel = kernel;
    }
    
    getConfig()
    {
        return Object.assign(BASE_CONFIG, {
            name: LOADER_ID,
            entry: SOURCE,
            output: {
                path: outputPath,
                filename: OUTPUT
            },
        });
    }
}