const mongoose = require("mongoose");
const config = require("./config");

const Image = require("./models/Image");
const User = require("./models/User");

mongoose.connect(config.getDBPath());

const db = mongoose.connection;

db.once('open', async () => {
    try {
        await db.dropCollection('images');
        await db.dropCollection('users');
    } catch (e) {
        console.log("Collections were not present.");
    }
    const [user, admin] = await User.create({
        username: "User",
        password: "123",
        role: "users.js"
    }, {
        username: "admin",
        password: "admin",
        role: "admin"
    });
    await Image.create({
      title: 'Amazing pic',
      photo: 'amazingPic.jpeg',
      author: user._id
    }, {
      title: 'Tiger',
      photo: 'tiger.jpeg',
      author: user._id
    }, {
      title: 'Dragon',
      photo: 'dragon.jpeg',
      author: admin._id
    }, {
      title: 'Anaconda',
      photo: 'anaconda.jpeg',
      author: user._id
    });

    db.close();

});
