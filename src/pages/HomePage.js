import { AppBar, Box, CircularProgress, Toolbar, Typography } from "@mui/material";
import FlightDetails from "../components/FlightDetails";
import SearchBox from "../components/SearchBox";
import { useState } from "react";
import { formatDate } from "../utils/FormatUtils";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

export default function HomePage() {
  const [flights, setFlights] = useState([]);
  const [searching, setSearching] = useState(false);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <FlightTakeoffIcon fontSize={"10"}/> Flights
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          maxWidth: "100vh",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 3,
        }}
      >
        <SearchBox
          setFlightsSearchResult={(data) => setFlights(data)}
          setSearchingHome={(data) => setSearching(data)}
        ></SearchBox>

        {searching && <CircularProgress sx={{p: 3}}/>}

        {flights.length > 0 && (
          <Typography variant="h4" sx={{ m: 2 }}>
            Departing Flights
          </Typography>
        )}

        {flights.map((flight, index) => (
          <FlightDetails
            id={index}
            logo={flight.legs[0].carriers.marketing[0].logoUrl}
            departure={formatDate(flight.legs[0].departure)}
            arrival={formatDate(flight.legs[0].arrival)}
            name={flight.legs[0].carriers.marketing[0].name}
            duration={
              Math.floor(flight.legs[0].durationInMinutes / 60) +
              " hr " +
              (flight.legs[0].durationInMinutes % 60) +
              " min "
            }
            route={
              flight.legs[0].origin.displayCode +
              " - " +
              flight.legs[0].destination.displayCode
            }
            stops={flight.legs[0].stopCount}
            price={flight.price.formatted}
            segments={flight.legs[0].segments}
          ></FlightDetails>
        ))}

        <Box height={20}></Box>

        {flights.length > 0 && (
          <Typography variant="h4" sx={{ m: 2 }}>
            Returning Flights
          </Typography>
        )}
        {flights.map((flight, index) => (
          <FlightDetails
            id={index}
            logo={flight.legs[1].carriers.marketing[0].logoUrl}
            departure={formatDate(flight.legs[1].departure)}
            arrival={formatDate(flight.legs[1].arrival)}
            name={flight.legs[0].carriers.marketing[0].name}
            duration={
              Math.floor(flight.legs[1].durationInMinutes / 60) +
              " hr " +
              (flight.legs[1].durationInMinutes % 60) +
              " min "
            }
            route={
              flight.legs[1].origin.displayCode +
              " - " +
              flight.legs[1].destination.displayCode
            }
            stops={flight.legs[1].stopCount}
            price={flight.price.formatted}
            segments={flight.legs[1].segments}
          ></FlightDetails>
        ))}
      </Box>
    </div>
  );
}

const flightsMock = [
  {
    id: "13554-2410202005--31697-0-12712-2410202250|12712-2410310920--31697-0-13554-2410312010",
    price: {
      raw: 2201.07,
      formatted: "$2,202",
      pricingOptionId: "EmFfMXGl226q",
    },
    legs: [
      {
        id: "13554-2410202005--31697-0-12712-2410202250",
        origin: {
          id: "LHR",
          entityId: "95565050",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          country: "United Kingdom",
          isHighlighted: false,
        },
        destination: {
          id: "JFK",
          entityId: "95565058",
          name: "New York John F. Kennedy",
          displayCode: "JFK",
          city: "New York",
          country: "United States",
          isHighlighted: false,
        },
        durationInMinutes: 465,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-10-20T20:05:00",
        arrival: "2024-10-20T22:50:00",
        timeDeltaInDays: 0,
        carriers: {
          marketing: [
            {
              id: -31697,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
              name: "Virgin Atlantic",
            },
          ],
          operationType: "fully_operated",
        },
        segments: [
          {
            id: "13554-12712-2410202005-2410202250--31697",
            origin: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            destination: {
              flightPlaceId: "JFK",
              displayCode: "JFK",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York John F. Kennedy",
              type: "Airport",
              country: "United States",
            },
            departure: "2024-10-20T20:05:00",
            arrival: "2024-10-20T22:50:00",
            durationInMinutes: 465,
            flightNumber: "25",
            marketingCarrier: {
              id: -31697,
              name: "Virgin Atlantic",
              alternateId: "VS",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31697,
              name: "Virgin Atlantic",
              alternateId: "VS",
              allianceId: 0,
              displayCode: "",
            },
          },
          {
            id: "13554-12712-2410202005-2410202250--31697",
            origin: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            destination: {
              flightPlaceId: "JFK",
              displayCode: "JFK",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York John F. Kennedy",
              type: "Airport",
              country: "United States",
            },
            departure: "2024-10-20T20:05:00",
            arrival: "2024-10-20T22:50:00",
            durationInMinutes: 465,
            flightNumber: "25",
            marketingCarrier: {
              id: -31697,
              name: "Virgin Atlantic",
              alternateId: "VS",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31697,
              name: "Virgin Atlantic",
              alternateId: "VS",
              allianceId: 0,
              displayCode: "",
            },
          },
        ],
      },
      {
        id: "12712-2410310920--31697-0-13554-2410312010",
        origin: {
          id: "JFK",
          entityId: "95565058",
          name: "New York John F. Kennedy",
          displayCode: "JFK",
          city: "New York",
          country: "United States",
          isHighlighted: false,
        },
        destination: {
          id: "LHR",
          entityId: "95565050",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          country: "United Kingdom",
          isHighlighted: false,
        },
        durationInMinutes: 410,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-10-31T09:20:00",
        arrival: "2024-10-31T20:10:00",
        timeDeltaInDays: 0,
        carriers: {
          marketing: [
            {
              id: -31697,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
              name: "Virgin Atlantic",
            },
          ],
          operationType: "fully_operated",
        },
        segments: [
          {
            id: "12712-13554-2410310920-2410312010--31697",
            origin: {
              flightPlaceId: "JFK",
              displayCode: "JFK",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York John F. Kennedy",
              type: "Airport",
              country: "United States",
            },
            destination: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            departure: "2024-10-31T09:20:00",
            arrival: "2024-10-31T20:10:00",
            durationInMinutes: 410,
            flightNumber: "26",
            marketingCarrier: {
              id: -31697,
              name: "Virgin Atlantic",
              alternateId: "VS",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31697,
              name: "Virgin Atlantic",
              alternateId: "VS",
              allianceId: 0,
              displayCode: "",
            },
          },
        ],
      },
    ],
    isSelfTransfer: false,
    isProtectedSelfTransfer: false,
    farePolicy: {
      isChangeAllowed: false,
      isPartiallyChangeable: false,
      isCancellationAllowed: false,
      isPartiallyRefundable: false,
    },
    eco: { ecoContenderDelta: 14.140738 },
    fareAttributes: {},
    tags: ["cheapest", "shortest"],
    isMashUp: false,
    hasFlexibleOptions: false,
    score: 0.999,
  },
  {
    id: "13554-2410200930--32090-0-11442-2410201240|11442-2410311940--32090-0-13554-2411010655",
    price: {
      raw: 2317.19,
      formatted: "$2,318",
      pricingOptionId: "IexYOZ3iQ6bx",
    },
    legs: [
      {
        id: "13554-2410200930--32090-0-11442-2410201240",
        origin: {
          id: "LHR",
          entityId: "95565050",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          country: "United Kingdom",
          isHighlighted: false,
        },
        destination: {
          id: "EWR",
          entityId: "95565059",
          name: "New York Newark",
          displayCode: "EWR",
          city: "New York",
          country: "United States",
          isHighlighted: false,
        },
        durationInMinutes: 490,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-10-20T09:30:00",
        arrival: "2024-10-20T12:40:00",
        timeDeltaInDays: 0,
        carriers: {
          marketing: [
            {
              id: -32090,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
              name: "Lufthansa",
            },
          ],
          operating: [
            {
              id: -31722,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
              name: "United",
            },
          ],
          operationType: "not_operated",
        },
        segments: [
          {
            id: "13554-11442-2410200930-2410201240--32090",
            origin: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            destination: {
              flightPlaceId: "EWR",
              displayCode: "EWR",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York Newark",
              type: "Airport",
              country: "United States",
            },
            departure: "2024-10-20T09:30:00",
            arrival: "2024-10-20T12:40:00",
            durationInMinutes: 490,
            flightNumber: "7633",
            marketingCarrier: {
              id: -32090,
              name: "Lufthansa",
              alternateId: "LH",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31722,
              name: "United",
              alternateId: "UA",
              allianceId: 0,
              displayCode: "",
            },
          },
        ],
      },
      {
        id: "11442-2410311940--32090-0-13554-2411010655",
        origin: {
          id: "EWR",
          entityId: "95565059",
          name: "New York Newark",
          displayCode: "EWR",
          city: "New York",
          country: "United States",
          isHighlighted: false,
        },
        destination: {
          id: "LHR",
          entityId: "95565050",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          country: "United Kingdom",
          isHighlighted: false,
        },
        durationInMinutes: 435,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-10-31T19:40:00",
        arrival: "2024-11-01T06:55:00",
        timeDeltaInDays: 1,
        carriers: {
          marketing: [
            {
              id: -32090,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
              name: "Lufthansa",
            },
          ],
          operating: [
            {
              id: -31722,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
              name: "United",
            },
          ],
          operationType: "not_operated",
        },
        segments: [
          {
            id: "11442-13554-2410311940-2411010655--32090",
            origin: {
              flightPlaceId: "EWR",
              displayCode: "EWR",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York Newark",
              type: "Airport",
              country: "United States",
            },
            destination: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            departure: "2024-10-31T19:40:00",
            arrival: "2024-11-01T06:55:00",
            durationInMinutes: 435,
            flightNumber: "7626",
            marketingCarrier: {
              id: -32090,
              name: "Lufthansa",
              alternateId: "LH",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31722,
              name: "United",
              alternateId: "UA",
              allianceId: 0,
              displayCode: "",
            },
          },
        ],
      },
    ],
    isSelfTransfer: false,
    isProtectedSelfTransfer: false,
    farePolicy: {
      isChangeAllowed: false,
      isPartiallyChangeable: false,
      isCancellationAllowed: false,
      isPartiallyRefundable: false,
    },
    fareAttributes: {},
    tags: ["second_cheapest", "second_shortest"],
    isMashUp: false,
    hasFlexibleOptions: false,
    score: 0.87775,
  },
  {
    id: "13554-2410202005--32385-0-12712-2410202250|12712-2410310920--32385-0-13554-2410312010",
    price: {
      raw: 2201.07,
      formatted: "$2,202",
      pricingOptionId: "5sYwhVVd6MQB",
    },
    legs: [
      {
        id: "13554-2410202005--32385-0-12712-2410202250",
        origin: {
          id: "LHR",
          entityId: "95565050",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          country: "United Kingdom",
          isHighlighted: false,
        },
        destination: {
          id: "JFK",
          entityId: "95565058",
          name: "New York John F. Kennedy",
          displayCode: "JFK",
          city: "New York",
          country: "United States",
          isHighlighted: false,
        },
        durationInMinutes: 465,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-10-20T20:05:00",
        arrival: "2024-10-20T22:50:00",
        timeDeltaInDays: 0,
        carriers: {
          marketing: [
            {
              id: -32385,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
              name: "Delta",
            },
          ],
          operating: [
            {
              id: -31697,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
              name: "Virgin Atlantic",
            },
          ],
          operationType: "not_operated",
        },
        segments: [
          {
            id: "13554-12712-2410202005-2410202250--32385",
            origin: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            destination: {
              flightPlaceId: "JFK",
              displayCode: "JFK",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York John F. Kennedy",
              type: "Airport",
              country: "United States",
            },
            departure: "2024-10-20T20:05:00",
            arrival: "2024-10-20T22:50:00",
            durationInMinutes: 465,
            flightNumber: "5991",
            marketingCarrier: {
              id: -32385,
              name: "Delta",
              alternateId: "DL",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31697,
              name: "Virgin Atlantic",
              alternateId: "VS",
              allianceId: 0,
              displayCode: "",
            },
          },
        ],
      },
      {
        id: "12712-2410310920--32385-0-13554-2410312010",
        origin: {
          id: "JFK",
          entityId: "95565058",
          name: "New York John F. Kennedy",
          displayCode: "JFK",
          city: "New York",
          country: "United States",
          isHighlighted: false,
        },
        destination: {
          id: "LHR",
          entityId: "95565050",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          country: "United Kingdom",
          isHighlighted: false,
        },
        durationInMinutes: 410,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-10-31T09:20:00",
        arrival: "2024-10-31T20:10:00",
        timeDeltaInDays: 0,
        carriers: {
          marketing: [
            {
              id: -32385,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
              name: "Delta",
            },
          ],
          operating: [
            {
              id: -31697,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
              name: "Virgin Atlantic",
            },
          ],
          operationType: "not_operated",
        },
        segments: [
          {
            id: "12712-13554-2410310920-2410312010--32385",
            origin: {
              flightPlaceId: "JFK",
              displayCode: "JFK",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York John F. Kennedy",
              type: "Airport",
              country: "United States",
            },
            destination: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            departure: "2024-10-31T09:20:00",
            arrival: "2024-10-31T20:10:00",
            durationInMinutes: 410,
            flightNumber: "5996",
            marketingCarrier: {
              id: -32385,
              name: "Delta",
              alternateId: "DL",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31697,
              name: "Virgin Atlantic",
              alternateId: "VS",
              allianceId: 0,
              displayCode: "",
            },
          },
        ],
      },
    ],
    isSelfTransfer: false,
    isProtectedSelfTransfer: false,
    farePolicy: {
      isChangeAllowed: false,
      isPartiallyChangeable: false,
      isCancellationAllowed: false,
      isPartiallyRefundable: false,
    },
    eco: { ecoContenderDelta: 14.140738 },
    fareAttributes: {},
    tags: ["cheapest", "shortest"],
    isMashUp: false,
    hasFlexibleOptions: false,
    score: 0.809207,
  },
  {
    id: "13554-2410200930--32090-0-11442-2410201240|11442-2410312110--32090-0-13554-2411010825",
    price: {
      raw: 2317.19,
      formatted: "$2,318",
      pricingOptionId: "93Ni1JXHXFCC",
    },
    legs: [
      {
        id: "13554-2410200930--32090-0-11442-2410201240",
        origin: {
          id: "LHR",
          entityId: "95565050",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          country: "United Kingdom",
          isHighlighted: false,
        },
        destination: {
          id: "EWR",
          entityId: "95565059",
          name: "New York Newark",
          displayCode: "EWR",
          city: "New York",
          country: "United States",
          isHighlighted: false,
        },
        durationInMinutes: 490,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-10-20T09:30:00",
        arrival: "2024-10-20T12:40:00",
        timeDeltaInDays: 0,
        carriers: {
          marketing: [
            {
              id: -32090,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
              name: "Lufthansa",
            },
          ],
          operating: [
            {
              id: -31722,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
              name: "United",
            },
          ],
          operationType: "not_operated",
        },
        segments: [
          {
            id: "13554-11442-2410200930-2410201240--32090",
            origin: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            destination: {
              flightPlaceId: "EWR",
              displayCode: "EWR",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York Newark",
              type: "Airport",
              country: "United States",
            },
            departure: "2024-10-20T09:30:00",
            arrival: "2024-10-20T12:40:00",
            durationInMinutes: 490,
            flightNumber: "7633",
            marketingCarrier: {
              id: -32090,
              name: "Lufthansa",
              alternateId: "LH",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31722,
              name: "United",
              alternateId: "UA",
              allianceId: 0,
              displayCode: "",
            },
          },
        ],
      },
      {
        id: "11442-2410312110--32090-0-13554-2411010825",
        origin: {
          id: "EWR",
          entityId: "95565059",
          name: "New York Newark",
          displayCode: "EWR",
          city: "New York",
          country: "United States",
          isHighlighted: false,
        },
        destination: {
          id: "LHR",
          entityId: "95565050",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          country: "United Kingdom",
          isHighlighted: false,
        },
        durationInMinutes: 435,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-10-31T21:10:00",
        arrival: "2024-11-01T08:25:00",
        timeDeltaInDays: 1,
        carriers: {
          marketing: [
            {
              id: -32090,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
              name: "Lufthansa",
            },
          ],
          operating: [
            {
              id: -31722,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
              name: "United",
            },
          ],
          operationType: "not_operated",
        },
        segments: [
          {
            id: "11442-13554-2410312110-2411010825--32090",
            origin: {
              flightPlaceId: "EWR",
              displayCode: "EWR",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York Newark",
              type: "Airport",
              country: "United States",
            },
            destination: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            departure: "2024-10-31T21:10:00",
            arrival: "2024-11-01T08:25:00",
            durationInMinutes: 435,
            flightNumber: "7632",
            marketingCarrier: {
              id: -32090,
              name: "Lufthansa",
              alternateId: "LH",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31722,
              name: "United",
              alternateId: "UA",
              allianceId: 0,
              displayCode: "",
            },
          },
        ],
      },
    ],
    isSelfTransfer: false,
    isProtectedSelfTransfer: false,
    farePolicy: {
      isChangeAllowed: false,
      isPartiallyChangeable: false,
      isCancellationAllowed: false,
      isPartiallyRefundable: false,
    },
    fareAttributes: {},
    tags: ["second_cheapest", "second_shortest"],
    isMashUp: false,
    hasFlexibleOptions: false,
    score: 0.74383,
  },
  {
    id: "13554-2410200800--32090-0-11442-2410201110|11442-2410311940--32090-0-13554-2411010655",
    price: {
      raw: 2317.19,
      formatted: "$2,318",
      pricingOptionId: "2ekuFobJ87gx",
    },
    legs: [
      {
        id: "13554-2410200800--32090-0-11442-2410201110",
        origin: {
          id: "LHR",
          entityId: "95565050",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          country: "United Kingdom",
          isHighlighted: false,
        },
        destination: {
          id: "EWR",
          entityId: "95565059",
          name: "New York Newark",
          displayCode: "EWR",
          city: "New York",
          country: "United States",
          isHighlighted: false,
        },
        durationInMinutes: 490,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-10-20T08:00:00",
        arrival: "2024-10-20T11:10:00",
        timeDeltaInDays: 0,
        carriers: {
          marketing: [
            {
              id: -32090,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
              name: "Lufthansa",
            },
          ],
          operating: [
            {
              id: -31722,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
              name: "United",
            },
          ],
          operationType: "not_operated",
        },
        segments: [
          {
            id: "13554-11442-2410200800-2410201110--32090",
            origin: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            destination: {
              flightPlaceId: "EWR",
              displayCode: "EWR",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York Newark",
              type: "Airport",
              country: "United States",
            },
            departure: "2024-10-20T08:00:00",
            arrival: "2024-10-20T11:10:00",
            durationInMinutes: 490,
            flightNumber: "7753",
            marketingCarrier: {
              id: -32090,
              name: "Lufthansa",
              alternateId: "LH",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31722,
              name: "United",
              alternateId: "UA",
              allianceId: 0,
              displayCode: "",
            },
          },
        ],
      },
      {
        id: "11442-2410311940--32090-0-13554-2411010655",
        origin: {
          id: "EWR",
          entityId: "95565059",
          name: "New York Newark",
          displayCode: "EWR",
          city: "New York",
          country: "United States",
          isHighlighted: false,
        },
        destination: {
          id: "LHR",
          entityId: "95565050",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          country: "United Kingdom",
          isHighlighted: false,
        },
        durationInMinutes: 435,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-10-31T19:40:00",
        arrival: "2024-11-01T06:55:00",
        timeDeltaInDays: 1,
        carriers: {
          marketing: [
            {
              id: -32090,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
              name: "Lufthansa",
            },
          ],
          operating: [
            {
              id: -31722,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
              name: "United",
            },
          ],
          operationType: "not_operated",
        },
        segments: [
          {
            id: "11442-13554-2410311940-2411010655--32090",
            origin: {
              flightPlaceId: "EWR",
              displayCode: "EWR",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York Newark",
              type: "Airport",
              country: "United States",
            },
            destination: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            departure: "2024-10-31T19:40:00",
            arrival: "2024-11-01T06:55:00",
            durationInMinutes: 435,
            flightNumber: "7626",
            marketingCarrier: {
              id: -32090,
              name: "Lufthansa",
              alternateId: "LH",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31722,
              name: "United",
              alternateId: "UA",
              allianceId: 0,
              displayCode: "",
            },
          },
        ],
      },
    ],
    isSelfTransfer: false,
    isProtectedSelfTransfer: false,
    farePolicy: {
      isChangeAllowed: false,
      isPartiallyChangeable: false,
      isCancellationAllowed: false,
      isPartiallyRefundable: false,
    },
    fareAttributes: {},
    tags: ["second_cheapest", "second_shortest"],
    isMashUp: false,
    hasFlexibleOptions: false,
    score: 0.741189,
  },
  {
    id: "13554-2410200800--32090-0-11442-2410201110|11442-2410312110--32090-0-13554-2411010825",
    price: {
      raw: 2317.19,
      formatted: "$2,318",
      pricingOptionId: "5lKqYFiImNkS",
    },
    legs: [
      {
        id: "13554-2410200800--32090-0-11442-2410201110",
        origin: {
          id: "LHR",
          entityId: "95565050",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          country: "United Kingdom",
          isHighlighted: false,
        },
        destination: {
          id: "EWR",
          entityId: "95565059",
          name: "New York Newark",
          displayCode: "EWR",
          city: "New York",
          country: "United States",
          isHighlighted: false,
        },
        durationInMinutes: 490,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-10-20T08:00:00",
        arrival: "2024-10-20T11:10:00",
        timeDeltaInDays: 0,
        carriers: {
          marketing: [
            {
              id: -32090,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
              name: "Lufthansa",
            },
          ],
          operating: [
            {
              id: -31722,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
              name: "United",
            },
          ],
          operationType: "not_operated",
        },
        segments: [
          {
            id: "13554-11442-2410200800-2410201110--32090",
            origin: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            destination: {
              flightPlaceId: "EWR",
              displayCode: "EWR",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York Newark",
              type: "Airport",
              country: "United States",
            },
            departure: "2024-10-20T08:00:00",
            arrival: "2024-10-20T11:10:00",
            durationInMinutes: 490,
            flightNumber: "7753",
            marketingCarrier: {
              id: -32090,
              name: "Lufthansa",
              alternateId: "LH",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31722,
              name: "United",
              alternateId: "UA",
              allianceId: 0,
              displayCode: "",
            },
          },
        ],
      },
      {
        id: "11442-2410312110--32090-0-13554-2411010825",
        origin: {
          id: "EWR",
          entityId: "95565059",
          name: "New York Newark",
          displayCode: "EWR",
          city: "New York",
          country: "United States",
          isHighlighted: false,
        },
        destination: {
          id: "LHR",
          entityId: "95565050",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          country: "United Kingdom",
          isHighlighted: false,
        },
        durationInMinutes: 435,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-10-31T21:10:00",
        arrival: "2024-11-01T08:25:00",
        timeDeltaInDays: 1,
        carriers: {
          marketing: [
            {
              id: -32090,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
              name: "Lufthansa",
            },
          ],
          operating: [
            {
              id: -31722,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
              name: "United",
            },
          ],
          operationType: "not_operated",
        },
        segments: [
          {
            id: "11442-13554-2410312110-2411010825--32090",
            origin: {
              flightPlaceId: "EWR",
              displayCode: "EWR",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York Newark",
              type: "Airport",
              country: "United States",
            },
            destination: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            departure: "2024-10-31T21:10:00",
            arrival: "2024-11-01T08:25:00",
            durationInMinutes: 435,
            flightNumber: "7632",
            marketingCarrier: {
              id: -32090,
              name: "Lufthansa",
              alternateId: "LH",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31722,
              name: "United",
              alternateId: "UA",
              allianceId: 0,
              displayCode: "",
            },
          },
        ],
      },
    ],
    isSelfTransfer: false,
    isProtectedSelfTransfer: false,
    farePolicy: {
      isChangeAllowed: false,
      isPartiallyChangeable: false,
      isCancellationAllowed: false,
      isPartiallyRefundable: false,
    },
    fareAttributes: {},
    tags: ["second_cheapest", "second_shortest"],
    isMashUp: false,
    hasFlexibleOptions: false,
    score: 0.721872,
  },
  {
    id: "13554-2410200930--32544-0-11442-2410201240|11442-2410311940--32544-0-13554-2411010655",
    price: {
      raw: 2317.19,
      formatted: "$2,318",
      pricingOptionId: "n6Ipuoe3EOzx",
    },
    legs: [
      {
        id: "13554-2410200930--32544-0-11442-2410201240",
        origin: {
          id: "LHR",
          entityId: "95565050",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          country: "United Kingdom",
          isHighlighted: false,
        },
        destination: {
          id: "EWR",
          entityId: "95565059",
          name: "New York Newark",
          displayCode: "EWR",
          city: "New York",
          country: "United States",
          isHighlighted: false,
        },
        durationInMinutes: 490,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-10-20T09:30:00",
        arrival: "2024-10-20T12:40:00",
        timeDeltaInDays: 0,
        carriers: {
          marketing: [
            {
              id: -32544,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/OS.png",
              name: "Austrian Airlines",
            },
          ],
          operating: [
            {
              id: -31722,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
              name: "United",
            },
          ],
          operationType: "not_operated",
        },
        segments: [
          {
            id: "13554-11442-2410200930-2410201240--32544",
            origin: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            destination: {
              flightPlaceId: "EWR",
              displayCode: "EWR",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York Newark",
              type: "Airport",
              country: "United States",
            },
            departure: "2024-10-20T09:30:00",
            arrival: "2024-10-20T12:40:00",
            durationInMinutes: 490,
            flightNumber: "7793",
            marketingCarrier: {
              id: -32544,
              name: "Austrian Airlines",
              alternateId: "OS",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31722,
              name: "United",
              alternateId: "UA",
              allianceId: 0,
              displayCode: "",
            },
          },
        ],
      },
      {
        id: "11442-2410311940--32544-0-13554-2411010655",
        origin: {
          id: "EWR",
          entityId: "95565059",
          name: "New York Newark",
          displayCode: "EWR",
          city: "New York",
          country: "United States",
          isHighlighted: false,
        },
        destination: {
          id: "LHR",
          entityId: "95565050",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          country: "United Kingdom",
          isHighlighted: false,
        },
        durationInMinutes: 435,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-10-31T19:40:00",
        arrival: "2024-11-01T06:55:00",
        timeDeltaInDays: 1,
        carriers: {
          marketing: [
            {
              id: -32544,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/OS.png",
              name: "Austrian Airlines",
            },
          ],
          operating: [
            {
              id: -31722,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
              name: "United",
            },
          ],
          operationType: "not_operated",
        },
        segments: [
          {
            id: "11442-13554-2410311940-2411010655--32544",
            origin: {
              flightPlaceId: "EWR",
              displayCode: "EWR",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York Newark",
              type: "Airport",
              country: "United States",
            },
            destination: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            departure: "2024-10-31T19:40:00",
            arrival: "2024-11-01T06:55:00",
            durationInMinutes: 435,
            flightNumber: "7794",
            marketingCarrier: {
              id: -32544,
              name: "Austrian Airlines",
              alternateId: "OS",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31722,
              name: "United",
              alternateId: "UA",
              allianceId: 0,
              displayCode: "",
            },
          },
        ],
      },
    ],
    isSelfTransfer: false,
    isProtectedSelfTransfer: false,
    farePolicy: {
      isChangeAllowed: false,
      isPartiallyChangeable: false,
      isCancellationAllowed: false,
      isPartiallyRefundable: false,
    },
    fareAttributes: {},
    tags: ["second_cheapest", "second_shortest"],
    isMashUp: false,
    hasFlexibleOptions: false,
    score: 0.707943,
  },
  {
    id: "13554-2410200930--32090-0-11442-2410201240|11442-2410312300--32090-0-13554-2411011015",
    price: {
      raw: 2317.19,
      formatted: "$2,318",
      pricingOptionId: "RJLZcw2iOzky",
    },
    legs: [
      {
        id: "13554-2410200930--32090-0-11442-2410201240",
        origin: {
          id: "LHR",
          entityId: "95565050",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          country: "United Kingdom",
          isHighlighted: false,
        },
        destination: {
          id: "EWR",
          entityId: "95565059",
          name: "New York Newark",
          displayCode: "EWR",
          city: "New York",
          country: "United States",
          isHighlighted: false,
        },
        durationInMinutes: 490,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-10-20T09:30:00",
        arrival: "2024-10-20T12:40:00",
        timeDeltaInDays: 0,
        carriers: {
          marketing: [
            {
              id: -32090,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
              name: "Lufthansa",
            },
          ],
          operating: [
            {
              id: -31722,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
              name: "United",
            },
          ],
          operationType: "not_operated",
        },
        segments: [
          {
            id: "13554-11442-2410200930-2410201240--32090",
            origin: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            destination: {
              flightPlaceId: "EWR",
              displayCode: "EWR",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York Newark",
              type: "Airport",
              country: "United States",
            },
            departure: "2024-10-20T09:30:00",
            arrival: "2024-10-20T12:40:00",
            durationInMinutes: 490,
            flightNumber: "7633",
            marketingCarrier: {
              id: -32090,
              name: "Lufthansa",
              alternateId: "LH",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31722,
              name: "United",
              alternateId: "UA",
              allianceId: 0,
              displayCode: "",
            },
          },
        ],
      },
      {
        id: "11442-2410312300--32090-0-13554-2411011015",
        origin: {
          id: "EWR",
          entityId: "95565059",
          name: "New York Newark",
          displayCode: "EWR",
          city: "New York",
          country: "United States",
          isHighlighted: false,
        },
        destination: {
          id: "LHR",
          entityId: "95565050",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          country: "United Kingdom",
          isHighlighted: false,
        },
        durationInMinutes: 435,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-10-31T23:00:00",
        arrival: "2024-11-01T10:15:00",
        timeDeltaInDays: 1,
        carriers: {
          marketing: [
            {
              id: -32090,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
              name: "Lufthansa",
            },
          ],
          operating: [
            {
              id: -31722,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
              name: "United",
            },
          ],
          operationType: "not_operated",
        },
        segments: [
          {
            id: "11442-13554-2410312300-2411011015--32090",
            origin: {
              flightPlaceId: "EWR",
              displayCode: "EWR",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York Newark",
              type: "Airport",
              country: "United States",
            },
            destination: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            departure: "2024-10-31T23:00:00",
            arrival: "2024-11-01T10:15:00",
            durationInMinutes: 435,
            flightNumber: "7630",
            marketingCarrier: {
              id: -32090,
              name: "Lufthansa",
              alternateId: "LH",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31722,
              name: "United",
              alternateId: "UA",
              allianceId: 0,
              displayCode: "",
            },
          },
        ],
      },
    ],
    isSelfTransfer: false,
    isProtectedSelfTransfer: false,
    farePolicy: {
      isChangeAllowed: false,
      isPartiallyChangeable: false,
      isCancellationAllowed: false,
      isPartiallyRefundable: false,
    },
    fareAttributes: {},
    tags: ["second_cheapest", "second_shortest"],
    isMashUp: false,
    hasFlexibleOptions: false,
    score: 0.700499,
  },
  {
    id: "13554-2410200800--32544-0-11442-2410201110|11442-2410311940--32544-0-13554-2411010655",
    price: {
      raw: 2317.19,
      formatted: "$2,318",
      pricingOptionId: "X3_SHWstLKti",
    },
    legs: [
      {
        id: "13554-2410200800--32544-0-11442-2410201110",
        origin: {
          id: "LHR",
          entityId: "95565050",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          country: "United Kingdom",
          isHighlighted: false,
        },
        destination: {
          id: "EWR",
          entityId: "95565059",
          name: "New York Newark",
          displayCode: "EWR",
          city: "New York",
          country: "United States",
          isHighlighted: false,
        },
        durationInMinutes: 490,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-10-20T08:00:00",
        arrival: "2024-10-20T11:10:00",
        timeDeltaInDays: 0,
        carriers: {
          marketing: [
            {
              id: -32544,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/OS.png",
              name: "Austrian Airlines",
            },
          ],
          operating: [
            {
              id: -31722,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
              name: "United",
            },
          ],
          operationType: "not_operated",
        },
        segments: [
          {
            id: "13554-11442-2410200800-2410201110--32544",
            origin: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            destination: {
              flightPlaceId: "EWR",
              displayCode: "EWR",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York Newark",
              type: "Airport",
              country: "United States",
            },
            departure: "2024-10-20T08:00:00",
            arrival: "2024-10-20T11:10:00",
            durationInMinutes: 490,
            flightNumber: "7791",
            marketingCarrier: {
              id: -32544,
              name: "Austrian Airlines",
              alternateId: "OS",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31722,
              name: "United",
              alternateId: "UA",
              allianceId: 0,
              displayCode: "",
            },
          },
        ],
      },
      {
        id: "11442-2410311940--32544-0-13554-2411010655",
        origin: {
          id: "EWR",
          entityId: "95565059",
          name: "New York Newark",
          displayCode: "EWR",
          city: "New York",
          country: "United States",
          isHighlighted: false,
        },
        destination: {
          id: "LHR",
          entityId: "95565050",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          country: "United Kingdom",
          isHighlighted: false,
        },
        durationInMinutes: 435,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-10-31T19:40:00",
        arrival: "2024-11-01T06:55:00",
        timeDeltaInDays: 1,
        carriers: {
          marketing: [
            {
              id: -32544,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/OS.png",
              name: "Austrian Airlines",
            },
          ],
          operating: [
            {
              id: -31722,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
              name: "United",
            },
          ],
          operationType: "not_operated",
        },
        segments: [
          {
            id: "11442-13554-2410311940-2411010655--32544",
            origin: {
              flightPlaceId: "EWR",
              displayCode: "EWR",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York Newark",
              type: "Airport",
              country: "United States",
            },
            destination: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            departure: "2024-10-31T19:40:00",
            arrival: "2024-11-01T06:55:00",
            durationInMinutes: 435,
            flightNumber: "7794",
            marketingCarrier: {
              id: -32544,
              name: "Austrian Airlines",
              alternateId: "OS",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31722,
              name: "United",
              alternateId: "UA",
              allianceId: 0,
              displayCode: "",
            },
          },
        ],
      },
    ],
    isSelfTransfer: false,
    isProtectedSelfTransfer: false,
    farePolicy: {
      isChangeAllowed: false,
      isPartiallyChangeable: false,
      isCancellationAllowed: false,
      isPartiallyRefundable: false,
    },
    fareAttributes: {},
    tags: ["second_cheapest", "second_shortest"],
    isMashUp: false,
    hasFlexibleOptions: false,
    score: 0.686929,
  },
  {
    id: "13554-2410200800--32090-0-11442-2410201110|11442-2410312300--32090-0-13554-2411011015",
    price: {
      raw: 2317.19,
      formatted: "$2,318",
      pricingOptionId: "kvmJbvFl4Sy_",
    },
    legs: [
      {
        id: "13554-2410200800--32090-0-11442-2410201110",
        origin: {
          id: "LHR",
          entityId: "95565050",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          country: "United Kingdom",
          isHighlighted: false,
        },
        destination: {
          id: "EWR",
          entityId: "95565059",
          name: "New York Newark",
          displayCode: "EWR",
          city: "New York",
          country: "United States",
          isHighlighted: false,
        },
        durationInMinutes: 490,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-10-20T08:00:00",
        arrival: "2024-10-20T11:10:00",
        timeDeltaInDays: 0,
        carriers: {
          marketing: [
            {
              id: -32090,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
              name: "Lufthansa",
            },
          ],
          operating: [
            {
              id: -31722,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
              name: "United",
            },
          ],
          operationType: "not_operated",
        },
        segments: [
          {
            id: "13554-11442-2410200800-2410201110--32090",
            origin: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            destination: {
              flightPlaceId: "EWR",
              displayCode: "EWR",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York Newark",
              type: "Airport",
              country: "United States",
            },
            departure: "2024-10-20T08:00:00",
            arrival: "2024-10-20T11:10:00",
            durationInMinutes: 490,
            flightNumber: "7753",
            marketingCarrier: {
              id: -32090,
              name: "Lufthansa",
              alternateId: "LH",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31722,
              name: "United",
              alternateId: "UA",
              allianceId: 0,
              displayCode: "",
            },
          },
        ],
      },
      {
        id: "11442-2410312300--32090-0-13554-2411011015",
        origin: {
          id: "EWR",
          entityId: "95565059",
          name: "New York Newark",
          displayCode: "EWR",
          city: "New York",
          country: "United States",
          isHighlighted: false,
        },
        destination: {
          id: "LHR",
          entityId: "95565050",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          country: "United Kingdom",
          isHighlighted: false,
        },
        durationInMinutes: 435,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-10-31T23:00:00",
        arrival: "2024-11-01T10:15:00",
        timeDeltaInDays: 1,
        carriers: {
          marketing: [
            {
              id: -32090,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
              name: "Lufthansa",
            },
          ],
          operating: [
            {
              id: -31722,
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
              name: "United",
            },
          ],
          operationType: "not_operated",
        },
        segments: [
          {
            id: "11442-13554-2410312300-2411011015--32090",
            origin: {
              flightPlaceId: "EWR",
              displayCode: "EWR",
              parent: {
                flightPlaceId: "NYCA",
                displayCode: "NYC",
                name: "New York",
                type: "City",
              },
              name: "New York Newark",
              type: "Airport",
              country: "United States",
            },
            destination: {
              flightPlaceId: "LHR",
              displayCode: "LHR",
              parent: {
                flightPlaceId: "LOND",
                displayCode: "LON",
                name: "London",
                type: "City",
              },
              name: "London Heathrow",
              type: "Airport",
              country: "United Kingdom",
            },
            departure: "2024-10-31T23:00:00",
            arrival: "2024-11-01T10:15:00",
            durationInMinutes: 435,
            flightNumber: "7630",
            marketingCarrier: {
              id: -32090,
              name: "Lufthansa",
              alternateId: "LH",
              allianceId: 0,
              displayCode: "",
            },
            operatingCarrier: {
              id: -31722,
              name: "United",
              alternateId: "UA",
              allianceId: 0,
              displayCode: "",
            },
          },
        ],
      },
    ],
    isSelfTransfer: false,
    isProtectedSelfTransfer: false,
    farePolicy: {
      isChangeAllowed: false,
      isPartiallyChangeable: false,
      isCancellationAllowed: false,
      isPartiallyRefundable: false,
    },
    fareAttributes: {},
    tags: ["second_cheapest", "second_shortest"],
    isMashUp: false,
    hasFlexibleOptions: false,
    score: 0.683102,
  },
];
