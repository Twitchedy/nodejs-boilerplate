import NodeCache from 'node-cache'

/**
 * Provide a wrapper for the cache, in case we need to replace the in-memory
 * cache with a better cache technology later.
 */
class CacheService {
    /**
     * Set cache data.
     *
     * @param {String} key
     *     The key to indetify data with.
     *
     * @param {Any} data
     *     The data to store in the cache.
     *
     * @param {Number} ttl
     *     The time in seconds until the cache entry expires.
     */
    set (key, data, ttl) {
        this.constructor.cache.set(key, data, ttl)
    }

    /**
     * Get a cache entry.
     *
     * @param  {String} key
     *     The key to indentify data with.
     *
     * @return {Any}
     *     The data, or undefined if it is not found or expired.
     */
    get (key) {
        return this.constructor.cache.get(key)
    }

    /**
     * Delete a cache entry.
     *
     * @param  {Any} key
     *     The key to indentify data with.
     */
    del (key) {
        this.constructor.cache.del(key)
    }
}

// Static variables suck in JS.
CacheService.cache = new NodeCache()

module.exports = new CacheService()
