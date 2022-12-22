import { describe, test, beforeAll, beforeEach, afterAll, clearStore, assert, logStore, newMockEvent, createMockedFunction, afterEach} from "matchstick-as/assembly/index"
import { handleSubmitProposal } from "../src/mappings"
import { Moloch } from "../generated/schema"
import { Bytes, BigInt, Address, ethereum } from "@graphprotocol/graph-ts"
import { SubmitProposal } from "../generated/templates/MolochTemplate/Moloch";


test("Should throw an error", () => {
  throw new Error()
}, true)


export function createNewSubmitProposalEvent(
  applicant: string, 
  sharesRequested: i32, 
  lootRequested: i32, 
  tributeOffered: i32,
  tributeToken: string,
  paymentRequested: i32,
  paymentToken: i32,
  details: string,
  flags: boolean,
  proposalId: i32,
  delegateKey: string,
  memberAddress: string,
  ):   SubmitProposal {
    
  
  let NewSubmitProposalEvent = changetype<SubmitProposal>(newMockEvent())

  NewSubmitProposalEvent.parameters = new Array();

  let applicantParam = new ethereum.EventParam("applicant", ethereum.Value.fromAddress(Address.fromString(applicant)));
  let sharesRequestedParam = new ethereum.EventParam("sharesRequested", ethereum.Value.fromI32(sharesRequested));
  let lootRequestedParam = new ethereum.EventParam("lootRequested", ethereum.Value.fromI32(lootRequested));
  let tributeOfferedParam = new ethereum.EventParam("tributeOffered", ethereum.Value.fromI32((tributeOffered)));
  let tributeTokenParam = new ethereum.EventParam("tributeToken", ethereum.Value.fromAddress(Address.fromString(tributeToken)));
  let paymentRequestedParam = new ethereum.EventParam("paymentRequested", ethereum.Value.fromI32(paymentRequested));
  let paymentTokenParam = new ethereum.EventParam("paymentToken", ethereum.Value.fromI32(paymentToken));
  let detailsParam = new ethereum.EventParam("details", ethereum.Value.fromAddress(Address.fromString(details)));
  let flagsParam = new ethereum.EventParam("flags", ethereum.Value.fromBooleanArray([(flags)]));
  let proposalIdParam = new ethereum.EventParam("proposalId", ethereum.Value.fromI32(proposalId));
  let delegateKeyParam = new ethereum.EventParam("delegateKey", ethereum.Value.fromAddress(Address.fromString(delegateKey)));
  let memberAddressParam = new ethereum.EventParam("memberAddress", ethereum.Value.fromAddress(Address.fromString(memberAddress)));

  NewSubmitProposalEvent.parameters.push(applicantParam);
  NewSubmitProposalEvent.parameters.push(sharesRequestedParam);
  NewSubmitProposalEvent.parameters.push(lootRequestedParam);
  NewSubmitProposalEvent.parameters.push(tributeOfferedParam);
  NewSubmitProposalEvent.parameters.push(tributeTokenParam);
  NewSubmitProposalEvent.parameters.push(paymentRequestedParam);
  NewSubmitProposalEvent.parameters.push(paymentTokenParam);
  NewSubmitProposalEvent.parameters.push(detailsParam);
  NewSubmitProposalEvent.parameters.push(flagsParam);
  NewSubmitProposalEvent.parameters.push(proposalIdParam);
  NewSubmitProposalEvent.parameters.push(delegateKeyParam);
  NewSubmitProposalEvent.parameters.push(memberAddressParam);

  return NewSubmitProposalEvent;
}


describe("Mocked Events", () => {
 afterEach(() => {
clearStore();

  })

  test("Can handle NewSubmitProposalEvent", () => {
    // Call mappings
    let NewSubmitProposalEvent = createNewSubmitProposalEvent(
      "0x00c9894ec45e1e0c547da44c007b1fa7ead36222", 
      1, 
      1,
      1,
      "0x00c9894ec45e1e0c547da44c007b1fa7ead36222",
      1,
      1,
      "0x00c9894ec45e1e0c547da44c007b1fa7ead36222",
      true,
      1,
      "0x00c9894ec45e1e0c547da44c007b1fa7ead36222",
      "0x00c9894ec45e1e0c547da44c007b1fa7ead36222",          
    )

    handleSubmitProposal(NewSubmitProposalEvent)

//assert.entityCount("Moloch", 1)
//logStore();
//  assert.fieldEquals("Moloch", "0x00c9894ec45e1e0c547da44c007b1fa7ead36228","summoner", "0x00c9894ec45e1e0c547da44c007b1fa7ead36221")
  //  assert.fieldEquals("Moloch", "displayName", "Gravatar 0xdead", "https://example.com/image0xdead.png") 
  //  assert.fieldEquals("0xbeef", "displayName", "Gravatar 0xbeef")


  })
})

