import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import LocationSelect from "./LocationSelect";
import PassengerSelector from "./PassengerSelector";
import {
  fetchRoundTripFlights,
  fetchOneWayFlights,
} from "../services/flightDataService";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import DatePicker from "./DatePIcker";

export default function SearchBox({ setFlightsSearchResult, setSearchingHome }) {
  const ONEWAY = "One way";
  const ROUNDTRIP = "Round-trip";
  const ECONOMY = "economy";
  const PREMIUM_ECONOMY = "premium_economy";
  const BUSINESS = "business";
  const FIRST = "first";

  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [direction, setDirection] = useState(ROUNDTRIP);
  const [flightClass, setFlightClass] = useState(ECONOMY);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [searching, setSearching] = useState(false);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleFromLocationChange = (data) => {
    setFromLocation(data);
  };

  const handleToLocationChange = (data) => {
    setToLocation(data);
  };

  const findFlights = async () => {
    try {
      setSearching(true);
      setSearchingHome(true);
      if (direction === ONEWAY) {
        const result = await fetchOneWayFlights(
          fromLocation.skyId,
          toLocation.skyId,
          fromLocation.entityId,
          toLocation.entityId,
          startDate,
          flightClass,
          adults,
          children,
          infants
        );

        setSearching(false);
        setSearchingHome(false);
        setFlightsSearchResult(result.data.itineraries);
      } else {
        const result = await fetchRoundTripFlights(
          fromLocation.skyId,
          toLocation.skyId,
          fromLocation.entityId,
          toLocation.entityId,
          startDate,
          endDate,
          flightClass,
          adults,
          children,
          infants
        );

        setSearching(false);
        setSearchingHome(false);
        setFlightsSearchResult(result.data.itineraries);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
        p: 1,
        borderRadius: "15px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item size={{ xs: 5, md: 2 }} sx={{ textAlign: "left" }}>
          <FormControl variant="standard" sx={{ minWidth: 150 }}>
            <Select
              value={direction}
              onChange={(event) => setDirection(event.target.value)}
            >
              <MenuItem value={ONEWAY}>
                <ArrowRightAltIcon fontSize="xs"></ArrowRightAltIcon> {ONEWAY}
              </MenuItem>
              <MenuItem value={ROUNDTRIP} default>
                <CompareArrowsIcon fontSize="xs"></CompareArrowsIcon>
                {ROUNDTRIP}
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item size={{ xs: 2, md: 1 }} sx={{ textAlign: "left" }}>
          <PassengerSelector
            setParentAdults={setAdults}
            setParentChildren={setChildren}
            setParentInfants={setInfants}
          ></PassengerSelector>
        </Grid>
        <Grid item size={{ xs: 5, md: 9 }} sx={{ textAlign: "left" }}>
          <FormControl variant="standard" sx={{ minWidth: 180 }}>
            <Select
              value={flightClass}
              onChange={(event) => setFlightClass(event.target.value)}
            >
              <MenuItem value={ECONOMY} default>
                Economy
              </MenuItem>
              <MenuItem value={PREMIUM_ECONOMY}>Premium economy</MenuItem>
              <MenuItem value={BUSINESS}>Business</MenuItem>
              <MenuItem value={FIRST}>First</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item size={{ xs: 6, md: 3 }}>
          <LocationSelect
            passLocationChange={handleFromLocationChange}
            label="Where from"
          ></LocationSelect>
        </Grid>
        <Grid item size={{ xs: 6, md: 3 }}>
          <LocationSelect
            passLocationChange={handleToLocationChange}
            label="Where to"
          ></LocationSelect>
        </Grid>
        {direction === ONEWAY ? (
          <Grid item size={{ xs: 12, md: 6 }}>
            <DatePicker
              handleDateChange={handleStartDateChange}
              label={"Departure date"}
            ></DatePicker>
          </Grid>
        ) : (
          <Grid item size={{ xs: 6, md: 3 }}>
            <DatePicker
              handleDateChange={handleStartDateChange}
              label={"Departure date"}
            ></DatePicker>
          </Grid>
        )}

        {direction === ROUNDTRIP && (
          <Grid item size={{ xs: 6, md: 3 }}>
            <DatePicker
              handleDateChange={handleEndDateChange}
              label={"Return date"}
            ></DatePicker>
          </Grid>
        )}

        <Grid item size={{ xs: 12, md: 12 }} offset={{ md: "auto" }}>
          <Button
            variant="contained"
            onClick={findFlights}
            disabled={
              fromLocation === "" ||
              toLocation === "" ||
              startDate === null ||
              (direction === ROUNDTRIP && endDate === null) ||
              searching
            }
          >
            <SearchIcon></SearchIcon>
            <Typography variant={"button"}>Search</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
