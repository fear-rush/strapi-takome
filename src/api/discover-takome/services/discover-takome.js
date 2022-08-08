'use strict';

/**
 * discover-takome service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::discover-takome.discover-takome');
