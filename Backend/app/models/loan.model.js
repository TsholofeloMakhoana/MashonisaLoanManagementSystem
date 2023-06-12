module.exports = (sequelize, Sequelize) => {
  const Loan = sequelize.define("loan", {
    name: {
      type: Sequelize.STRING
    },
    surname: {
      type: Sequelize.STRING
    },
    idNumber: {
      type: Sequelize.STRING
    },
    phonenumber: {
      type: Sequelize.INTEGER
    },
    email: {
      type: Sequelize.STRING
    },
    homeaddress: {
      type: Sequelize.STRING
    },
    loantype: {
      type: Sequelize.STRING
    },
    numberofmonth: {
      type: Sequelize.INTEGER
    },
    amountrequired: {
      type: Sequelize.REAL
    },
    reasonforloan: {
      type: Sequelize.STRING
    },
    loanstatus: {
      type: Sequelize.STRING
    },
    isactive: {
      type: Sequelize.BOOLEAN
    }
  });

  return Loan;
};

//To generate model : ng g class loan --type=model

// generate service : ng g s loan
