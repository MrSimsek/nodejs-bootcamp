const express = require("express");
const router = express.Router();

const Member = require("../models/Member");

const { checkAuth } = require("../middleware/auth");
const { checkAdmin } = require("../middleware/admin");

router.get("/", async (request, response) => {
  try {
    const members = await Member.find();
    response.send(members);
  } catch (error) {
    response.status(500).send("Server is not responding!");
  }
});

router.get("/:id", async (request, response) => {
  const member = await Member.findById(request.params.id);
  return response.send(member);
});

router.post("/", [checkAuth, checkAdmin], async (request, response) => {
  const member = new Member(request.body);
  const savedMember = await member.save();
  return response.send(savedMember);
});

router.put("/:id", async (request, response) => {
  const updatedMember = await Member.findByIdAndUpdate(
    request.params.id,
    request.body,
    {
      new: true
    }
  );
  return response.send(updatedMember);
});

router.delete("/:id", async (request, response) => {
  const deletedMember = await Member.findByIdAndRemove(request.params.id);
  return response.send(deletedMember);
});

module.exports = router;
