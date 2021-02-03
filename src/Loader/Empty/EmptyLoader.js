'use strict';

const path = require("path");
const RemovePlugin = require('remove-files-webpack-plugin');

const { FRAMEWORK_DIST_OUTPUT } = require("../../Config/Config");
const LOADER_ID = 'empty';

const { BASE_CONFIG } = require('../../Config/webpack.config');

const ENTRY_FILE = path.resolve(__dirname, '../../Resources/empty/empty');
const OUTPUT_FILE = "empty";

module.exports = class EmptyLoader
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

        // Merge the default loader config with the base config
        this.#loader = Object.assign(this.#loader, BASE_CONFIG);
    }

    getConfig()
    {
        let name = LOADER_ID;
        let input_file = ENTRY_FILE;
        let output_file = OUTPUT_FILE;
        let output_dir = FRAMEWORK_DIST_OUTPUT;
        let output_path = `${this.#kernel.project_dir}${output_dir}`;

        // Loader object for EmptyLoader
        let loader = {
            name: name,
            entry: input_file,
            output: {
                path: output_path,
                filename: output_file,
            },
            plugins: this.#loader.plugins.concat([
                new RemovePlugin({after:{include:[ `${output_path}${output_file}` ]}}),
            ])
        };

        return Object.assign(this.#loader, loader);
    }
}