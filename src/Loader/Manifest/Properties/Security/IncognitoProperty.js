/**
 * Incognito Property
 * --
 * Generate the "incognito" property of manifest.json
 * 
 * @version 1.0
 * @since 1.0
 */
'use strict';

const PropertyProvider = require('../../../../Providers/PropertyProvider');
const PROPERTY_ID = 'incognito';
const ALLOWED_VALUES = ["spanning", "split", "not_allowed"];

module.exports = class IncognitoProperty extends PropertyProvider
{
    getProperty()
    {
        let value = this.config.security.incognito;

        if (null == value)
        {
            value = "spanning"
        }

        if (ALLOWED_VALUES.indexOf(value) < 0)
        {
            this.kernel.error(`Invalid incognito mode value : "${ALLOWED_VALUES.join('", "')}" expected but "${value}" defined.`);
        }

        return {[`${PROPERTY_ID}`]: value};
    }
}