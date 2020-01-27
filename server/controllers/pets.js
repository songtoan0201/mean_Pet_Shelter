let mongoose = require("mongoose");
let Pet = mongoose.model("Pet");

module.exports = {
  index: function(request, response) {
    Pet.find()
      .then(data => {
        response.json(data);
      })
      .catch(err => {
        response.json(err);
      });
  },

  create: (request, response) => {
    Pet.create({
      name: request.body.name,
      type: request.body.type,
      description: request.body.description,
      skill: request.body.skill
    })
      .then(data => {
        response.json(data);
      })
      .catch(err => {
        response.json(err);
      });
  },

  findOneById: (request, response) => {
    Pet.findOne({ _id: request.params.id })
      .then(data => {
        response.json(data);
      })
      .catch(err => {
        response.json(err);
      });
  },

  update: (request, response) => {
    Pet.updateOne(
      { _id: request.params.id },
      {
        name: request.body.name,
        type: request.body.type,
        description: request.body.description,
        skill: request.body.skill
      },
      {
        runValidators: true,
        context: "query"
      }
    )
      .then(data => {
        response.json(data);
      })
      .catch(err => {
        response.json(err);
      });
  },

  likePet: (request, response) => {
    Pet.findOneAndUpdate(
      { _id: request.params.id },
      {
        $inc: { like: 1 }
      },
      { new: true }
    )
      .then(data => {
        response.json(data);
      })
      .catch(err => {
        response.json(err);
      });
  },

  delete: (request, response) => {
    // find all the children and delete them first
    Pet.deleteOne({ _id: request.params.id })
      .then(deletedPet => {
        response.json(deletedPet);
      })
      .catch(err => {
        response.json(err);
      });
  }
};
