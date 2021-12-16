import React from "react";
import { Card as AntdCard, Timeline, Button, Row, Col } from "antd";
import "./styles.css";
import moment from "moment";

export const Card = ({ tripsData, bookTrips }) => (
  <div>
    <Row gutter={16}>
      {tripsData?.map(trip => (
        <Col key={trip.id} span={6}>
          <AntdCard className="card" hoverable>
            <div className="gridStyle">
              <Timeline mode="right">
                <Timeline.Item
                  label={moment(trip.departureTime).format(
                    "DD/MM/YYYY hh:mm:ss"
                  )}
                  className="content"
                >
                  <label>{trip.departureStop}</label>
                </Timeline.Item>
                <Timeline.Item
                  label={moment(trip.arrivalTime).format("DD/MM/YYYY hh:mm:ss")}
                >
                  <label>{trip.arrivalStop}</label>
                </Timeline.Item>
              </Timeline>

              <Button
                className="buttonBook"
                block
                size="large"
                onClick={() => bookTrips(trip.id)}
              >
                Book this trip
              </Button>
            </div>
          </AntdCard>
        </Col>
      ))}
    </Row>
  </div>
);
