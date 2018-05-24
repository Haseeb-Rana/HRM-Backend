/**
 * Job.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    tableName: 'jobs',
    attributes: {
        title: {
            type: 'string',
            allowNull: false,
            required: true
        },
        short_description: {
            type: 'string'
        },
        long_description: {
            type: 'string'
        },
        number_of_position: {
            type: 'number',
            defaultsTo: 1
        },
        gender: {
            type: 'string'
        },
        closing_date: {
            type: 'ref',
            columnType: 'date',
            //allowNull: false
        },
        is_publish: {
            type: 'boolean',
            defaultsTo: true
        },
        max_experience: {
            type: 'string'
        },
        department: {
            model: 'Department',
            columnName: 'department_id'
        },
        designation: {
            model: 'Designation',
            columnName: 'designation_id'
        },
        job_type_id: {
            model: 'Jobtype'
        },
        company: {
            columnName: "company_id",
            model: 'company'
        },
        created_By: {
            columnName: 'created_by_id',
            model: 'user'
        },
        gender_preferences: {
            type: 'string',
            enum: ['male', 'female', 'no preference']
        },
        applicants_count: {
            type: 'number',
            defaultsTo: 0
        }
    },

};