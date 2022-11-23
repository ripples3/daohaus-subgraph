import { BigInt, Bytes, Address, log } from "@graphprotocol/graph-ts";
import { Member, Vote, Proposal, RageQuit} from "../generated/schema";
import { SummonComplete} from "../generated/MolochSummoner/MolochSummoner"
//import { MolochT } from '../generated/templates'


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

  member.save();

  return memberId;
}