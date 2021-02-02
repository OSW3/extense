'use strict';

const PropertyProvider = require('../../../../Providers/PropertyProvider');
const PROPERTY_ID = 'all_frames';

module.exports = class FramesProperty extends PropertyProvider
{
    getProperty()
    {
        let value = this.config.content.all_frames ? true : false;
        
        return {[`${PROPERTY_ID}`]: value};
    }
}