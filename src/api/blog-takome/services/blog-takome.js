'use strict';

/**
 * blog-takome service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-takome.blog-takome');
