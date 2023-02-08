const Circle = ({ x, y, color, id, onClick }) => {
  return (
    <circle
      id={id}
      className="node"
      cx={x}
      cy={y}
      r="40"
      stroke="#36454f"
      stroke-width={8}
      fill={color}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    ></circle>
  );
};

export default Circle;
