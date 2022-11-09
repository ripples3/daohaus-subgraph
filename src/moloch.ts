import { BigInt } from "@graphprotocol/graph-ts"
import {
  Moloch,
  SummonComplete,
  SubmitProposal,
  SponsorProposal,
  SubmitVote,
  ProcessProposal,
  ProcessWhitelistProposal,
  ProcessGuildKickProposal,
  Ragequit,
  TokensCollected,
  CancelProposal,
  UpdateDelegateKey,
  Withdraw
} from "../generated/Moloch/Moloch"

import {
  Moloch,
  Member,
  Proposal,
  Vote,
  RageQuit,
} from "../generated/schema";

//legacy daos will trigger this, factory daos get created in factory-mapping.ts
export function handleSummonComplete(event: SummonComplete): void {
  //let molochId = event.address.toHex();
  //let moloch = new Moloch(molochId);
  let moloch = Moloch.load(event.address.toHex());
    //set id of the new moloch to origin contract 

    if(moloch === null){
       moloch = new Moloch(event.address.toHex());
    }

  moloch.summoner = event.params.summoner;
  moloch.createdAt = event.params.summoningTime.toString();
 // moloch.members = event.params.summoningTime.toString();  
//moloch.summoningTime = event.params.summoningTime.toString();

 // moloch.deleted = false;
 // moloch.periodDuration = event.params.periodDuration;
 // moloch.votingPeriodLength = event.params.votingPeriodLength;
 // moloch.gracePeriodLength = event.params.gracePeriodLength;
 // moloch.proposalDeposit = event.params.proposalDeposit;
//moloch.dilutionBound = event.params.dilutionBound;
 // moloch.processingReward = event.params.processingReward;
//  moloch.depositToken = approvedTokens[0];
//  moloch.approvedTokens = approvedTokens;
 // moloch.totalShares = BigInt.fromI32(1);
//  moloch.totalLoot = BigInt.fromI32(0);

  moloch.save();
/*
  let memberId = molochId
    .concat("-member-")
    .concat(event.params.summoner.toHex());
  let newMember = new Member(memberId);
  newMember.moloch = molochId;
  newMember.molochAddress = event.address;
  newMember.memberAddress = event.params.summoner;
  newMember.createdAt = event.block.timestamp.toString();
  newMember.delegateKey = event.params.summoner;
  newMember.shares = BigInt.fromI32(1);
  newMember.loot = BigInt.fromI32(0);
  newMember.exists = true;
  newMember.tokenTribute = BigInt.fromI32(0);
  newMember.didRagequit = false;
  newMember.proposedToKick = false;
  newMember.kicked = false;
  newMember.isDao = Moloch.load(event.params.summoner.toHex())
    ? event.params.summoner.toHexString()
    : null;
  newMember.isSafeMinion = SafeMinion.load(event.params.summoner.toHex())
    ? event.params.summoner.toHexString()
    : null;

  newMember.save();

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    let tokenId = molochId.concat("-token-").concat(token.toHex());
    createMemberTokenBalance(
      molochId,
      event.params.summoner,
      tokenId,
      BigInt.fromI32(0)
    );


  }*/
}


/*
export function handleSummonComplete(event: SummonComplete): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
 // entity.summoner = event.params.summoner
 // entity.tokens = event.params.tokens

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.proposals(...)
  // - contract.processingReward(...)
  // - contract.getMemberProposalVote(...)
  // - contract.getCurrentPeriod(...)
  // - contract.members(...)
  // - contract.submitGuildKickProposal(...)
  // - contract.approvedTokens(...)
  // - contract.TOTAL(...)
  // - contract.totalShares(...)
  // - contract.proposalQueue(...)
  // - contract.proposedToKick(...)
  // - contract.memberAddressByDelegateKey(...)
  // - contract.userTokenBalances(...)
  // - contract.submitProposal(...)
  // - contract.totalLoot(...)
  // - contract.gracePeriodLength(...)
  // - contract.getUserTokenBalance(...)
  // - contract.tokenWhitelist(...)
  // - contract.getTokenCount(...)
  // - contract.getProposalQueueLength(...)
  // - contract.summoningTime(...)
  // - contract.votingPeriodLength(...)
  // - contract.proposalDeposit(...)
  // - contract.hasVotingPeriodExpired(...)
  // - contract.totalGuildBankTokens(...)
  // - contract.canRagequit(...)
  // - contract.dilutionBound(...)
  // - contract.getProposalFlags(...)
  // - contract.memberList(...)
  // - contract.periodDuration(...)
  // - contract.depositToken(...)
  // - contract.proposalCount(...)
  // - contract.proposedToWhitelist(...)
  // - contract.ESCROW(...)
  // - contract.GUILD(...)
  // - contract.submitWhitelistProposal(...)
}
*/
export function handleSubmitProposal(event: SubmitProposal): void {}

export function handleSponsorProposal(event: SponsorProposal): void {}

export function handleSubmitVote(event: SubmitVote): void {}

export function handleProcessProposal(event: ProcessProposal): void {}

export function handleProcessWhitelistProposal(
  event: ProcessWhitelistProposal
): void {}

export function handleProcessGuildKickProposal(
  event: ProcessGuildKickProposal
): void {}

export function handleRagequit(event: Ragequit): void {}

export function handleTokensCollected(event: TokensCollected): void {}

export function handleCancelProposal(event: CancelProposal): void {}

export function handleUpdateDelegateKey(event: UpdateDelegateKey): void {}

export function handleWithdraw(event: Withdraw): void {}
