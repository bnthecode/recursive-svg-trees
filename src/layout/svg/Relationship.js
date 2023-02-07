const Line = ({ node }) => {
  return (
    <line
      text-anchor="middle"
      font-size="100"
      font-family="sans-serif"
      x1={node.x}
      y1={node.y - 38}
      x2={node.parentX}
      y2={node.parentY + 40}
      stroke="#36454f"
      strokeWidth={4}
    />
  );
};

export default Line;
