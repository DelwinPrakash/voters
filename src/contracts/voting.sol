// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract voting{
    mapping(address => bool) public hasVoted;
    mapping(string => uint256) public totalVotes;

    string[] public candidateList;

    constructor(string[] memory _candidateName){
        candidateList = _candidateName;
    }

    function vote(string memory _candidate) public {
        require(!hasVoted[msg.sender], "You already voted!");
        require(isValidCandidate(_candidate), "Not a valid candidate!");
        hasVoted[msg.sender] = true;
        totalVotes[_candidate]++;
    }

    function isValidCandidate(string memory _candidate) public view returns(bool){
        for(uint256 i = 0; i < candidateList.length; i++){
            if(keccak256(abi.encodePacked(candidateList[i])) == keccak256(abi.encodePacked(_candidate))){
                return true;
            }
        }
        return false;
    }
}