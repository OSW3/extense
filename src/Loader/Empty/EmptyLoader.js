/**
 * Empty Loader
 * --
 * Load empty params for Webpack
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
const RemovePlugin = require('remove-files-webpack-plugin');


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Consts

const { FRAMEWORK_DIST_OUTPUT } = require("../../Config/Config");
const LOADER_ID = 'empty';

const { BASE_CONFIG } = require('../../Config/webpack.config');

const ENTRY_FILE = path.resolve(__dirname, '../../Resources/empty/empty');
const OUTPUT_FILE = "empty";


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class EmptyLoader
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
            entry: ENTRY_FILE,
            output: {
                path: `${this.kernel.project_dir}${FRAMEWORK_DIST_OUTPUT}`,
                filename: OUTPUT_FILE,
            },
            plugins: BASE_CONFIG.plugins.concat([
                new RemovePlugin({after:{include:[ `${this.kernel.dist_dir}/${OUTPUT_FILE}` ]}}),
            ])
        });
    }
}