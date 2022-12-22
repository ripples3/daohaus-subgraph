import { describe, test, beforeAll, beforeEach, afterAll, clearStore, assert, logStore, newMockEvent, createMockedFunction, afterEach} from "matchstick-as/assembly/index"
import { handleRagequit } from "../src/mappings"
import { RageQuit } from "../generated/schema"
import { Bytes, BigInt, Address, ethereum } from "@graphprotocol/graph-ts"
import { Ragequit } from "../generated/templates/MolochTemplate/Moloch";


test("Should throw an error", () => {
  throw new Error()
}, true)


export function createnewRagequitEvent(
  memberAddress: string, 
  sharesToBurn: i32, 
  lootToBurn: i32, 
  ):   Ragequit {
    
 
    
 // TODO -   event Ragequit(address indexed memberAddress, uint256 sharesToBurn, uint256 lootToBurn);
  let newRagequitEvent = changetype<Ragequit>(newMockEvent())

  newRagequitEvent.parameters = new Array();

  let memberAddressParam = new ethereum.EventParam("moloch", ethereum.Value.fromAddress(Address.fromString(memberAddress)));
  let sharesToBurnParam = new ethereum.EventParam("sharesToBurn", ethereum.Value.fromI32((sharesToBurn)));
  let lootToBurnParam = new ethereum.EventParam("lootToBurn", ethereum.Value.fromI32((lootToBurn)));


  newRagequitEvent.parameters.push(memberAddressParam);
  newRagequitEvent.parameters.push(sharesToBurnParam);
  newRagequitEvent.parameters.push(lootToBurnParam);


  return newRagequitEvent;
}


describe("Mocked Events", () => {
 afterEach(() => {
clearStore();

  })

  test("Can handle newRagequitEvent", () => {
    // Call mappings
    let newRagequitEvent = createnewRagequitEvent(
      "0x00c9894ec45e1e0c547da44c007b1fa7ead36228", 
      1,
      1,
    )

    handleRagequit(newRagequitEvent)

//assert.entityCount("Ragequit", 1)
logStore();
  //assert.fieldEquals("Ragequit", "0x00c9894ec45e1e0c547da44c007b1fa7ead36228","summoner", "0x00c9894ec45e1e0c547da44c007b1fa7ead36221")
  //  assert.fieldEquals("Moloch", "displayName", "Gravatar 0xdead", "https://example.com/image0xdead.png") 
  //  assert.fieldEquals("0xbeef", "displayName", "Gravatar 0xbeef")

  })
})

