import axios from "axios";

const HOST = "https://sky-scrapper.p.rapidapi.com/api/v1/flights";

export const fetchAirports = async (query) => {
  try {
    const response = await axios.get(`${HOST}/searchAirport?query=${query}`, {
      headers: {
        "x-rapidapi-key": "93ff4111e2msh93cd028a11f75d8p1b0ad2jsnaf5d1d94904c",
        "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchRoundTripFlights = async (
  originSkyId,
  destinationSkyId,
  originEntityId,
  destinationEntityId,
  date,
  returnDate,
  cabinClass,
  adults,
  children,
  infants
) => {
  try {
    const response = await axios.get(
      `${HOST}/searchFlights?originSkyId=${originSkyId}&destinationSkyId=${destinationSkyId}&originEntityId=${originEntityId}&destinationEntityId=${destinationEntityId}` +
        `&date=${date}&returnDate=${returnDate}&cabinClass=${cabinClass}&adults=${adults}&children=${children}&infants=${infants}&sortBy=best&limit=10&currency=AUD`,
      {
        headers: {
          "x-rapidapi-key":
            "93ff4111e2msh93cd028a11f75d8p1b0ad2jsnaf5d1d94904c",
          "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
};

export const fetchOneWayFlights = async (
  originSkyId,
  destinationSkyId,
  originEntityId,
  destinationEntityId,
  date,
  cabinClass,
  adults,
  children,
  infants
) => {
  try {
    const response = await axios.get(
      `${HOST}/searchFlights?originSkyId=${originSkyId}&destinationSkyId=${destinationSkyId}&originEntityId=${originEntityId}&destinationEntityId=${destinationEntityId}` +
        `&date=${date}&cabinClass=${cabinClass}&adults=${adults}&children=${children}&infants=${infants}&sortBy=best&limit=10&currency=AUD`,
      {
        headers: {
          "x-rapidapi-key":
            "93ff4111e2msh93cd028a11f75d8p1b0ad2jsnaf5d1d94904c",
          "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
