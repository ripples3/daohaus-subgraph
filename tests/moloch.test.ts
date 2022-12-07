import { describe, test, beforeAll, beforeEach, afterAll, clearStore, assert, logStore, newMockEvent, createMockedFunction, afterEach} from "matchstick-as/assembly/index"
import { handleSummonComplete } from "../src/mappings"
import { Moloch } from "../generated/schema"
import { Bytes, BigInt, Address, ethereum } from "@graphprotocol/graph-ts"
import { SummonComplete } from "../generated/MolochSummoner/MolochSummoner";


//let GRAVATAR_ENTITY_TYPE = "Gravatar"

test("Should throw an error", () => {
  throw new Error()
}, true)


//export function createNewSummonEvent(id: string, displayName: string, imageUrl: string): SummonComplete {
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
  let gracePeriodLengtharam = new ethereum.EventParam("gracePeriodLength", ethereum.Value.fromI32(gracePeriodLength));
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
  newSummonEvent.parameters.push(gracePeriodLengtharam);
  newSummonEvent.parameters.push(proposalDepositParam);
  newSummonEvent.parameters.push(dilutionBoundParam);
  newSummonEvent.parameters.push(processingRewardParam);
  newSummonEvent.parameters.push(summonerSharesParam);

  return newSummonEvent;
}



describe("Mocked Events", () => {
 afterEach(() => {
clearStore();

  })

  test("Can handle newSummonEvent", () => {
    // Call mappings
    let newSummonEvent = createNewSummonEvent(
      "0x00c9894ec45e1e0c547da44c007b1fa7ead36228", 
      "0x00c9894ec45e1e0c547da44c007b1fa7ead36221", 
      "0x00c9894ec45e1e0c547da44c007b1fa7ead36222",
      152,
      2,
      3,
      4,
      5,
      6,
      7, 
      8,
    )

handleSummonComplete(newSummonEvent)

assert.entityCount("Moloch", 1)
//logStore();
  assert.fieldEquals("Moloch", "0x00c9894ec45e1e0c547da44c007b1fa7ead36228","summoner", "0x00c9894ec45e1e0c547da44c007b1fa7ead36221")
  //  assert.fieldEquals("Moloch", "displayName", "Gravatar 0xdead", "https://example.com/image0xdead.png") 
  //  assert.fieldEquals("0xbeef", "displayName", "Gravatar 0xbeef")


  })
})



/*

afterAll(() => {

  describe("Wtest", () => {
    test("it shsdfa with id 0x1", () => {

      let moloch = new Moloch("0x0")
      moloch.summoner = Address.fromString('0x684b8feabc4aa79f5df4db39a7e364d829c8a923')
      //.shares = BigInt.fromI32(3)
      moloch.totalShares = BigInt.fromI32(1)
      moloch.totalLoot = BigInt.fromI32(1)
      moloch.save()
      logStore();
    })
  })


})

describe("When the entity does not exist", () => {
  test("it should create a new Gravatar with id 0x1", () => {
  logStore();
  })
})

describe("When entity already exists", () => {
  test("it should update the Gravatar with id 0x0", () => {
  logStore();
  })
})

*/



/*
export function createNewSummonEvent( molochId: string,  summoner: string, shares:BigInt): SummonComplete {
  let newSummonEvent = changetype<SummonComplete>(newMockEvent())
  
  //newSummonEvent.parameters = new Array()

  let idParam =  Address.fromString('0x0013bb51047920cbe0e17e36077267126d76225b')
  let summonerParam = Address.fromString('0x684b8feabc4aa79f5df4db39a7e364d829c8a923')
  let sharesParam = BigInt.fromI32(3)

  //ethereum.EventParam("id", ethereum.Value.fromAddress(Address.fromString(molochId)))

 // newSummonEvent.parameters.push(idParam)
  //newSummonEvent.parameters.push(summonerParam)
//  newSummonEvent.parameters.push(sharesParam)

return newSummonEvent
}



test("New SummonComplete Event", () => {
  let newSummonEvent = createNewSummonEvent("0x0013bb51047920cbe0e17e36077267126d76225b","0x684b8feabc4aa79f5df4db39a7e364d829c8a923",BigInt.fromI32(3))

  handleSummonComplete(newSummonEvent)

  assert.fieldEquals("SummonComplete","0x0013bb51047920cbe0e17e36077267126d76225b", "shares", "shares")

})
*/

  /*
  member.moloch = molochId;
  member.molochAddress = event.params.moloch;
  member.memberAddress = summoner;
  member.delegateKey = summoner;
  member.shares = shares;
  member.loot = BigInt.fromI32(0);
  member.tokenTribute = BigInt.fromI32(0);
  member.didRagequit = false;
  member.exists = true;

  member.save();

  return memberId;.
  */



/*

describe("Mock contract functions", () => {
  afterAll(() => {
  clearStore()



  })
})




describe("handleSummonComplete", () => {
 beforeEach(()=>{
  let moloch = new Moloch ("0x0013bb51047920cbe0e17e36077267126d76225b")
   moloch.totalShares = BigInt.fromI32(3)
   moloch.totalLoot = BigInt.fromI32(3)
   moloch.summoner = Address.fromString("0x684b8feabc4aa79f5df4db39a7e364d829c8a923")
   moloch.save();
   logStore();
  // clearStore();

  })

  afterAll(() => {
    clearStore()
  })


 test("Moloch created and stored", () => {
  assert.entityCount("Moloch", 1)

  assert.fieldEquals(
    "Moloch",
    "0x0013bb51047920cbe0e17e36077267126d76225b",
    "summoner",
    "0x684b8feabc4aa79f5df4db39a7e364d829c8a923"
  )

})

})

*/


