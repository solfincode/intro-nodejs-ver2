const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const users = [
  { email: "goku@test.com", id: 1, name: "goku", verified: false },
  { email: "second@test.com", id: 2, name: "second", verified: true },
];

const getUser = async (id) => {
  const user = users.filter((u) => u.id === id);
  if (!user) throw new Error("user not existed");
  return user;
};

module.exports = { getUser };
