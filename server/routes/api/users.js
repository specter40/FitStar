const express = require('express');
const bycrypt = require('bcryptjs');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const User = require('../../model/User');

//Signup route
userRouter.post('/signup', async (req, res) => {
    try {
        const { email, password, /*confirmPassword,*/ username } = req.body;
        if (!email || !password || !username /*|| !confirmPassword*/) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }
        if (password.length < 6) {
            return res.status(400).json({ msg: 'Password must be at least 6 characters' });
        }
        // if (confirmPassword !== password) {
        //     return res.status(400).json({ msg: 'Passwords do not match' });
        // }
        const existingUser = await User.findOne({ email});
        if (existingUser) {
            return res.status(400).json({ msg: 'An account with this email already exists' });
        }
        const hashedPassword = await bycrypt.hash(password, 8);
        const newUser = new User({
            email,
            password: hashedPassword,
            username
        });
        const savedUser = await newUser.save();
        console.log(savedUser.username);
        res.json(savedUser);



    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


//Login route
userRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: "Please enter all fields" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "User with this email does not exist"});
        }
        const isMatch = await bycrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Incorrect Password" });
        }
        const token = jwt.sign({ id: user._id }, "process.env.JWT_SECRET");
        res.json({
            token,
            user: {
                id: user._id,
                username: user.username
            }
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}); 

//TO CHECK IF TOKEN IS VALID
userRouter.post('/tokenIsValid', async (req, res) => {
    try {
        const token = req.header('Authentication');
        if (!token) return res.json(false);
        const verified = jwt.verify(token, "process.env.JWT_SECRET");
        if (!verified) return res.json(false);
        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
        return res.json(true);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = userRouter;