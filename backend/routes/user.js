const express = require("express");
const router = express.Router();
const z = require("zod");
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");
const { User, Account } = require("../db");
const {authMiddleware}=require("../middleware");
const { parse } = require("dotenv");

router.use(express.json())


const signupBody = z.object({
  username: z.string().email(),
  password: z.string().min(8),
  firstName: z.string(),
  lastName: z.string(),
});

const loginBody = z.object({
  username: z.string().email(),
  password: z.string().min(8),
});

const updatedBody = z.object({
  username: z.string().email(),
  password: z.string().min(8),
});

router.post("/signup", async (req, res) => {
  const body = req.body;
  const parsedBody = signupBody.safeParse(body);
  if (!parsedBody.success) {
    return res.status(411).json({
      msg: "Wrong Inputs",
    });
  }
  const existingUser = await User.findOne({
    username: body.username,
  });
  if (existingUser) {
    return res.status(411).json({
      msg: "user already exists",
    });
  }
  const user = await User.create({
    username: body.username,
    password: body.password,
    firstName: body.firstName,
    lastName: body.lastName,
  });
  const userId = user._id;

  await Account.create({
    userId,
    balance:1+Math.random()*10000
  })
  const token = jwt.sign({ userId }, JWT_SECRET);
  return res.json({
    msg: "User created successfully",
    id: token,
  });
});

router.post("/login", async (req, res) => {
  const body = req.body;
  console.log(body)
  const parsedBody = loginBody.safeParse(body);
  if (!parsedBody.success) {
    return res.status(411).json({
      msg: "Wrong Inputs",
    });
  }
  const user = await User.findOne({
    username: body.username,
    password: body.password,
  });
  
  
  if (user) {
    const userId = user._id;
    const token = jwt.sign({ userId }, JWT_SECRET);
    return res.status(200).json({
      msg: "login success",
      token: token,
    });
  }

  return res.status(411).json({
    msg: "error while logging in",
  });
});

router.put("/", authMiddleware, async (req, res) => {
  const body = req.body;
  const parsedBody = updatedBody.safeParse(body);
  if (!parsedBody.success) {
    return res.status(411).json({
      msg: "wrong inputs",
    });
  }
  await User.updateOne({ _id: req.userId }, body);

  res.json({
    msg: "updated successfully",
  });
});

router.get('/bulk',authMiddleware,async(req,res)=>{
    const filter=req.query.filter || "";
   const users=await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })
    res.json({
       users: users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))
    })
})

module.exports=router

