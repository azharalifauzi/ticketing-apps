import { Publisher, Subjects, OrderCreatedEvent } from "@aaf-tickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
