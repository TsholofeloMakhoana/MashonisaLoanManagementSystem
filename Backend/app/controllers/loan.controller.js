const db = require("../models");
const Loan = db.loans;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  // Validate request
  if (!req.body.idNumber) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }


  const loan = {
    name: req.body.name,
    surname: req.body.surname,
    idNumber: req.body.idNumber,
    phonenumber: req.body.phonenumber,
    email: req.body.email,
    homeaddress: req.body.homeaddress,
    loantype: req.body.loantype,
    numberofmonth: req.body.numberofmonth,

    amountrequired: req.body.amountrequired,
    reasonforloan: req.body.reasonforloan,
    loanstatus: req.body.loanstatus,
    numberofmonth: req.body.numberofmonth,

    isactive: req.body.published ? req.body.published : true
  };


  Loan.create(loan)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Loan."
      });
    });
};


exports.findAll = (req, res) => {
  const idNumber = req.query.idNumber;
  var condition = idNumber ? { idNumber: { [Op.iLike]: `%${idNumber}%` } } : null;

  Loan.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ola."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Loan.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Loan with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Loan.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Loan was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Loan with id=${id}. Maybe Loan was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Loan with id=" + id
      });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  LOan.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Loan was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Loan with id=${id}. Maybe Loan was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Loan with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Loan.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Loans were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all loans."
      });
    });
};




exports.findAllRejectedLoans = (req, res) => {
  Loan.findAll({ where: { loanstatus: 'rejected' } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving loans."
      });
    });
};

exports.findAllApprovedLoans = (req, res) => {
  Loan.findAll({ where: { loanstatus: 'approved' } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving loans."
      });
    });
};

exports.findAllPendingLoans = (req, res) => {
  Loan.findAll({ where: { loanstatus: 'pending' } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving loans."
      });
    });
};

