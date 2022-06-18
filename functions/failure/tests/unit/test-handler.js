'use strict';

const app = require('../../index.js');
const chai = require('chai');
const expect = chai.expect;
var event, context;

describe('Failure Lambda Function Unit Test', function () {
    it('Verify Response + Output Shape', async () => {
        event = {
            'validation': 75
        }
        const result = await app.handler(event, context)

        expect(result).to.be.an('object');
        expect(result).to.have.all.keys( "id", "score", "type", "timestamp");
        expect(result.type).to.equal('Failure');
        const value = parseInt(result.score);
        expect(value).to.be.at.least(50);
        expect(value).to.be.at.most(100);
    });
});
