let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');

// Assertion style
chai.should();

chai.use(chaiHttp);

describe('Tasks API', () => {
    /** Test the GET route */
    describe('GET /api/tasks', () => {
        it('It should GET all the tasks', (done) => {
            chai.request(server)
                .get('/api/tasks')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.be.eq(3); // expect array elements to be only 3
                done();
                });
        });

        // to test a positive fail
        it('It should NOT GET all the tasks', (done) => {
            chai.request(server)
                .get('/api/task')
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });
    });
    
    /** Test the GET By ID route */
    describe('GET /api/tasks/:id', () => {
        it('It should GET a task by ID', (done) => {
            const taskId = 1;
            chai.request(server)
                .get('/api/tasks/' + taskId)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id');
                    response.body.should.have.property('name');
                    response.body.should.have.property('completed');
                    response.body.should.have.property('id').eq(1);
                done();
                });
        });
        
        // to test a positive fail
        it('It should NOT GET a task by ID', (done) => {
            const taskId = 3400;
            chai.request(server)
                .get('/api/tasks/' + taskId)
                .end((err, response) => {
                    response.should.have.status(404);
                    response.text.should.be.eq('The task with the provided ID does not exist');
                done();
                });
        });
    });
    
    /** Test the POST route */
    
    /** Test the PUT route */
    
    /** Test the PATCH route */
    
    /** Test the DELETE route */
});