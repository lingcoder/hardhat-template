/* SPDX-License-Identifier: MIT */
pragma solidity ^0.8.17;

import { IGreeter } from "./interfaces/IGreeter.sol";

contract Greeter is IGreeter {
    string private _name;

    function setName(string calldata name) external virtual override {
        _name = name;
    }

    function getName() public view virtual override returns (string memory) {
        return _name;
    }
}