module exports = function (req, res, next) {
if (req.method === 'OPTIONS') {
  next()
}  
try {
  
} catch (e) {
  res.status(403).json({})
}
}