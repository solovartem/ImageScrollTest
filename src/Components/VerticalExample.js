import React from "react";
import { ScrollSync, ScrollSyncNode } from "scroll-sync-react";

export const VerticalExample = () => (
  <ScrollSync>
    <div
      style={{
        display: "flex",
        position: "relative",
        height: 300,
        width: "100%"
      }}
    >
      <ScrollSyncNode group="a" scroll="two-way">
        <div style={{ overflow: "auto" }}>
          <section style={{ height: 500, width: 80, lineHeight: 0 }}>
            {Array.from(Array(100), (e, i) => {
              return (
                <img
                  src={`https://picsum.photos/200/300?sig=${i}`}
                  alt="img"
                  style={{ height: "20px", width: "20px" }}
                />
              );
            })}
          </section>
        </div>
      </ScrollSyncNode>

      <ScrollSyncNode group="a">
        <div style={{ overflow: "auto" }}>
          <section style={{ height: 1250, width: 200, lineHeight: 0 }}>
            {Array.from(Array(100), (e, i) => {
              return (
                <img
                  src={`https://picsum.photos/200/300?sig=${i}`}
                  alt="img"
                  style={{ height: "50px", width: "50px" }}
                />
              );
            })}
          </section>
        </div>
      </ScrollSyncNode>
    </div>
  </ScrollSync>
);

export default VerticalExample;
