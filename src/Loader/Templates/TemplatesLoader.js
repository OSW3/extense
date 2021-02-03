'use strict';

module.exports = class TemplatesLoader
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

    constructor( kernel )
    {
        // retrieve the Kernel instance
        this.#kernel = kernel;

        // Build the absolute path of the manifest config file
        // let source = `${this.#kernel.project_dir}${CONTENT_SCRIPTS_CONFIG_FILE}`;
    }

    getConfig()
    {
        
    }
}