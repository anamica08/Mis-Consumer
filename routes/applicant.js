const express = require('express');
const router = express.Router();
const applicant = require("../controllers/applicantController");

router.get("/",applicant.getAllApplicantionDetails);

module.exports = router;