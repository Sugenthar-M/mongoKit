# @sugenthar/mongokit

**A Node.js module to simplify MongoDB integration using Mongoose.**  
It provides functions to connect to MongoDB and create models for collections quickly.

---

## Table of Contents

* [Installation](#installation)
* [Concept](#concept)
* [Quick Start](#quick-start)
* [Examples with Explanation](#examples-with-explanation)
* [API](#api)
* [Contributing](#contributing)
* [License](#license)
* [Author](#author)

---

## Installation

Install via npm:

```bash
npm install @sugenthar/mongokit

// Import mongokit
import mongokit from '@sugenthar/mongokit';

async function main() {
  // Connect to MongoDB
  await mongokit.mongoConnect('mongodb://localhost:27017/Client');

  // Create a User model with a simple schema
  const User = mongokit.mongoKit('User', {
    userName: String,
    userPassword: String,
  });

  // ----------------------------
  // CREATE: Add a new user
  const newUser = await User.create({
    userName: 'sugenthar',
    userPassword: 'qwertyuiopp',
  });
  console.log('Created User:', newUser);

  // READ: Find all users
  const allUsers = await User.find();
  console.log('All Users:', allUsers);

  // UPDATE: Update a user's password
  await User.updateOne(
    { userName: 'sugenthar' },
    { userPassword: 'newpassword' }
  );
  console.log('User password updated.');

  // DELETE: Remove the user
  await User.deleteOne({ userName: 'sugenthar' });
  console.log('User deleted.');
}

// Run the example
main().catch(console.error);


