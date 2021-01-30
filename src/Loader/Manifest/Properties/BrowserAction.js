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
const BrowserActionIcons = require('./BrowserActionIcons');
const BrowserActionPopup = require('./BrowserActionPopup');
const BrowserActionTooltip = require('./BrowserActionTooltip');


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
            this.properties.push( new BrowserActionPopup( this.kernel ) );
            this.properties.push( new BrowserActionTooltip( this.kernel ) );
            this.properties.push( new BrowserActionIcons( this.kernel ) );

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