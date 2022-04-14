# Solidity Primitives

We introduce main solidity concepts and test them on [Remix Compiler](https://remix.ethereum.org).
Examples here come from [Solidity by Example](https://solidity-by-example.org/)

## Data Types

Introduction of some primitive data types available in Solidity:
- ```boolean```
- ```uint```
- ```int```
- ```address```

## Visibility

Functions and state variables have to declare whether they are accessible by other contracts.

Functions can be declared as:
- ```public``` - any contract and account can call
- ```private``` - only inside the contract that defines the function
- ```internal```- only inside contract that inherits an internal function
- ```external``` - only other contracts and accounts can call

State variables can be declared as ```public```, ```private```, or ```internal``` but not ```external```.

## View and Pure functions

Getter functions can be declared ```view``` or ```pure```.

```View``` function declares that no state will be changed.

```Pure``` function declares that no state variable will be changed or read.

## Gas

### How much ether do you need to pay for a transaction?

You pay ```gas spent``` * gas price amount of ether, where
- ```gas``` is a unit of computation
- ```gas spent``` is the total amount of gas used in a transaction
- ```gas price``` is how much ether you are willing to pay per gas
Transactions with higher ```gas price``` have higher priority to be included in a block.

Unspent gas will be refunded.

### Gas Limit

There are 2 upper bounds to the amount of gas you can spend
- ```gas limit``` (max amount of gas you're willing to use for your transaction, set by you)
- ```block gas limit``` (max amount of gas allowed in a block, set by the network)

## Mapping

Maps are created with the syntax ```mapping(keyType => valueType)```.

The ```keyType``` can be any built-in value type, bytes, string, or any contract.

```valueType``` can be any type including another mapping or an array.

Mappings are not iterable.


## Structs

You can define your own type by creating a ```struct```.

They are useful for grouping together related data.

Structs can be declared outside of a contract and imported in another contract.



## Function Modifier

Modifiers are code that can be run before and / or after a function call.

Modifiers can be used to:
- Restrict access
- Validate inputs
- Guard against reentrancy hack


## Events

Events allow logging to the Ethereum blockchain. Some use cases for events are:
- Listening for events and updating user interface
- A cheap form of storage

## Inheritance

Solidity supports multiple inheritance. Contracts can inherit other contract by using the is keyword.

Function that is going to be overridden by a child contract must be declared as ```virtual```.

Function that is going to override a parent function must use the keyword ```override```.

Order of inheritance is important.

You have to list the parent contracts in the order from “most base-like” to “most derived”.

## Payable

Functions and addresses declared ```payable``` can receive ether into the contract.

