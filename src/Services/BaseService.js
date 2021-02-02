'use strict';

module.exports = class BaseService
{

    #base = "Marche pas";

    set set(base)
    {
        this.#base = base;
    }

    get get()
    {
        return this.#base;
    }
}