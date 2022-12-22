import {  BigInt,  log,  Address,  Bytes,  ByteArray,} from "@graphprotocol/graph-ts";
import {  SubmitProposal, SponsorProposal, SubmitVote, ProcessProposal, ProcessWhitelistProposal, ProcessGuildKickProposal, Ragequit, TokensCollected, CancelProposal, UpdateDelegateKey, Withdraw
} from "../generated/templates/MolochTemplate/Moloch"

import { SummonComplete} from "../generated/MolochSummoner/MolochSummoner"

import { MolochTemplate } from '../generated/templates'

import {  Moloch,  Member,  Proposal,  Vote,  RageQuit,} from "../generated/schema";

import { createAndAddSummoner} from "./helper";


// SummonComplete(address indexed summoner, address[] tokens, uint256 summoningTime, uint256 periodDuration, uint256 votingPeriodLength, uint256 gracePeriodLength, uint256 proposalDeposit, uint256 dilutionBound, uint256 processingReward);
// handler: handleSummonComplete
export function handleSummonComplete(event: SummonComplete): void {
  MolochTemplate.create(event.params.moloch);
  let molochId = event.params.moloch.toHexString();
  let moloch = new Moloch(molochId);

  let eventSummoners: Address[] = event.params.summoner;
  let summoners: string[] = [];
  let creator: Address = eventSummoners[0];
      moloch.summoner = creator;

  let eventSummonerShares = event.params.summonerShares;
  moloch.totalShares = BigInt.fromI32(0);
  let mTotalShares = moloch.totalShares;
  for (let i = 0; i < eventSummoners.length; i++) {
    let summoner = eventSummoners[i];
    let shares = eventSummonerShares[i];
    mTotalShares = mTotalShares.plus(shares);

    summoners.push(createAndAddSummoner(molochId, summoner, shares, event));

  }  
   
  moloch.totalLoot = BigInt.fromI32(0);
  moloch.totalShares = mTotalShares;
  moloch.save();

}


// SubmitProposal(address indexed applicant, uint256 sharesRequested, uint256 lootRequested, uint256 tributeOffered, address tributeToken, uint256 paymentRequested, address paymentToken, string details, bool[6] flags, uint256 proposalId, address indexed delegateKey, address indexed memberAddress);
// handler: handleSubmitProposal
export function handleSubmitProposal(event: SubmitProposal):void {
  let molochId = event.address.toHexString();
  let newProposalId = molochId.concat("-proposal-").concat(event.params.proposalId.toString());
  let memberId = molochId.concat("-member-").concat(event.params.memberAddress.toHex());

  let proposal = new Proposal(newProposalId);
  proposal.proposalId      = event.params.proposalId;
  proposal.moloch          = molochId;
  proposal.member          = memberId;
  proposal.memberAddress   = event.params.memberAddress;
  proposal.delegateKey     = event.params.delegateKey;
  proposal.yesVotes        = BigInt.fromI32(0);
  proposal.noVotes         = BigInt.fromI32(0);
  proposal.yesShares       = BigInt.fromI32(0);
  proposal.noShares        = BigInt.fromI32(0);
  proposal.maxTotalSharesAndLootAtYesVote = BigInt.fromI32(0);

  proposal.save();
}



// TODO - event SubmitVote(uint256 proposalId, uint256 indexed proposalIndex, address indexed delegateKey, address indexed memberAddress, uint8 uintVote);
// handler: handleSubmitVote
export function handleSubmitVote(event: SubmitVote): void {
  let molochId = event.address.toHexString();
  let memberId = molochId.concat("-member-").concat(event.params.memberAddress.toHex());
  let proposalVotedId = molochId.concat("-proposal-").concat(event.params.proposalId.toString());
  let voteId = memberId.concat("-vote-").concat(event.params.proposalId.toString());

  let vote = new Vote(voteId);
  let member = Member.load(memberId);

  if (member == null) {
    return;
  }


  vote.proposal = proposalVotedId;
  vote.member = memberId;
  vote.memberAddress = event.params.memberAddress;
  vote.molochAddress = event.address;
  vote.uintVote = event.params.uintVote;

  let memberVoteWeight = member.shares;
  vote.memberPower = memberVoteWeight;

  vote.save();

  let moloch = Moloch.load(molochId);
  let proposal = Proposal.load(proposalVotedId);

  if (proposal == null || member == null || moloch == null) {
    return;
  }

  switch (event.params.uintVote) {
    case 1: {
      proposal.yesShares = proposal.yesShares.plus(member.shares);
      proposal.yesVotes = proposal.yesVotes.plus(BigInt.fromI32(1));
      proposal.maxTotalSharesAndLootAtYesVote = moloch.totalLoot.plus(
        moloch.totalShares
      );
      member.highestIndexYesVote = proposalVotedId;
      proposal.save();
      member.save();
      break;
    }
    case 2: {
      proposal.noShares = proposal.noShares.plus(member.shares);
      proposal.noVotes = proposal.noVotes.plus(BigInt.fromI32(1));
      proposal.save();
      break;
    }
    default: {
      log.info(
        "handleSubmitVote: ERROR, SHOULD BE A DEAD END CHECK uintVote INVARIANT IN CONTRACT",
        []
      );
      break;
    }
  }

}

// TODO -   event Ragequit(address indexed memberAddress, uint256 sharesToBurn, uint256 lootToBurn);
// handler: handleRagequit

export function handleRagequit(event: Ragequit): void {
 // let inputData = event.transaction.input.toHexString();
  let targetAddress = event.params.memberAddress.toHex();


  let molochId = event.address.toHexString();
  let moloch = Moloch.load(molochId);

  let memberId = molochId
    .concat("-member-").concat(targetAddress);
  let member = Member.load(memberId);

  if (moloch == null || member == null) {
    return;
  }

 // let sharesAndLootToBurn = event.params.sharesToBurn.plus( event.params.lootToBurn);
 // let initialTotalSharesAndLoot = moloch.totalShares.plus(moloch.totalLoot);

  member.didRagequit = true;
  member.shares = member.shares.minus(event.params.sharesToBurn);
  member.loot = member.loot.minus(event.params.lootToBurn);
  moloch.totalShares = moloch.totalShares.minus(event.params.sharesToBurn);
  moloch.totalLoot = moloch.totalLoot.minus(event.params.lootToBurn);

  member.save();
  moloch.save();

  let rageQuitId = memberId.concat("-").concat("rage-").concat(event.block.number.toString());
  let rageQuit = new RageQuit(rageQuitId);
 // rageQuit.createdAt = event.block.timestamp.toString();
  rageQuit.moloch = molochId;
  rageQuit.molochAddress = event.address;
  rageQuit.member = memberId;

  // rageQuit.memberAddress = ByteArray.fromHexString(targetAddress) as Address;
  let address = changetype<Address>(ByteArray.fromHexString(targetAddress));
  rageQuit.memberAddress = address;

  rageQuit.shares = event.params.sharesToBurn;
  rageQuit.loot = event.params.lootToBurn;

  rageQuit.save();

}

export function handleProcessProposal(event: ProcessProposal): void {}

export function handleSponsorProposal(event: SponsorProposal):void {}

export function handleProcessWhitelistProposal( event: ProcessWhitelistProposal): void {}

export function handleProcessGuildKickProposal( event: ProcessGuildKickProposal): void {}

export function handleTokensCollected(event: TokensCollected): void {}

export function handleCancelProposal(event: CancelProposal): void {}

export function handleUpdateDelegateKey(event: UpdateDelegateKey): void {}

export function handleWithdraw(event: Withdraw): void {}
