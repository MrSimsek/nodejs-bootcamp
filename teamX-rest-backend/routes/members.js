const express = require("express");
const router = express.Router();

const Member = require("../models/Member");

router.get("/", async (request, response) => {
  const members = await Member.find();
  return response.send(members);
});

router.get("/:id", async (request, response) => {
  const member = await Member.findById(request.params.id);
  return response.send(member);
});

router.post("/", async (request, response) => {
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
