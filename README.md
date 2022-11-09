# daohaus-subgraph

### DAOHaus (Moloch DAO contract) Subgraph Development
This documentation supports the building of the DAOHaus subgraph.

### Tasks
* Share Holder Distribution for each DAO deployed. How many voting shares each DAOmember holds.
* Voter % per Proposal  - How many token holders vote per proposal, or a snapshot average.
* Ragequiter % per DAO


## Smart Contract in the Ecosystem

| Type             | Notes                                                                                                                                                                                   |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contract Address | 0x38064F40B20347d58b326E767791A6f79cdEddCe                                                                                                                                                |
| Start Block      | 11499151                                                                                                                                                                                  |
| Name             | MolochSummoner                                                                                                                                                                            |
| Role             | Moloch DAO v2 with multi-summoner capabilities, plus register function for metadata. Summoner uses EIP-1167 proxy pattern to decrease gas costs significantly w/r to moloch v2 summoning. |



## Events
```
    event SummonComplete(address indexed summoner, address[] tokens, uint256 summoningTime, uint256 periodDuration, uint256 votingPeriodLength, uint256 gracePeriodLength, uint256 proposalDeposit, uint256 dilutionBound, uint256 processingReward
    emitted by function summonMoloch
    
    event SubmitProposal(address indexed applicant, uint256 sharesRequested, uint256 lootRequested, uint256 tributeOffered, address tributeToken, uint256 paymentRequested, address paymentToken, string details, bool[6] flags, uint256 proposalId, address indexed delegateKey, address indexed memberAddress);
    emitted by function _submitProposal
        
    event SponsorProposal(address indexed delegateKey, address indexed memberAddress, uint256 proposalId, uint256 proposalIndex, uint256 startingPeriod
    emitted by function sponsorProposal
    
    event SubmitVote(uint256 proposalId, uint256 indexed proposalIndex, address indexed delegateKey, address indexed memberAddress, uint8 uintVote);
    emitted by function submitVote
    
    event ProcessProposal(uint256 indexed proposalIndex, uint256 indexed proposalId, bool didPass);
    emitted by function processProposal
    
    event ProcessWhitelistProposal(uint256 indexed proposalIndex, uint256 indexed proposalId, bool didPass);
    emitted by function ProcessWhitelistProposal
    
    event ProcessGuildKickProposal(uint256 indexed proposalIndex, uint256 indexed proposalId, bool didPass);
    emitted by function sponsorProposal
    
    event Ragequit(address indexed memberAddress, uint256 sharesToBurn, uint256 lootToBurn);
    emitted by function _ragequit
    
    event TokensCollected(address indexed token, uint256 amountToCollect);
    emitted by function collectTokens
    
    event CancelProposal(uint256 indexed proposalId, address applicantAddress
    emitted by function cancelProposal
    
    event UpdateDelegateKey(address indexed memberAddress, address newDelegateKey);
    emitted by function updateDelegateKey
    
    event Withdraw(address indexed memberAddress, address token, uint256 amount);
    emitted by function _withdrawBalance    
```

## Roles
```
summoner
shaman
member
```

## States to Track
```
Members
shares
loot
totalShares
Proposal
ragequit
```

## Entities
```
Moloch
Member
Vote
Proposal
Ragequit
```
