 'use strict';
// load the things we need
const utils = require('../../utils/index');
const { getSuccessResponse, getErrorResponse} = require('../../utils/responses');
// Required repos ======================================
// Required repos ======================================
const associatesMasterRepo = require('../repository/associates-master');
/**
 * POST /associatemaster/add
 */
const add = (req, res) => {
	// Request Data
	const associateName = req.body.associateName;
	const phone = req.body.phone;
	const address = req.body.address;
	const specializations = req.body.specializations || [];
	const data = {associateName, phone, address, specializations}
	associatesMasterRepo.save(data)
		.then(result => {
			const response = {status: 201, data: result, message: utils.success.documentCreated}
			res.json(getSuccessResponse(response))
		})
		.catch((err) => {
			const response = {status:500, message: utils.errors.genericError, error: err}
			res.json(getErrorResponse(response))
		})
}
/**
 * GET /specializationmaster/list
 */
 const list = (req, res) => {
	associatesMasterRepo.listAssociatesMaster()
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