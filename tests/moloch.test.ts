import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ExampleEntity } from "../generated/schema"
import { SummonComplete } from "../generated/Moloch/Moloch"
import { handleSummonComplete } from "../src/moloch"
import { createSummonCompleteEvent } from "./moloch-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let summoner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokens = [
      Address.fromString("0x0000000000000000000000000000000000000001")
    ]
    let summoningTime = BigInt.fromI32(234)
    let periodDuration = BigInt.fromI32(234)
    let votingPeriodLength = BigInt.fromI32(234)
    let gracePeriodLength = BigInt.fromI32(234)
    let proposalDeposit = BigInt.fromI32(234)
    let dilutionBound = BigInt.fromI32(234)
    let processingReward = BigInt.fromI32(234)
    let newSummonCompleteEvent = createSummonCompleteEvent(
      summoner,
      tokens,
      summoningTime,
      periodDuration,
      votingPeriodLength,
      gracePeriodLength,
      proposalDeposit,
      dilutionBound,
      processingReward
    )
    handleSummonComplete(newSummonCompleteEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ExampleEntity created and stored", () => {
    assert.entityCount("ExampleEntity", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "summoner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "tokens",
      "[0x0000000000000000000000000000000000000001]"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "summoningTime",
      "234"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "periodDuration",
      "234"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "votingPeriodLength",
      "234"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "gracePeriodLength",
      "234"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "proposalDeposit",
      "234"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "dilutionBound",
      "234"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "processingReward",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
