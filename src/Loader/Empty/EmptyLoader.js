'use strict';

const path = require("path");
const RemovePlugin = require('remove-files-webpack-plugin');

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
        let name = LOADER_ID;
        let output_file = OUTPUT_FILE;
        let output_dir = `${FRAMEWORK_DIST_OUTPUT}`;
        let output_path = `${this.kernel.project_dir}${output_dir}`;


        return Object.assign(BASE_CONFIG, {
            name: name,
            entry: ENTRY_FILE,
            output: {
                path: output_path, //`${this.kernel.project_dir}${FRAMEWORK_DIST_OUTPUT}`,
                filename: output_file,
            },
            plugins: BASE_CONFIG.plugins.concat([
                new RemovePlugin({after:{include:[ `${output_path}${output_file}` ]}}),
            ])
        });
    }
}