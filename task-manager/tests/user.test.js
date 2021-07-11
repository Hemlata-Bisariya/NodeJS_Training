const request = require("supertest");
const app = require("../app");
const User = require("../src/models/user");
const { userOneId , userOne , setupDatabase } = require("./fixtures/db")

beforeEach(setupDatabase);

test("Should signup to new user", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "john",
      email: "lalitabisariya25@gmail.com",
      password: "Abcdef@18",
    })
    .expect(201);

  //Assert that the database was changed correctly
  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

  //Assertion about the response
  expect(response.body).toMatchObject({
    user: {
      name: "john",
      email: "lalitabisariya25@gmail.com",
    },
    token: user.tokens[0].token,
  });
  expect(user.password).not.toBe("Abcdef@18");
});

test("should login existing user", async () => {
  const response = await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);
  const user = await User.findById(userOneId);
  expect(response.body.token).toBe(user.tokens[1].token);
});

test("should not login unexistent user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: "Thisisnotmypass",
    })
    .expect(400);
});

test("should get profile for user", async () => {
  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test("should not get profile for unauthenticated user ", async () => {
  await request(app).get("/users/me").send().expect(401);
});

test("should  delete account for user", async () => {
  await request(app)
    .delete("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  const user = await User.findById(userOneId);
  expect(user).toBeNull();
});

test("should not delete account for unauthenticated user ", async () => {
  await request(app).delete("/users/me").send().expect(401);
});

test("should upload avatar image", async () => {
  await request(app)
    .post("/users/me/avatar")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .attach("avatar", "tests/fixtures/profile-pic.jpg")
    .expect(200);

  const user = await User.findById(userOneId);
  expect(user.avatar).toEqual(expect.any(Buffer));
});

test("should update valid user field", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      name: "Tineshwar",
    })
    .expect(200);

  const user = await User.findById(userOneId);
  expect(user.name).toEqual("Tineshwar");
});

test("should not updates invalid user fields", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      location: "BHOPAL",
    })
    expect(404)
    
  });
