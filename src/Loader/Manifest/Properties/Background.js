/**
 * background Property
 * --
 * Generate the "background" property of manifest.json
 * https://developer.chrome.com/docs/extensions/mv2/background_pages/
 * 
 * @version 1.0
 * @since 1.0
 */

'use strict';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Imports

const ManifestConfig = require('../ManifestConfig');
const BackgroundPersistent = require('./BackgroundPersistent');

const BackgroundScripts = require('./BackgroundScripts');


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Consts

const PROPERTY_ID = 'background';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class Background extends ManifestConfig
{
    output = Object.assign({});
    properties = [];
    
    getProperty()
    {
        if (null != this.config.app && null != this.config.app.background)
        {
            this.properties.push( new BackgroundScripts( this.kernel ) );
            this.properties.push( new BackgroundPersistent( this.kernel ) );

            this.getData();

            return {[`${PROPERTY_ID}`]: this.output};
        }
    }

    getData()
    {
        this.properties.forEach(property => {
            this.output = Object.assign(this.output, property.getProperty()) ;
        });

        return this.manifest;
    }
}