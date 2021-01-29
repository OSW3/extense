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

// const LOADER_ID = 'empty';

const BASE_CONFIG = require('../../Config/webpack.config');



const ENTRY_FILE = path.resolve(__dirname, '../../Resources/empty/empty');
// const ENTRY_FILE = '../../Resources/empty/empty';
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
            entry: ENTRY_FILE,
            output: {
                // path: `${this.kernel.project_dir}/dist/`,
                path: `/dist/`,
                filename: OUTPUT_FILE,
            },
            plugins: BASE_CONFIG.plugins.concat([
                new RemovePlugin({after:{include:[ `${this.kernel.dist_dir}/${OUTPUT_FILE}` ]}}),
            ])
        });



// module.exports = Object.assign({}, config, {
//     entry: entryFile,
//     output: {
//         path: outputPath,
//         filename: outputFile,
//     },

//     plugins: [
//         new RemovePlugin({after:{include:[ `${outputPath}/${outputFile}` ]}}),
//     ]
// });
    }
}