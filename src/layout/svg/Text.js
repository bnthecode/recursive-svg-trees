const Text = ({ x, y, size, content, onClick, id }) => {
  return (
    <text
      id={id}
      x={x}
      fontWeight="800"
      fontSize={size}
      fill="#36454f"
      y={y}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      {content}
    </text>
  );
};

export default Text;
