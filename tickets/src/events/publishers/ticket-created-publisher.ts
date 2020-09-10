import { Publisher, Subjects, TicketCreatedEvent } from "@aaf-tickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
