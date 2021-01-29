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
        try {
            return [
                new ManifestLoader( this ).getConfig()
                // new BackgroundLoader()
            ];
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