'use strict';
// load the things we need
const utils = require('../../utils/index');
const { getSuccessResponse, getErrorResponse } = require('../../utils/responses');
// Required repos ======================================
const specializationMasterRepo = require('../repository/specialization-master');
/**
 * POST /specializationmaster/add
 */
const add = (req, res) => {
	specializationMasterRepo.save({specializationName: req.body.name})
		.then(result => {
			const response = {status: 201, data: result, message: utils.success.documentCreated}
			res.json(getSuccessResponse(response))
		})
		.catch(err => {
			const response = {status:500, message: utils.errors.genericError, error: err}
			res.json(getErrorResponse(response))
		})
}
/**
 * GET /specializationmaster/list
 */
 const list = (req, res) => {
	specializationMasterRepo.listSpecializationMaster()
		.then(result => {
			const response = {status: 200, data: result}
			res.json(getSuccessResponse(response))
		})
		.catch(err => {
			const response = {status:500, message: utils.errors.genericError, error: err}
			res.json(getErrorResponse(response))
		})
}
module.exports = {
	add: add,
	list: list
}