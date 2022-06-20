const router = require('express').Router();
const apirRoutes = require('./api')

router.use('/api', apirRoutes);

module.exports = router;
