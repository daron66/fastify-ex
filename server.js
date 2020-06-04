const server = require('fastify')({logger : true});
server.get('/', (req, res) => {
	rep.send({message:"OK"});
});

server.listen(3000);