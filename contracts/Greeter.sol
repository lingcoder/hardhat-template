/* SPDX-License-Identifier: MIT */
pragma solidity ^0.8.29;

import { console } from "hardhat/console.sol";
import { IGreeter } from "./interfaces/IGreeter.sol";

contract Greeter is IGreeter {
    string private _name;

    function setName(string calldata name) external virtual override {
        _name = name;
    }

    function getName() public view virtual override returns (string memory) {
        console.log("name=%s", _name);
        return _name;
    }
}
