const users = [];

const addUser = ({ id, username, room }) => {
  //Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Validate the data
  if (!username || !room) {
    return {
      error: "Username and Room are required!",
    };
  }

  //Check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  // Validate username
  if (existingUser) {
    return {
      error: "Username is in use!",
    };
  }

  // Store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};

const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id;
  });

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

addUser({
  id: 22,
  username: "Hemlata Bisariya",
  room: "hello-User",
});

addUser({
  id: 33,
  username: "Tineshwar Bisariya",
  room: "H&T",
});

addUser({
  id: 44,
  username: "Dimpy Bisariya",
  room: "hello-User",
});

addUser({
  id: 55,
  username: "Jyoti Bisariya",
  room: "H&T",
});

console.log(users);

const user = getUser(33);
console.log(user);

const userList = getUsersInRoom("H&T");
console.log(userList);
