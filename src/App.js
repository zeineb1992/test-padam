import "./App.css";
import React, { useEffect, useState } from "react";
import { Select } from "./components/Select";
import { Card } from "./components/Card";
import { Modal } from "./components/Modal";
import { getStops, getTrips, bookTrip } from "./utils/API";
import { notification, Button } from "antd";

function App() {
  const [stopDeparture, setStopDeparture] = useState([]);
  const [trips, setTrips] = useState([]);
  const [selectedTrips, setSelectedTrips] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    (async () => {
      const stops = await getStops();
      setStopDeparture(stops.data);
    })();
  }, []);

  const handleChange = async value => {
    const trips = await getTrips({ value });

    setTrips(trips.data);
  };
  const openNotification = placement => {
    notification.success({
      message: "Confirmation",
      description: "Your trip is booked !",
      placement
    });
  };
  const openWarningNotification = placement => {
    notification.warn({
      message: "Warning",
      description: "You already booked this trip",
      placement
    });
  };
  const bookTrips = async value => {
    const bookedTrip = selectedTrips.filter(trip => value === trip.id);

    if (bookedTrip.length === 0) {
      try {
        await bookTrip(value);
        setSelectedTrips(
          selectedTrips.concat(trips.filter(trip => value === trip.id))
        );
        openNotification("bottomRight");
      } catch (error) {
        console.error(error);
      }
    } else {
      openWarningNotification("bottomRight");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Book your favorite trip !</h1>
      <div className="headerContainer">
        <Button
          shape="round"
          type="primary"
          className="buttonModal"
          onClick={showModal}
        >
          Show my trips
        </Button>
      </div>
      <Select handleChange={handleChange} stopDeparturesData={stopDeparture} />

      <Card tripsData={trips} bookTrips={bookTrips} />

      <Modal
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        selectedTripsData={selectedTrips}
      />
    </div>
  );
}

export default App;
