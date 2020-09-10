import { useState, useEffect } from "react";

const OrderShow = ({ order }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const timeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setMinutes(Math.floor(msLeft / 60 / 1000));
      setSeconds(((msLeft / 1000) % 60).toFixed(0));
    };

    timeLeft();
    const interval = setInterval(timeLeft, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (seconds < 0) {
    return <div>Order Expired</div>;
  }

  return (
    <div>
      {minutes}:{seconds} minutes until order expires
    </div>
  );
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;
