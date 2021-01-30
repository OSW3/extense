/**
 * content_scripts Property
 * --
 * Generate the "content_scripts" property of manifest.json
 * https://developer.chrome.com/docs/extensions/mv2/content_scripts/
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
const ContentScriptsFrames = require('./ContentScriptsFrames');
const ContentScriptsGlobs = require('./ContentScriptsGlobs');
const ContentScriptsMatches = require('./ContentScriptsMatches');
const ContentScriptsRunTime = require('./ContentScriptsRunTime');
const ContentScriptsScripts = require('./ContentScriptsScripts');
const ContentScriptsStylecheets = require('./ContentScriptsStylecheets');


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Consts

const PROPERTY_ID = 'content_scripts';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class ContentScripts extends ManifestConfig
{
    output = Object.assign({});
    properties = [];
    
    getProperty()
    {
        if (null != this.config.app && null != this.config.app.content)
        {
            this.properties.push( new ContentScriptsScripts( this.kernel ) );
            this.properties.push( new ContentScriptsStylecheets( this.kernel ) );
            this.properties.push( new ContentScriptsFrames( this.kernel ) );
            this.properties.push( new ContentScriptsRunTime( this.kernel ) );
            this.properties.push( new ContentScriptsMatches( this.kernel ) );
            this.properties.push( new ContentScriptsGlobs( this.kernel ) );

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