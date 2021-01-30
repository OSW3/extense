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

const PersistentProperty = require('./BackgroundScripts/PersistentProperty');
const ScriptsProperty = require('./BackgroundScripts/ScriptsProperty');


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Consts

const PROPERTY_ID = 'background';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class BackgroundScripts extends ManifestConfig
{
    output = Object.assign({});
    properties = [];
    
    getProperty()
    {
        if (null != this.config.app && null != this.config.app.background)
        {
            this.properties.push( new ScriptsProperty( this.kernel ) );
            this.properties.push( new PersistentProperty( this.kernel ) );

            this.getData();

            return {[`${PROPERTY_ID}`]: this.output};
        }
    }

    getData()
    {
        this.properties.forEach(property => {
            this.output = Object.assign(this.output, property.getProperty()) ;
        });
    }
}