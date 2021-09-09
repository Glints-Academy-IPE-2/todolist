const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const privateKey = "null";

module.exports = {
  register: (req, res) => {
    User.findOne({ where: { email: req.body.email } }).then((result) => {
      if (result) {
        return res.status(400).send({message: "the email exists"});
      } else {
        const password = req.body.password;
        bcrypt
          .hash(password, 10)
          .then((hash) => {
            User.create({
              nama: req.body.nama,
              email: req.body.email,
              password: hash,
              telp: req.body.telp,
            })
              .then((result) => {
                return res.status(200).json(result);
              })
              .catch((err) => res.status(400).send(err));
          })
          .catch((err) => res.status(400).send(err));
      }
    });
  },

  login: (req, res) => {
    const email = req.body.email
    User.findOne({ where: { email: email } }).then((result) => {
      if (result) {
        const password = req.body.password;
        bcrypt.compare(password, result.password).then((isMatch) => {
          console.log(password);
          if (isMatch) {
            const payload = {
              id: result.id,
              nama: result.nama,
            };
            const token = jwt.sign(payload, privateKey, {
              expiresIn: "7d",
            });
            return res.status(200).json({ ...payload, token: token });
          } else {
            return res.status(400).send({message: "password incorrect"});
          }
        });
      } else {
        return res.status(400).send({message: "the email does not exist"});
      }
    });
  },

  getData: (req, res) => {
    User.findAll()
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => res.status(400).json(err));
  },

  getDataById: (req, res) => {
    User.findOne({ where: { id: req.params.UserId } })
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => res.status(400).json(err));
  },

  deleteDataById: (req, res) => {
    User.destroy({ where: { id: req.params.UserId } })
      .then((res) => {
        res.json(result);
      })
      .catch((err) => res.status(400).json(err));
  },

  updateDataById: (req, res) => {
    User.update(
      {
        nama: req.body.nama,
        email: req.body.email,
        password: req.body.password,
        telp: req.body.telp,
      },
      { where: { id: req.params.UserId } }
    )
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => res.status(400).json("Failed update data!"));
  },
};
