const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require('../src');
const { expect } = chai;
chai.use(chaiHttp);

describe("GET /api/status", () => {
  let api;

  beforeEach(() => {
    api = chai.request(server);
  });

  it("returns 200", done => {
    api.get("/api/status").send()
      .then(res => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it("containes a status: ok message", done => {
    api.get("/api/status").send()
      .then(res => {
        expect(res.body.status).to.equal("ok");
        done();
      });
  });

  it("containes a database: ok message", done => {
    api.get("/api/status").send()
      .then(res => {
        expect(res.body.database).to.equal("ok");
        done();
      });
  });
})
