const ManifestLoader = require("./Loader/Manifest/ManifestLoader");

module.exports = class Kernel
{
    #project_dir;

    constructor(project_dir)
    {
        this.#project_dir = project_dir;
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
}