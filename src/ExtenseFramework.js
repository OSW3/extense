'use strict';

const Kernel = require('./Kernel');

module.exports = class ExtenseFramework extends Kernel 
{
    load()
    {
        let kernel = this;
        
        let output = new function()
        {
            // Initialize the output WebPack Config
            let wpc = [];

            kernel.loaders.forEach(item => {

                // Loader item instance
                let loader = new item( kernel );

                // Get the loader config
                let config = loader.getConfig();

                // Push the config to
                wpc.push( config );
            });

            return wpc;
        }

        // Log the output
        this.log( "Webpack Config", output );

        return output;
    }
}

