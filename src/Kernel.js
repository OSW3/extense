const { config } = require("webpack");
const BackgroundScriptsLoader = require("./Loader/BackgroundScripts/BackgroundScriptsLoader");
const ManifestLoader = require("./Loader/Manifest/ManifestLoader");

const DIST_DIRECTORY = '/dist/';

module.exports = class Kernel
{
    #project_dir;
    #dist_dir;

    constructor(project_dir)
    {
        this.#project_dir = project_dir;
        this.#dist_dir = `${this.project_dir}${DIST_DIRECTORY}`;
    }

    load()
    {
        let loaders = [
            new ManifestLoader( this ),
            new BackgroundScriptsLoader( this ),
        ];

        try {

            return new function() {
                let webpackConfig = [];

                loaders.forEach(loader => {

                    // console.log(loader);
                    webpackConfig.push( loader.getConfig() );
                });

                return webpackConfig;
            };

        } catch(e) {
            console.error( e.message );
        }
    }

    get project_dir()
    {
        return this.#project_dir;
    }
    get dist_dir()
    {
        return this.#dist_dir;
    }
}