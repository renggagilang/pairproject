'use strict';
const fs = require('fs')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync('./data/course.json', 'utf-8'))

    data.forEach(el => {
        el.createdAt = new Date()
        el.updatedAt = new Date()
    })

    return queryInterface.bulkInsert('Courses', data, {})
  },

   down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Courses', null, {})
  }
};
