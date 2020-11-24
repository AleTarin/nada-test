import React from "react";
import "./styles.css";
import items from "./items";
import HighLightedItem from "./item";

import { Container, Row } from "react-bootstrap";

const GRID = {
  MOBILE: [[3], [2, 2], [3, 2], [3, 3], [2, 3, 2], [3, 3, 2], [3, 3, 3]],
  DESKTOP: [[3], [4], [5], [3, 3], [4, 3], [4, 4], [5, 4]]
};

function chunkArray(array, sizes = []) {
  let size = sizes.length ? sizes.shift() : array.length;
  if (array.length <= size) {
    return [array];
  }
  return [array.slice(0, size), ...chunkArray(array.slice(size), sizes)];
}

export default function App() {
  const imageGrid = React.useMemo(() => {
    let displayedItems = 5;
    let deviceType = "MOBILE";
    return chunkArray(
      items.slice(0, displayedItems),
      GRID[deviceType][displayedItems - 3]
    );
  }, []);
  console.log("GRID", imageGrid);
  return (
    <Container>
      {imageGrid.map((serviceRow, indexRow) => {
        console.log(serviceRow, indexRow);
        return (
          <Row
            key={indexRow}
            className={[
              `service-row-${indexRow}`,
              "d-flex",
              "align-content-center",
              "justify-content-between"
            ].join(" ")}
          >
            {indexRow}
            {serviceRow.map((serviceItem, indexItem) => (
              <HighLightedItem
                key={`${indexRow}-${indexItem}`}
                row={indexRow}
                data={serviceItem}
              />
            ))}
          </Row>
        );
      })}
    </Container>
  );
}
