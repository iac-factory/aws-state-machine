'use strict';

const app = require('../../index.js');
const chai = require('chai');
const expect = chai.expect;
var event, context;

describe('Queue Lambda Function Unit Test', function () {
    it('Verify Response and Output Type(s)', async () => {
        const result = await app.handler(event, context)

        expect(result).to.be.an('object');
        expect(result.validation).to.be.an('number');
        expect(result.validation).to.be.at.least(0);
        expect(result.validation).to.be.at.most(100);
    });
});
