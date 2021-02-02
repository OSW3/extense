'use strict';

const yaml = require('yaml-reader');

module.exports = class PropertiesProvider 
{
    /**
     * The object of the "package.yml"
     */
    config;

    /**
     * Kernel Instance
     * 
     * @var Kernel
     */
    kernel;

    /**
     * The YML source of the config file
     * 
     * @var string
     */
    source;

    /**
     * Flag of config file
     * 
     * @var bool False if the YML config file is not found
     */
    hasConfigData = false;

    constructor( kernel, source )
    {
        // retrieve the Kernel instance
        this.kernel = kernel;

        // Build the absolute path of the manifest config file
        this.source = `${this.kernel.project_dir}${source}`;

        try 
        {
            // Read the manifest data of the YML source
            this.config = yaml.read( this.source );
            this.hasConfigData = true;
        } 
        catch(e) {}
    }


    builder()
    {
        let data = {};

        if (this.hasValidConfig)
        {
            this.properties.forEach(item => {
    
                let property = new item( this ).getProperty();
    
                data = Object.assign(data, property) ;
            });
        }

        if (!this.isEmptyData(data) && this.parent)
        {
            data = {[`${this.parent}`]: data};
        }

        return data;
    }

    isEmptyData(data)
    {
        return Object.keys(data).length === 0 && data.constructor === Object
    }
}