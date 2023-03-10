const Grid = ({ children }) => {
  return (
    <svg
      // viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
      // preserveAspectRatio="none"
      width="100%"
      height="calc(100vh - 5px)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="smallGrid"
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 8 0 L 0 0 0 8"
            fill="grey"
            stroke="grey"
            stroke-width="2"
          />
        </pattern>
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect width="80" height="80" fill="url(#smallGrid)" />
          <path
            d="M 80 0 L 0 0 0 80"
            fill="none"
            stroke="grey"
            stroke-width="1"
          />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid)" />
      {children}
    </svg>
  );
};

export default Grid;
