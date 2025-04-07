// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

/**
 * @title IGreeter
 * @dev Interface for the Greeter contract
 */
interface IGreeter {
    /**
     * @dev Sets the name to be greeted
     * @param name Name to be set
     */
    function setName(string calldata name) external;

    /**
     * @dev Gets the name currently being greeted
     * @return Current greeting name
     */
    function getName() external view returns (string memory);
}
