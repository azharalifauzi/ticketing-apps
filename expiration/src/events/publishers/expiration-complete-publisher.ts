import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@aaf-tickets/common";

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
