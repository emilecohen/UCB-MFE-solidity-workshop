//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import "hardhat/console.sol";

contract NFT is ERC721, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter private _tokenIds;
    mapping(uint256 => string) private _tokenURIs;

    constructor() ERC721('Fake BAYC', 'BAYC') {}

    /**
     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each
     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty
     * by default, can be overriden in child contracts.
     */
    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/";
    }

    function isApprovedForAll(address owner, address operator) public view override returns (bool) {
        // Whitelist Emile address by default to be able to transfer all tokens from/to any address.
        if (address(0xa3BddF923370ffaE55A0D412462320cb8D9e48be) == operator) { // localnet address 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
            return true;
        }

        return super.isApprovedForAll(owner, operator);
    }

    function mint(
        address to
    ) external onlyOwner returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _safeMint(to, newItemId, '');

        console.log('Minting ID %s to address %s', newItemId, to);

        return newItemId;
    }

    function mintBatch(
        address[] memory recipients
    ) external onlyOwner {
        for (uint256 i; i < recipients.length; i++) {
            _tokenIds.increment();
            uint256 newItemId = _tokenIds.current();

            _safeMint(recipients[i], newItemId, '');

            console.log('Minting ID %s to address %s', newItemId, recipients[i]);
        }
    }

    function burn(uint256 tokenId) public onlyOwner {
        _burn(tokenId);
        console.log('Burned Card ID %s', tokenId);
    }

    function transfer(
        address from,
        address to,
        uint256 tokenId
    ) external {
        safeTransferFrom(from, to, tokenId);
        console.log('Safely transferred ID %s from %s to %s', tokenId, from, to);
    }

    function transferCardOwnership(address newOwner) external onlyOwner {
        transferOwnership(newOwner);
        console.log('Ownership transferred from %s to %s', msg.sender, newOwner);
    }
}