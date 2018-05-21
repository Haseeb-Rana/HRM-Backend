/**
 * DepartmentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var params = { model: Department };
module.exports = {
    create: function(req, res) {
        params.body = {
            name: req.body.name,
            company: req.currentUser.company,
            head_id: req.body.head_id,
            created_by_id: req.currentUser.id,
        };
        DbService.create(req, res, params);
    },

    list: function(req, res) {
        params.condition = {
            company: req.currentUser.company
        };
        DbService.list(req, res, params);
    },

    show: function(req, res) {
        params.condition = {
            id: req.params.id
        };
        DbService.find(req, res, params);
    },

    update: function(req, res) {
        params.body = {
            name: req.body.name,
            head_id: req.body.head_id
        };
        params.condition = {
            created_by_id: req.currentUser.id
        };
        DbService.update(req, res, params);
    },
    delete: function(req, res) {
        params.condition = {
            id: req.params.id,
            company: req.currentUser.company
        };
        DbService.delete(req, res, params)
    }
};