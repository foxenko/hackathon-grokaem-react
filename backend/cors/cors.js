const allowedCors = [
    'http://localhost:3000',
    'http://localhost:5000'
  ];
function cors(req, res, next) {
    const { origin } = req.headers;
    if (allowedCors.includes(origin)){
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    }
    
    next()
}
module.exports = {
    cors
}