const mongoose = require("mongoose");
const User = mongoose.model("User");

const getAll = function (req, res) {
  let offset = 0;
  let count = 10;

  if (req.query && req.query.offset) offset = parseInt(req.query.offset);
  if (req.query && req.query.count) count = parseInt(req.query.count);

  console.log(`${offset} -- ${count}`);

  User.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, data) {
      if (err) {
        res.status(500).json(err.message);
        return;
      }

      res.status(200).json(data);
    });
};



const addOne = function (req, res) {
  if (Object.keys(req.body).length == 0) {
    res.status(400).json({ message: "Please provide body data" });
    return;
  }

  const data = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender
  };

  User.create(data, function (err, result) {
    if (err) {
      res.status(500).json(err.message);
      return;
    }

    res.status(200).json(result);
  });
};

const deleteOne = function (req, res) {
  const checkSID = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!checkSID) {
    res.status(400).json({ message: "Invalid ID..." });
    return;
  }

  User.findByIdAndDelete(req.params.id).exec(function (err, result) {
    if (err) {
      res.status(500).json(err.message);
      return;
    }

    if (!result) {
      res.status(500).json({ message: "Item not found!" });
      return;
    }
    //result returns the deleted document back
    res.status(200).json({ message: "Document successfully deleted" });
  });
};



module.exports = {
  getAll: getAll,
  addOne: addOne,
  deleteOne: deleteOne
};
