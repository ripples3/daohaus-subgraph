import { describe, test, beforeAll, beforeEach, afterAll, clearStore, assert, logStore, newMockEvent, createMockedFunction, afterEach} from "matchstick-as/assembly/index"
import { handleSubmitVote } from "../src/mappings"
import { Moloch } from "../generated/schema"
import { Bytes, BigInt, Address, ethereum } from "@graphprotocol/graph-ts"
import { SubmitVote } from "../generated/templates/MolochTemplate/Moloch";


test("Should throw an error", () => {
  throw new Error()
}, true)

//        - event: SubmitVote(uint256,indexed uint256,indexed address,indexed address,uint8)

export function createNewSubmitVoteEvent(
  proposalId: i32, 
  proposalIndex: i32, 
  delegateKey: string, 
  memberAddress: string,
  uintVote: i32,
  ):   SubmitVote {
    
  
  let NewSubmitVoteEvent = changetype<SubmitVote>(newMockEvent())

  
  NewSubmitVoteEvent.address = Address.fromString("0x00c9894ec45e1e0c547da44c007b1fa7ead36222")
  NewSubmitVoteEvent.parameters = new Array();

  let proposalIdParam = new ethereum.EventParam("proposalId", ethereum.Value.fromI32(proposalId));
  let proposalIndexParam = new ethereum.EventParam("sharesRequested", ethereum.Value.fromI32(proposalIndex));
  let delegateKeyParam = new ethereum.EventParam("lootRequested", ethereum.Value.fromAddress(Address.fromString(delegateKey)));
  let memberAddressParam = new ethereum.EventParam("tributeOffered", ethereum.Value.fromAddress(Address.fromString(memberAddress)));
  let uintVoteParam = new ethereum.EventParam("tributeToken", ethereum.Value.fromI32(uintVote));

  NewSubmitVoteEvent.parameters.push(proposalIdParam);
  NewSubmitVoteEvent.parameters.push(proposalIndexParam);
  NewSubmitVoteEvent.parameters.push(delegateKeyParam);
  NewSubmitVoteEvent.parameters.push(memberAddressParam);
  NewSubmitVoteEvent.parameters.push(uintVoteParam);


  return NewSubmitVoteEvent;
}


describe("Mocked Events", () => {
 afterEach(() => {
clearStore();

  })

  test("Can handle NewSubmitVoteEvent", () => {
    // Call mappings
    let NewSubmitVoteEvent = createNewSubmitVoteEvent(
      1, 
      1, 
      "0x00c9894ec45e1e0c547da44c007b1fa7ead36222",
      "0x00c9894ec45e1e0c547da44c007b1fa7ead36222",
      1,     
    )

    handleSubmitVote(NewSubmitVoteEvent)

//assert.entityCount("Moloch", 1)
logStore();
//  assert.fieldEquals("Moloch", "0x00c9894ec45e1e0c547da44c007b1fa7ead36228","summoner", "0x00c9894ec45e1e0c547da44c007b1fa7ead36221")
  //  assert.fieldEquals("Moloch", "displayName", "Gravatar 0xdead", "https://example.com/image0xdead.png") 
  //  assert.fieldEquals("0xbeef", "displayName", "Gravatar 0xbeef")


  })
})

