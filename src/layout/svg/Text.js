const Text = ({ x, y, size, content }) => {
  return (
    <text x={x} fontWeight="800" fontSize={size} fill="#36454f" y={y}>
      {content}
    </text>
  );
};

export default Text;
