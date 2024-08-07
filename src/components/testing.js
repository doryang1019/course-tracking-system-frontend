import React, { useRef, useEffect, useState } from 'react';

const ComponentA = ({ refA }) => (
  <div className="component" ref={refA}>
    Component A
  </div>
);

const ComponentB = ({ refB }) => (
  <div className="component" ref={refB}>
    Component B
  </div>
);

const Line = ({ x1, y1, x2, y2 }) => (
  <svg className="line">
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" strokeWidth="2" />
  </svg>
);

const App = () => {
  const refA = useRef(null);
  const refB = useRef(null);
  const [lineCoords, setLineCoords] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });

  useEffect(() => {
    if (refA.current && refB.current) {
      const rectA = refA.current.getBoundingClientRect();
      const rectB = refB.current.getBoundingClientRect();
      setLineCoords({
        x1: rectA.right,
        y1: rectA.top + rectA.height / 2,
        x2: rectB.left,
        y2: rectB.top + rectB.height / 2,
      });
    }
  }, []);

  return (
    <div className="app">
      <ComponentA refA={refA} />
      <ComponentB refB={refB} />
      <Line {...lineCoords} />
    </div>
  );
};

export default App;
