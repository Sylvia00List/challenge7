const { userdata } = require("../models");

const controllerUserdata = {
  index: async (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;
    const offset = page > 1 ? page - 1 * limit : 0;
    const order = [];

    const result = await userdata.findAll({
      offset: offset || 0,
      limit: limit || 10,
      order: order || [],
      include: "user",
    });
    res.json(result);
  },

  show: (req, res) => {
    const id = req.params.id;
    articles.findOne({ where: { id: id } }).then((result) => {
      res.send(result);
    });
  },

  // create: () => {},
  // update: () => {},
  // destroy: () => {},

  insertUserdata(data) {
    return articles
      .create(data)
      .then((result) => {
        return {
          message: "berhasil create userdata",
        };
      })
      .catch((err) => {
        return {
          message: err.message,
        };
      });
  },
  deleteUserdataById(id) {
    return articles
      .destroy({ where: { id } })
      .then(() => {
        return {
          message: "berhasil delete userdata",
        };
      })
      .catch((err) => {
        return {
          message: err.message,
        };
      });
  },
};



module.exports = controllerUserdata;
