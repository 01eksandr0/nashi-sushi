import axios from "axios";
import { readBody } from "h3";
import { serializeError } from "serialize-error";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const params = {
    phone: body.phone,
    name: body.name,
    payment: body.payment,
    delivery_time: "2024-05-28 22:00:00",
    service_mode: body.service_mode,
    comment: body.comment,
    products: body.products,
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
    };
  } catch (error) {
    console.error(serializeError(error));

    // Возвращаем сериализованную ошибку для корректной обработки на клиенте
    return {
      statusCode: 500,
      message: "An error occurred while creating the order",
      error: serializeError(error),
    };
  }
});
