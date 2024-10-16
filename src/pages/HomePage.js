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