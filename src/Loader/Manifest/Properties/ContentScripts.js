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
const Frames = require('./ContentScripts/Frames');
const Globs = require('./ContentScripts/Globs');
const Matches = require('./ContentScripts/Matches');
const RunTime = require('./ContentScripts/RunTime');
const Scripts = require('./ContentScripts/Scripts');
const Stylecheets = require('./ContentScripts/Stylecheets');


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
            this.properties.push( new Scripts( this.kernel ) );
            this.properties.push( new Stylecheets( this.kernel ) );
            this.properties.push( new Frames( this.kernel ) );
            this.properties.push( new RunTime( this.kernel ) );
            this.properties.push( new Matches( this.kernel ) );
            this.properties.push( new Globs( this.kernel ) );

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