import React from "react";
import { Select as AntdSelect } from "antd";

const { Option } = AntdSelect;

export const Select = ({ handleChange, stopDeparturesData }) => (
  <AntdSelect
    defaultValue="Please select your stop"
    style={{ width: 400 }}
    dropdownStyle={{ backgroundColor: "#f2f2f2" }}
    onChange={handleChange}
  >
    {stopDeparturesData.map(stop => (
      <Option key={stop} value={stop}>
        {stop}
      </Option>
    ))}
  </AntdSelect>
);
