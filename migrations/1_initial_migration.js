const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

var SupplyChain = artifacts.require("SupplyChain.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

var basicMath = artifacts.require("basicMath.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

var erc20Interface = artifacts.require("erc20Interface.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

var erc20Token = artifacts.require("erc20Token.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};