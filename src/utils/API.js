import axios from "axios";

export const getTrips = async ({ value }) => {
  try {
    const response = axios.get(
      `https://6130d11c8066ca0017fdaa97.mockapi.io/trips?departureStop=${value}`
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const getStops = async () => {
  try {
    const response = axios.get(
      "https://6130d11c8066ca0017fdaa97.mockapi.io/stops"
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const bookTrip = async value => {
  try {
    const response = axios.put(
      `https://6130d11c8066ca0017fdaa97.mockapi.io/book/${value}`,
      value
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
