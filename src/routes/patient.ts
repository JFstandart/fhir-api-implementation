import express from 'express';
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Patient:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - age
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for a patient
 *         name:
 *           type: string
 *           description: The name of the patient
 *         age:
 *           type: integer
 *           description: The age of the patient
 */

router.get('/', (req, res) => {
  
}); 