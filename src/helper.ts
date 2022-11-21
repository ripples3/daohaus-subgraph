import { BigInt, Bytes, Address, log } from "@graphprotocol/graph-ts";
import { Moloch, Member, Vote, Proposal, RageQuit} from "../generated/schema";
import { SummonComplete} from "../generated/MolochSummoner/MolochSummoner"
//import { handleSummonComplete} from "../src/mappings";

// used to create multiple summoners at time of summoning
export function createAndAddSummoner(
  molochId: string,
  summoner: Address,
  shares: BigInt,
  event: SummonComplete
): string {
  let memberId = molochId.concat("-member-").concat(summoner.toHex());
  let member = new Member(memberId);

  member.moloch = molochId;
  member.molochAddress = event.params.moloch;
  member.memberAddress = summoner;
  member.delegateKey = summoner;
  member.shares = shares;
  member.loot = BigInt.fromI32(0);
  member.tokenTribute = BigInt.fromI32(0);
  member.didRagequit = false;
  member.exists = true;

  /*
  //Set summoner summoner balances for approved tokens to zero, is this needed?
  let tokens = event.params.tokens;

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    let tokenId = molochId.concat("-token-").concat(token.toHex());
    createMemberTokenBalance(
      molochId,
      member.memberAddress,
      tokenId,
      BigInt.fromI32(0)
    );
  }
*/
  member.save();

  return memberId;
}