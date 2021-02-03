'use strict';

const yaml = require('yaml-reader');
const EmptyLoader = require('../Empty/EmptyLoader');
const { CONTENT_SCRIPTS_CONFIG_FILE,
        FRAMEWORK_DIST_DIRECTORY,
        FRAMEWORK_SRC_DIRECTORY } = require("../../Config/Config");

const { BASE_CONFIG } = require('../../Config/webpack.config');

const SCRIPTS_LOADER_ID = 'content_scripts';
const STYLES_LOADER_ID = 'content_styles';

module.exports = class ContentScriptsLoader
{
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
        let source = `${this.#kernel.project_dir}${CONTENT_SCRIPTS_CONFIG_FILE}`;

        try 
        {
            // Read the manifest data of the YML source
            this.#config = yaml.read( source );
            this.#hasConfigData = true;
        } 
        catch(e) {}
    }
    
    getConfig()
    {
        // If file "content.yml" is not found
        if (!this.#hasConfigData || null == this.#config.content)
        {
            // Get the base config frome the empty loader
            let baseConfig = new EmptyLoader( this.#kernel ).getConfig();

            // Merge the default loader config with the base config
            loader = Object.assign(loader, baseConfig);

            return this.render(loader);
        }

        return new Array().concat(
            this.scriptsConfig,
            this.stylesConfig,
        );
    }

    render(data)
    {
        this.#kernel.log(`Content Scripts Loader`, data);
        return Object.assign(new Object, BASE_CONFIG, data);
    }

    get scriptsConfig()
    {
        let scripts = new Array;

        // // If file "content.yml" is not found
        // if (!this.#hasConfigData || null == this.#config.content)
        // {
        //     // Get the base config frome the empty loader
        //     let baseConfig = new EmptyLoader( this.#kernel ).getConfig();

        //     // Merge the default loader config with the base config
        //     loader = Object.assign(loader, baseConfig);

        //     return this.render(loader);
        // }

        // Background scripts definition
        let items = this.#config.content.scripts;

        for (let index in items) 
        {
            let loader_id = `${SCRIPTS_LOADER_ID}.${index}`;

            // Single script definition
            let item = items[ index ];

            let entries = item.input;

            if (typeof entries === 'string')
            {
                entries = new Array(entries);
            }

            entries.forEach((entry, index) => {
                entries[index] = `${this.#kernel.project_dir}${FRAMEWORK_SRC_DIRECTORY}${entry}`;
            });

            let loader = Object.assign(new Object, {
                name: loader_id,
                entry: entries,
                output: {
                    path: `${this.#kernel.project_dir}${FRAMEWORK_DIST_DIRECTORY}`,
                    filename: item.output
                },
            });

            this.#kernel.log(`Content Scripts Loader (script)`, loader);

            scripts.push( Object.assign(new Object, BASE_CONFIG, loader) );
            // scripts.push(this.render(loader));
        }

        return scripts;
    }

    get stylesConfig()
    {
        let styles = new Array;

        // // If file "content.yml" is not found
        // if (!this.#hasConfigData || null == this.#config.content)
        // {
        //     // Get the base config frome the empty loader
        //     let baseConfig = new EmptyLoader( this.#kernel ).getConfig();

        //     // Merge the default loader config with the base config
        //     loader = Object.assign(loader, baseConfig);

        //     return this.render(loader);
        // }

        // Content styles definition
        let items = this.#config.content.styles;

        for (let index in items) 
        {
            let loader_id = `${STYLES_LOADER_ID}.${index}`;

            // Single script definition
            let item = items[ index ];

            let entries = item.input;

            if (typeof entries === 'string')
            {
                entries = new Array(entries);
            }

            entries.forEach((entry, index) => {
                entries[index] = `${this.#kernel.project_dir}${FRAMEWORK_SRC_DIRECTORY}${entry}`;
            });


            // TODO: Copy css
            let empty = new EmptyLoader( this.#kernel ).getConfig();
            let loader = Object.assign(new Object, empty, {
                name: loader_id,
                module: Object.assign( empty.module, {
                    rules: [
                        {
                            test: /\.css$/i,
                            use: ["style-loader", "css-loader"],
                        }
                    ]
                    // entry: entries,
                    // test: "test"
                })
            });

            // console.log( loader.module );
            // , {
            //     name: loader_id,
            //     // entry: entries,
            //     // output: {
            //     //     path: `${this.#kernel.project_dir}${FRAMEWORK_DIST_DIRECTORY}`,
            //     //     filename: item.output
            //     // },
            // });

            // styles.push(this.render(loader));


            this.#kernel.log(`Content Scripts Loader (style)`, loader);

            styles.push( Object.assign(new Object, BASE_CONFIG, loader) );
        }

        return styles;
    }

}