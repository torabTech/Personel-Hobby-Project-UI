const mongoose = require("mongoose");
const Shopping = mongoose.model("Shopping");

const getAll = function (req, res) {
  let offset = 0;
  let count = 10;

  if (req.query && req.query.offset) offset = parseInt(req.query.offset);
  if (req.query && req.query.count) count = parseInt(req.query.count);

  console.log(`${offset} -- ${count}`);

  Shopping.find()
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

const getOne = function (req, res) {
  const checkID = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!checkID) {
    res.status(400).json({ message: "invalid ID has been provided" });
    return;
  }

  Shopping.findById(req.params.id).exec(function (err, data) {
    if (err) {
      res.status(500).json(err.message);
      return;
    }

    if (!data) {
      res.status(404).json({ message: "Item Not Found!.." });
      return;
    }
    res.status(200).json(data);
  });
};


const getByName = function (req, res) {
  const val = req.params.value;
  console.log(`reached ${val}`);
 
  Shopping.find({ "item" : { $regex: ".*" + val + ".*", $options: 'i' } }).exec(function (err, data) {
    if (err) {
      res.status(500).json(err.message);
      return;
    }

    if (!data) {
      res.status(404).json({ message: "Item Not Found!.." });
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
    item: req.body.item,
    price: req.body.price,
    stockQty: req.body.stockQty,
    unit: req.body.unit,
    item_specification: {
      munifacturer: req.body.munifacturer,
      weight: req.body.weight,
      color: req.body.color,
      description: req.body.description,
    },
  };

  Shopping.create(data, function (err, result) {
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

  Shopping.findByIdAndDelete(req.params.id).exec(function (err, result) {
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

const updateOne = function (req, res) {
  const checkSID = mongoose.Types.ObjectId.isValid(req.params.id);

  if (!checkSID) {
    res.status(400).json({ message: "Invalid ID..." });
    return;
  }

  if (Object.keys(req.body).length == 0) {
    res.status(400).json({ message: "Body data is required!" });
    return;
  }
  Shopping.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        item: req.body.item,
        price: req.body.price,
        stockQty: req.body.stockQty,
        unit: req.body.unit,
        item_specification: {
          munifacturer: req.body.munifacturer,
          weight: req.body.weight,
          color: req.body.color,
          description: req.body.description,
        },
      },
    },
    function (err, result) {
      if (err) {
        res.status(500).json(err.message);
        return;
      }

      res.status(200).json(result);
    }
  );
};

module.exports = {
  getAll: getAll,
  getOne: getOne,
  addOne: addOne,
  deleteOne: deleteOne,
  updateOne: updateOne,
  getByName : getByName
};
