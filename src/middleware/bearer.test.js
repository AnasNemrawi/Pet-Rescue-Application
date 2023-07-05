const bearerAuth = require('../middleware/bearer');
const { users } = require('../models');

describe('Bearer Authentication Middleware', () => {
  // Mock the express req/res/next objects
  const req = {
    headers: {
      authorization: 'Bearer valid_token',
    },
  };
  const res = {};
  const next = jest.fn();

  it('should call the next middleware when the token is valid', async () => {
    // Mock the authenticateToken method of the users model
    users.model = {
      authenticateToken: jest.fn().mockResolvedValue({ id: 1, username: 'testuser', token: 'valid_token' }),
    };

    await bearerAuth(req, res, next);

    expect(users.model.authenticateToken).toHaveBeenCalledWith('valid_token');
    expect(req.user).toEqual({ id: 1, username: 'testuser', token: 'valid_token' });
    expect(req.token).toBe('valid_token');
    expect(next).toHaveBeenCalled();
  });

  it('should call the _authError function when the token is invalid', async () => {
    // Mock the authenticateToken method of the users model to throw an error
    users.model = {
      authenticateToken: jest.fn().mockRejectedValue(new Error('Invalid token')),
    };

    await bearerAuth(req, res, next);

    expect(users.model.authenticateToken).toHaveBeenCalledWith('valid_token');
    expect(next).toHaveBeenCalledWith('Invalid Login');
  });
});
