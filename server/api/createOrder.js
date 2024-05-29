import axios from "axios";
import { readBody } from "h3";
import { serializeError } from "serialize-error";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const params = {
    first_name: body.name,
    phone: "+380680000001",
    products: body.products,
    delivery_time: "2024-05-29 17:00:00",
    fiscal_method: body.payment,
    comment: body.comment,
    service_mode: body.service_mode,
  };

  try {
    const response = await axios.post(
      "https://joinposter.com/api/incomingOrders.createIncomingOrder?token=388658:6876523b828df7f6545d67f8363887d5",
      {
        spot_id: 1,
        ...params,
      }
    );

    return {
      message: "Order created successfully!",
      data: response.data,
      info: body.products,
    };
  } catch (error) {
    console.error(serializeError(error));
    return {
      statusCode: 500,
      message: "An error occurred while creating the order",
      error: serializeError(error),
    };
  }
});
