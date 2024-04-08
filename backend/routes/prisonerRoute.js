const express = require('express');
const router = express.Router();
const prisonerGuards = require('../prisonerGuards');

router.get('/', prisonerGuards.getAllGuards);

router.get('/:id', prisonerGuards.getGuardById);

router.get('/:id/details', prisonerGuards.getGuardDetails);

router.delete('/:id', prisonerGuards.deleteGuardById);

module.exports = router;
