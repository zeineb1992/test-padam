import React from "react";
import { Modal as AntdModal, Steps } from "antd";
import "./styles.css";
const { Step } = Steps;
export const Modal = ({ isModalVisible, handleCancel, selectedTripsData }) => (
  <AntdModal
    footer={null}
    title={<h2 className="modalTitle">My Trips</h2>}
    visible={isModalVisible}
    onCancel={handleCancel}
  >
    {selectedTripsData?.map(selectedTrip => (
      <div key={selectedTrip.id} className="tripsContainer">
        <Steps progressDot current={(1, 2)}>
          <Step title={selectedTrip.departureStop} />
          <Step title={selectedTrip.arrivalStop} />
        </Steps>
      </div>
    ))}
  </AntdModal>
);
