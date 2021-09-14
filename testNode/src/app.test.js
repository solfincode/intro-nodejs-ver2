const { getUser } = require("./utils");

test("test get User function", async () => {
  try {
    const user = await getUser(0);
  } catch (e) {
    expect(e).toBeTruthy();
  }
});
