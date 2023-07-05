const supertest = require('supertest');
const { server } = require('../src/server');

describe('App', () => {
    const handle404 = require('../src/error-handlers/404');


      it('should respond with a 404 status code and error message', () => {
        const req = {};
        const res = {
          status: jest.fn(() => res),
          json: jest.fn(() => res),
        };
        const next = jest.fn();
    
        handle404(req, res, next);
    
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({
          status: 404,
          message: 'Sorry, we could not find what you were looking for',
        });
        expect(next).not.toHaveBeenCalled();
      });

    

      it('should respond with a 500 status code and error message', () => {
        const error = new Error('Internal Server Error');
        const errorHandler = require('../src/error-handlers/500');
        const req = {};
        const res = {
          status: jest.fn(() => res),
          json: jest.fn(() => res),
        };
        const next = jest.fn();
    
        errorHandler(error, req, res, next);
    
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
          status: 500,
          message: 'Internal Server Error',
        });
        expect(next).not.toHaveBeenCalled();
      });

});
