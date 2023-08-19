import { Session } from "next-auth";
import { SessionStatus } from "./session";

export interface DefaultResponse {
  status: SessionStatus;
  session: Session;
  message: string;
}
