const mongoose = require("mongoose");
const itemSpecs = mongoose.model("Shopping");

const getItem = function (req, res) {
  const checkSID = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!checkSID) {
    res.status(400).json({ message: "Invalid ID provided" });
    return;
  }

  itemSpecs.findById(req.params.id).select('item_specification').exec(function (err, data) {
    if (err) {
      res.status(500).json(err.message);
      return;
    }
    if (!data) {
      res.status(404).json({ message: "document not found" });
      return;
    }
    res.status(200).json(data);
  });
};



const addOne = function (req, res) {
  const checkGID = mongoose.Types.ObjectId.isValid(req.params.id);

  if (!checkGID) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }
  if (Object.keys(req.body).length == 0) {
    res.status(400).json({ message: "body data not found" });
    return;
  }

  itemSpecs.findById(req.params.id).exec(function (err, data) {
    if (err) {
      res.status(500).json(err.message);
      return;
    }

    if(!data){
      res.status(404).json({message:'Item Not found'});
      return;
    }

    data.item_specification = { munifacturer: req.body.munifacturer, weight: req.body.weight,color:req.body.color };

    data.save(function (saveErr) {
      if (saveErr) {
        res.status(500).json(saveErr.message);
        return;
      }
      res.status(201).json(data);
    });
  });
};

const updateOne = function (req, res) {
  const checkGID = mongoose.Types.ObjectId.isValid(req.params.id);

  if (!checkGID) {
    res.status(400).json({ message: "Invalid IDs" });
    return;
  }
  if (Object.keys(req.body).length == 0) {
    res.status(400).json({ message: "body data not found" });
    return;
  }

  itemSpecs.findById(req.params.id).exec(function (err, data) {
    if (err) {
      res.status(500).json(err.message);
      return;
    }

   // const publisher = data.publisher.id(req.params.pid);
    const itemSpecs = JSON.stringify(data.item_specification);

    if (itemSpecs === '{}') {
      res.status(404).json({ message: "Publisher Not Found" });
      return;
    }
 
    data.item_specification = {
      munifacturer: req.body.munifacturer,
      weight: req.body.weight,
      color:req.body.color
    };

    data.save(function (saveErr) {
      if (saveErr) {
        res.status(500).json(err.message);
        return;
      }

      res.status(200).json(data);
    });
  });
};

const deleteOne = function (req, res) {
  const checkGID = mongoose.Types.ObjectId.isValid(req.params.id);

  if (!checkGID) {
    res.status(400).json({ message: "Invalid IDs" });
    return;
  }

   itemSpecs.findById(req.params.id).exec(function (err, data) {
    if (err) {
      res.status(500).json(err.message);
      return;
    }

   // const desiredDoc = data.publisher.id(req.params.pid);
    const getItemSpecs = JSON.stringify(data.item_specification);

    if (getItemSpecs === '{}') {
      res.status(404).json({ message: "Specification details Not Found!" });
      return;
    }
    //if publisher exist then set it to null 
    data.item_specification = {};

    data.save(function (deleteErr) {
      if (deleteErr) {
        res.status(500).json(deleteErr.message);
        return;
      }

      res.status(200).json(data);
    });
  });
};

module.exports = {
  getAll: getItem,
  addOne: addOne,
  updateOne: updateOne,
  deleteOne: deleteOne,
};
