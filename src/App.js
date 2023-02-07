import "./App.css";
import { nodes } from "./dataSet";
import LayoutManager from "./layout/LayoutManager";
import Circle from "./layout/svg/Circle";
import Grid from "./layout/svg/Grid";
import Line from "./layout/svg/Relationship";
import Text from "./layout/svg/Text";
import { getRandomPastelColor } from "./utilities";

function App() {
  const layoutManager = new LayoutManager();
  layoutManager.layoutItemRecursive(nodes, 100, 100);
  const nodeMap = layoutManager.nodeMap;

  const buildRelationships = () => {
    return Object.keys(nodeMap).map((id) => {
      <Line node={nodeMap[id]} />;
    });
  };

  const buildSvgItems = () => {
    return Object.keys(nodeMap).map((id) => {
      const node = nodeMap[id];
      return (
        <svg>
          <Circle x={node.x} y={node.y} color={getRandomPastelColor()} />
          <Text
            x={node.x - 26}
            y={node.y - 10}
            content={`${node.x}, ${node.y}`}
            size={12}
          />
          <Text x={node.x - 8} y={node.y + 12} size={18} content={node.name} />
          {node.parentX && <Line node={node} />}
        </svg>
      );
    });
  };
  return (
    <Grid>
      {buildSvgItems()}
      {buildRelationships()}
    </Grid>
  );
}

export default App;
