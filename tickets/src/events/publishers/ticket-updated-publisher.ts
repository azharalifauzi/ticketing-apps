import { Publisher, Subjects, TicketUpdatedEvent } from "@aaf-tickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
