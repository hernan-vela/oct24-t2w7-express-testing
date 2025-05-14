

const {app} = require("../src/server.js");
// const serverCode = require("../src/index.js");
// serverCode.app


const request = require("supertest");

describe("Make sure the server boots up properly", () => {

	test("Hello world route responds with status code 200 and a nice message", async () => {
		let response = await request(app).get("/");

		expect(response.statusCode).toBe(200);
		expect(response.body.message).toBe("Hello, world!");

		/*
			{
				message: "Hello, world!"
			}
		*/

	});

	test("post-test route reflects what we send in as body data", async () => {
		let response = await request(app).post("/post-test").send({
			message:"post-test body test content"
		});

		console.log(Object.keys(response.body))

		expect(response.body.receivedData.message).toBe("post-test body test content");
	});

});