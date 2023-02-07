const Circle = ({ x, y, color }) => {
  return (
    <circle
      className="box"
      cx={x}
      cy={y}
      r="40"
      stroke="#36454f"
      stroke-width={8}
      fill={color}
    ></circle>
  );
};

export default Circle;
