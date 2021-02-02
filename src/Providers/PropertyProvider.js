'use strict';

module.exports = class PropertyProvider
{
    /**
     * YAML config data
     */
    config;

    /**
     * Retrieve the Kernel instance
     */
    kernel;

    constructor( parent )
    {
        // Read the YML source
        this.config = parent.config;

        // Kernel instance
        this.kernel = parent.kernel;
    }
}