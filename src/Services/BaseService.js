'use strict';

module.exports = class BaseService
{
    #base;

    set set(base)
    {
        this.#base = base;
    }

    get get()
    {
        return this.#base;
    }
}