'use strict';

module.exports = Object.freeze({

    /**
     * The "dist" disrectory
     */
    FRAMEWORK_DIST_DIRECTORY: '/dist/',

    /**
     * The "src" disrectory
     */
    FRAMEWORK_SRC_DIRECTORY: '/src/',

    /**
     * Manifest source file
     */
    MANIFEST_CONFIG_FILE: '/src/config/manifest.yml',
    MANIFEST_OUTPUT_FILE: 'manifest.json',

    /**
     * Config file for "package" section
     * 
     * @var string
     */
    PACKAGE_CONFIG_FILE: '/src/config/package.yml',

    /**
     * Config file for "locales" section
     * 
     * @var string
     */
    LOCALES_CONFIG_FILE: '/src/config/locales.yml',

    DEFAULT_LOCALES_SOURCES_PATH: '/src/translations/',

    /**
     * Config file for "ui" section
     * 
     * @var string
     */
    UI_CONFIG_FILE: '/src/config/ui.yml',

    /**
     * Config file for "permissions" section
     * 
     * @var string
     */
    SECURITY_CONFIG_FILE: '/src/config/security.yml',

    /**
     * Config file for "background" section
     * 
     * @var string
     */
    BACKGROUND_CONFIG_FILE: '/src/config/background.yml',

    /**
     * Config file for "content_scripts" section
     * 
     * @var string
     */
    CONTENT_SCRIPTS_CONFIG_FILE: '/src/config/content.yml',

    /**
     * Config file for "browser_action" section
     * 
     * @var string
     */
    BROWSER_ACTION_CONFIG_FILE: '/src/config/browser_action.yml',

    /**
     * Allowed Manifest minimum version
     * 
     * @var int
     */
    MANIFEST_VERSION_MIN: 2,

    /**
     * Allowed Manifest maximum version
     * 
     * @var int
     */
    MANIFEST_VERSION_MAX: 3,

});