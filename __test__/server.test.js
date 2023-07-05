"use strict"

require('dotenv').config();
const base64 = require('base-64')
const bcrypt = require('bcrypt')
const { server } = require('../src/server');
const supertest = require('supertest');
const req = supertest(server);
const { db } = require('../src/models');

beforeAll(async () => {
    await db.sync();
})

afterAll(async () => {

    await db.drop();
})

describe('testing the server', () => {

})
