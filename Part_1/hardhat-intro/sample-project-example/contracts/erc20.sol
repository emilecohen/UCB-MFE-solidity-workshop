// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MFECoin is ERC20 {
    address immutable public owner;

    constructor(string memory _name, string memory _symbol, uint256 supply) ERC20(_name, _symbol) {
        _mint(msg.sender, supply);
        owner = msg.sender;
    }
}
