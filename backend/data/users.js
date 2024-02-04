import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Rahul Galipelli",
    email: "rahulgalipelli1603@gmail.com",
    password: bcrypt.hashSync("rajkala12", 10),
    isAdmin: false,
  },
  {
    name: "Abhi",
    email: "abhi@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
