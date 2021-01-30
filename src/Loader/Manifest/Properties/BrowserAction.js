/**
 * browser_action Property
 * --
 * Generate the "browser_action" property of manifest.json
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
const Icons = require('./BrowserAction/Icons');
const Popup = require('./BrowserAction/Popup');
const Tooltip = require('./BrowserAction/Tooltip');


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Consts

const PROPERTY_ID = 'browser_action';


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Exports

module.exports = class BrowserAction extends ManifestConfig
{
    output = Object.assign({});
    properties = [];
    
    getProperty()
    {
        if (null != this.config.app && null != this.config.app.browser_action)
        {
            this.properties.push( new Popup( this.kernel ) );
            this.properties.push( new Tooltip( this.kernel ) );
            this.properties.push( new Icons( this.kernel ) );

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