import { describe, test, beforeAll, beforeEach, afterAll, clearStore, assert, logStore, newMockEvent, createMockedFunction, afterEach} from "matchstick-as/assembly/index"
import { handleSummonComplete } from "../src/mappings"
import { Moloch } from "../generated/schema"
import { Bytes, BigInt, Address, ethereum } from "@graphprotocol/graph-ts"
import { SummonComplete } from "../generated/MolochSummoner/MolochSummoner";


test("Should throw an error", () => {
  throw new Error()
}, true)


export function createNewSummonEvent(
  moloch: string, 
  summoner: string, 
  tokens: string, 
  summoningTime: i32,
  periodDuration: i32,
  votingPeriodLength: i32,
  gracePeriodLength: i32,
  proposalDeposit: i32,
  dilutionBound: i32,
  processingReward: i32,
  summonerShares: i32, 
  ):   SummonComplete {
    
  
  let newSummonEvent = changetype<SummonComplete>(newMockEvent())

  newSummonEvent.parameters = new Array();

  let molochParam = new ethereum.EventParam("moloch", ethereum.Value.fromAddress(Address.fromString(moloch)));
  let summonerParam = new ethereum.EventParam("ownerAddress", ethereum.Value.fromAddressArray([Address.fromString(summoner)]));
  let tokensParam = new ethereum.EventParam("tokens", ethereum.Value.fromAddressArray([Address.fromString(tokens)]));
  let summoningTimeParam = new ethereum.EventParam("summoningTime", ethereum.Value.fromI32((summoningTime)));
  let periodDurationParam = new ethereum.EventParam("periodDuration", ethereum.Value.fromI32(periodDuration));
  let votingPeriodLengthParam = new ethereum.EventParam("votingPeriodLength", ethereum.Value.fromI32(votingPeriodLength));
  let gracePeriodLengtParam = new ethereum.EventParam("gracePeriodLength", ethereum.Value.fromI32(gracePeriodLength));
  let proposalDepositParam = new ethereum.EventParam("proposalDeposit", ethereum.Value.fromI32(proposalDeposit));
  let dilutionBoundParam = new ethereum.EventParam("dilutionBound", ethereum.Value.fromI32(dilutionBound));
  let processingRewardParam = new ethereum.EventParam("processingReward", ethereum.Value.fromI32(processingReward));
  let summonerSharesParam = new ethereum.EventParam("tokens", ethereum.Value.fromSignedBigIntArray([BigInt.fromI32(summonerShares)]));


  newSummonEvent.parameters.push(molochParam);
  newSummonEvent.parameters.push(summonerParam);
  newSummonEvent.parameters.push(tokensParam);
  newSummonEvent.parameters.push(summoningTimeParam);
  newSummonEvent.parameters.push(periodDurationParam);
  newSummonEvent.parameters.push(votingPeriodLengthParam);
  newSummonEvent.parameters.push(gracePeriodLengtParam);
  newSummonEvent.parameters.push(proposalDepositParam);
  newSummonEvent.parameters.push(dilutionBoundParam);
  newSummonEvent.parameters.push(processingRewardParam);
  newSummonEvent.parameters.push(summonerSharesParam);

  return newSummonEvent;
}


describe("Mocked Events", () => {
 afterEach(() => {
///clearStore();

  })

  test("Can handle newSummonEvent", () => {
    // Call mappings
    let newSummonEvent = createNewSummonEvent(
      "0x00c9894ec45e1e0c547da44c007b1fa7ead36228", 
      "0x00c9894ec45e1e0c547da44c007b1fa7ead36221", 
      "0x00c9894ec45e1e0c547da44c007b1fa7ead36222",
      1,
      1,
      1,
      1,
      1,
      1,
      1, 
      1,
    )

handleSummonComplete(newSummonEvent)

assert.entityCount("Moloch", 1)
logStore();
  assert.fieldEquals("Moloch", "0x00c9894ec45e1e0c547da44c007b1fa7ead36228","summoner", "0x00c9894ec45e1e0c547da44c007b1fa7ead36221")
  //  assert.fieldEquals("Moloch", "displayName", "Gravatar 0xdead", "https://example.com/image0xdead.png") 
  //  assert.fieldEquals("0xbeef", "displayName", "Gravatar 0xbeef")


  })
})

