'use strict';

const BackgroundScriptsLoader = require('./Loader/BackgroundScripts/BackgroundScriptsLoader');
const CleanLoader = require('./Loader/Clean/CleanLoader');
const ManifestLoader = require('./Loader/Manifest/ManifestLoader');

module.exports = class Kernel
{
    /**
     * Debug Mode
     * 
     * @var bool
     * @default false
     */
    #debug = false;

    /**
     * Loaders Instances storage
     * 
     * @var Array
     */
    loaders = [
        CleanLoader,
        ManifestLoader,
        BackgroundScriptsLoader,
    ];

    /**
     * The absolute project directory
     * 
     * @var string
     */
    project_dir;

    constructor(project_dir)
    {
        if (typeof project_dir === 'undefined')
        {
            this.error = `You need to pass the constant "__dirname" as parameter of the instance of ExtenseFramework.\nEx : new ExtenseFramework(__dirname);`;
        }

        this.project_dir = project_dir;
    }

    /**
     * Set debug mode
     * 
     * @param bool activate
     */
    set debug( activate=false )
    {
        this.#debug = activate;
    }

    /**
     * Get the state of debug mode
     * 
     * @return bool debug state
     */
    get debug()
    {
        return this.#debug;
    }

    /**
     * Console log a message
     */
    log()
    {
        if (this.debug)
        {
            console.log( Array.from(arguments) );
        }
    }

    /**
     * Create new error message
     */
    error( message )
    {
        let outputMessage = `\n\n`;
            outputMessage+= `EXTENSE FRAMEWORK ERROR\n`;
            outputMessage+= `==============================\n\n`;
            outputMessage+= `Message: ${message}\n\n`;
            outputMessage+= `------------------------------\n\n`;
        throw new Error( outputMessage );
    }
}