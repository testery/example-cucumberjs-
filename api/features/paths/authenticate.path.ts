import request from 'supertest';
const assert = require("assert").strict;
const testData = require('../../TestData');

/** URL looks like: `{baseUrl}/authenticate` */
class Authenticate {

    async postCredentails (user: string, pass: string) {
        var _res;
        var payload = {
            "username": user,
            "password": pass
        }
        await request(testData.baseAuthUrl)
            .post('/authenticate')
            .set('Origin', testData.baseAuthUrl)
            .set('Content-Type', 'application/json')
            .send(payload)
            .then(res => {
                _res = res;
            })
            .catch(err => {
                assert.fail("Error: " + err)
            });
        return _res;
    };
    
}

/** URL looks like: `{baseUrl}/authenticate` */
export default new Authenticate();