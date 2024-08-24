import express from 'express';
import {employerGellAllApplications,jobSeekerDeleteApplication,jobseekerGellAllApplications, postApplication} from '../controllers/applicationController.js';
import {isAuthorized} from "../middlewares/auth.js"
const router=express.Router();


router.get("/jobseeker/getall",isAuthorized,jobseekerGellAllApplications);
router.get("/employer/getall",isAuthorized,employerGellAllApplications);
router.delete("/delete/:id",isAuthorized,jobSeekerDeleteApplication);
router.post("/post",isAuthorized,postApplication);
export default router;