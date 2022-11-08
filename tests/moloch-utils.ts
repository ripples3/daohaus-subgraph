import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
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

export function createSummonCompleteEvent(
  summoner: Address,
  tokens: Array<Address>,
  summoningTime: BigInt,
  periodDuration: BigInt,
  votingPeriodLength: BigInt,
  gracePeriodLength: BigInt,
  proposalDeposit: BigInt,
  dilutionBound: BigInt,
  processingReward: BigInt
): SummonComplete {
  let summonCompleteEvent = changetype<SummonComplete>(newMockEvent())

  summonCompleteEvent.parameters = new Array()

  summonCompleteEvent.parameters.push(
    new ethereum.EventParam("summoner", ethereum.Value.fromAddress(summoner))
  )
  summonCompleteEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromAddressArray(tokens))
  )
  summonCompleteEvent.parameters.push(
    new ethereum.EventParam(
      "summoningTime",
      ethereum.Value.fromUnsignedBigInt(summoningTime)
    )
  )
  summonCompleteEvent.parameters.push(
    new ethereum.EventParam(
      "periodDuration",
      ethereum.Value.fromUnsignedBigInt(periodDuration)
    )
  )
  summonCompleteEvent.parameters.push(
    new ethereum.EventParam(
      "votingPeriodLength",
      ethereum.Value.fromUnsignedBigInt(votingPeriodLength)
    )
  )
  summonCompleteEvent.parameters.push(
    new ethereum.EventParam(
      "gracePeriodLength",
      ethereum.Value.fromUnsignedBigInt(gracePeriodLength)
    )
  )
  summonCompleteEvent.parameters.push(
    new ethereum.EventParam(
      "proposalDeposit",
      ethereum.Value.fromUnsignedBigInt(proposalDeposit)
    )
  )
  summonCompleteEvent.parameters.push(
    new ethereum.EventParam(
      "dilutionBound",
      ethereum.Value.fromUnsignedBigInt(dilutionBound)
    )
  )
  summonCompleteEvent.parameters.push(
    new ethereum.EventParam(
      "processingReward",
      ethereum.Value.fromUnsignedBigInt(processingReward)
    )
  )

  return summonCompleteEvent
}

export function createSubmitProposalEvent(
  applicant: Address,
  sharesRequested: BigInt,
  lootRequested: BigInt,
  tributeOffered: BigInt,
  tributeToken: Address,
  paymentRequested: BigInt,
  paymentToken: Address,
  details: string,
  flags: Array<boolean>,
  proposalId: BigInt,
  delegateKey: Address,
  memberAddress: Address
): SubmitProposal {
  let submitProposalEvent = changetype<SubmitProposal>(newMockEvent())

  submitProposalEvent.parameters = new Array()

  submitProposalEvent.parameters.push(
    new ethereum.EventParam("applicant", ethereum.Value.fromAddress(applicant))
  )
  submitProposalEvent.parameters.push(
    new ethereum.EventParam(
      "sharesRequested",
      ethereum.Value.fromUnsignedBigInt(sharesRequested)
    )
  )
  submitProposalEvent.parameters.push(
    new ethereum.EventParam(
      "lootRequested",
      ethereum.Value.fromUnsignedBigInt(lootRequested)
    )
  )
  submitProposalEvent.parameters.push(
    new ethereum.EventParam(
      "tributeOffered",
      ethereum.Value.fromUnsignedBigInt(tributeOffered)
    )
  )
  submitProposalEvent.parameters.push(
    new ethereum.EventParam(
      "tributeToken",
      ethereum.Value.fromAddress(tributeToken)
    )
  )
  submitProposalEvent.parameters.push(
    new ethereum.EventParam(
      "paymentRequested",
      ethereum.Value.fromUnsignedBigInt(paymentRequested)
    )
  )
  submitProposalEvent.parameters.push(
    new ethereum.EventParam(
      "paymentToken",
      ethereum.Value.fromAddress(paymentToken)
    )
  )
  submitProposalEvent.parameters.push(
    new ethereum.EventParam("details", ethereum.Value.fromString(details))
  )
  submitProposalEvent.parameters.push(
    new ethereum.EventParam("flags", ethereum.Value.fromBooleanArray(flags))
  )
  submitProposalEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  submitProposalEvent.parameters.push(
    new ethereum.EventParam(
      "delegateKey",
      ethereum.Value.fromAddress(delegateKey)
    )
  )
  submitProposalEvent.parameters.push(
    new ethereum.EventParam(
      "memberAddress",
      ethereum.Value.fromAddress(memberAddress)
    )
  )

  return submitProposalEvent
}

export function createSponsorProposalEvent(
  delegateKey: Address,
  memberAddress: Address,
  proposalId: BigInt,
  proposalIndex: BigInt,
  startingPeriod: BigInt
): SponsorProposal {
  let sponsorProposalEvent = changetype<SponsorProposal>(newMockEvent())

  sponsorProposalEvent.parameters = new Array()

  sponsorProposalEvent.parameters.push(
    new ethereum.EventParam(
      "delegateKey",
      ethereum.Value.fromAddress(delegateKey)
    )
  )
  sponsorProposalEvent.parameters.push(
    new ethereum.EventParam(
      "memberAddress",
      ethereum.Value.fromAddress(memberAddress)
    )
  )
  sponsorProposalEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  sponsorProposalEvent.parameters.push(
    new ethereum.EventParam(
      "proposalIndex",
      ethereum.Value.fromUnsignedBigInt(proposalIndex)
    )
  )
  sponsorProposalEvent.parameters.push(
    new ethereum.EventParam(
      "startingPeriod",
      ethereum.Value.fromUnsignedBigInt(startingPeriod)
    )
  )

  return sponsorProposalEvent
}

export function createSubmitVoteEvent(
  proposalId: BigInt,
  proposalIndex: BigInt,
  delegateKey: Address,
  memberAddress: Address,
  uintVote: i32
): SubmitVote {
  let submitVoteEvent = changetype<SubmitVote>(newMockEvent())

  submitVoteEvent.parameters = new Array()

  submitVoteEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  submitVoteEvent.parameters.push(
    new ethereum.EventParam(
      "proposalIndex",
      ethereum.Value.fromUnsignedBigInt(proposalIndex)
    )
  )
  submitVoteEvent.parameters.push(
    new ethereum.EventParam(
      "delegateKey",
      ethereum.Value.fromAddress(delegateKey)
    )
  )
  submitVoteEvent.parameters.push(
    new ethereum.EventParam(
      "memberAddress",
      ethereum.Value.fromAddress(memberAddress)
    )
  )
  submitVoteEvent.parameters.push(
    new ethereum.EventParam(
      "uintVote",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(uintVote))
    )
  )

  return submitVoteEvent
}

export function createProcessProposalEvent(
  proposalIndex: BigInt,
  proposalId: BigInt,
  didPass: boolean
): ProcessProposal {
  let processProposalEvent = changetype<ProcessProposal>(newMockEvent())

  processProposalEvent.parameters = new Array()

  processProposalEvent.parameters.push(
    new ethereum.EventParam(
      "proposalIndex",
      ethereum.Value.fromUnsignedBigInt(proposalIndex)
    )
  )
  processProposalEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  processProposalEvent.parameters.push(
    new ethereum.EventParam("didPass", ethereum.Value.fromBoolean(didPass))
  )

  return processProposalEvent
}

export function createProcessWhitelistProposalEvent(
  proposalIndex: BigInt,
  proposalId: BigInt,
  didPass: boolean
): ProcessWhitelistProposal {
  let processWhitelistProposalEvent = changetype<ProcessWhitelistProposal>(
    newMockEvent()
  )

  processWhitelistProposalEvent.parameters = new Array()

  processWhitelistProposalEvent.parameters.push(
    new ethereum.EventParam(
      "proposalIndex",
      ethereum.Value.fromUnsignedBigInt(proposalIndex)
    )
  )
  processWhitelistProposalEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  processWhitelistProposalEvent.parameters.push(
    new ethereum.EventParam("didPass", ethereum.Value.fromBoolean(didPass))
  )

  return processWhitelistProposalEvent
}

export function createProcessGuildKickProposalEvent(
  proposalIndex: BigInt,
  proposalId: BigInt,
  didPass: boolean
): ProcessGuildKickProposal {
  let processGuildKickProposalEvent = changetype<ProcessGuildKickProposal>(
    newMockEvent()
  )

  processGuildKickProposalEvent.parameters = new Array()

  processGuildKickProposalEvent.parameters.push(
    new ethereum.EventParam(
      "proposalIndex",
      ethereum.Value.fromUnsignedBigInt(proposalIndex)
    )
  )
  processGuildKickProposalEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  processGuildKickProposalEvent.parameters.push(
    new ethereum.EventParam("didPass", ethereum.Value.fromBoolean(didPass))
  )

  return processGuildKickProposalEvent
}

export function createRagequitEvent(
  memberAddress: Address,
  sharesToBurn: BigInt,
  lootToBurn: BigInt
): Ragequit {
  let ragequitEvent = changetype<Ragequit>(newMockEvent())

  ragequitEvent.parameters = new Array()

  ragequitEvent.parameters.push(
    new ethereum.EventParam(
      "memberAddress",
      ethereum.Value.fromAddress(memberAddress)
    )
  )
  ragequitEvent.parameters.push(
    new ethereum.EventParam(
      "sharesToBurn",
      ethereum.Value.fromUnsignedBigInt(sharesToBurn)
    )
  )
  ragequitEvent.parameters.push(
    new ethereum.EventParam(
      "lootToBurn",
      ethereum.Value.fromUnsignedBigInt(lootToBurn)
    )
  )

  return ragequitEvent
}

export function createTokensCollectedEvent(
  token: Address,
  amountToCollect: BigInt
): TokensCollected {
  let tokensCollectedEvent = changetype<TokensCollected>(newMockEvent())

  tokensCollectedEvent.parameters = new Array()

  tokensCollectedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  tokensCollectedEvent.parameters.push(
    new ethereum.EventParam(
      "amountToCollect",
      ethereum.Value.fromUnsignedBigInt(amountToCollect)
    )
  )

  return tokensCollectedEvent
}

export function createCancelProposalEvent(
  proposalId: BigInt,
  applicantAddress: Address
): CancelProposal {
  let cancelProposalEvent = changetype<CancelProposal>(newMockEvent())

  cancelProposalEvent.parameters = new Array()

  cancelProposalEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  cancelProposalEvent.parameters.push(
    new ethereum.EventParam(
      "applicantAddress",
      ethereum.Value.fromAddress(applicantAddress)
    )
  )

  return cancelProposalEvent
}

export function createUpdateDelegateKeyEvent(
  memberAddress: Address,
  newDelegateKey: Address
): UpdateDelegateKey {
  let updateDelegateKeyEvent = changetype<UpdateDelegateKey>(newMockEvent())

  updateDelegateKeyEvent.parameters = new Array()

  updateDelegateKeyEvent.parameters.push(
    new ethereum.EventParam(
      "memberAddress",
      ethereum.Value.fromAddress(memberAddress)
    )
  )
  updateDelegateKeyEvent.parameters.push(
    new ethereum.EventParam(
      "newDelegateKey",
      ethereum.Value.fromAddress(newDelegateKey)
    )
  )

  return updateDelegateKeyEvent
}

export function createWithdrawEvent(
  memberAddress: Address,
  token: Address,
  amount: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "memberAddress",
      ethereum.Value.fromAddress(memberAddress)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawEvent
}
