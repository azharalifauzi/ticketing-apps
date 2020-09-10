import { Subjects, Publisher, OrderCancelledEvent } from "@aaf-tickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
