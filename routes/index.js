const router = require('express').Router();
const apiRoutes = require('./api/authenticate');

// api routes
router.use('/api', apiRoutes);

// one get route

module.exports = router;