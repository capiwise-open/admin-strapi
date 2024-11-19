'use strict';

/**
 * book-category service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::book-category.book-category');
