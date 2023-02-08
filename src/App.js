import { useEffect, useState } from "react";
import "./App.css";
import { nodes } from "./dataSet";
import LayoutManager from "./layout/LayoutManager";
import Circle from "./layout/svg/Circle";
import Grid from "./layout/svg/Grid";
import Line from "./layout/svg/Relationship";
import Text from "./layout/svg/Text";

function App() {
  const [nodeGraph, setNodeGraph] = useState({});
  const [nodeList, setNodeList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    const layoutManager = new LayoutManager();
    const nodeArray = layoutManager.layoutItemRecursive(nodes, 100, 100);
    const nodeMap = layoutManager.nodeMap;
    setNodeGraph(nodeMap);
    setNodeList(nodeArray);
  }, []);

  const handleNodeClick = ({ target: { id } }) => {
    const selected = selectedList.includes(id);
    return selected
      ? setSelectedList([...selectedList.filter((nodeId) => nodeId !== id)])
      : setSelectedList([...selectedList, id]);
  };

  const buildRelationships = () => {
    return Object.keys(nodeGraph).map((id) => {
      <Line node={nodeGraph[id]} />;
    });
  };

  const runBinarySearch = (tree) => {
    tree.map((node) => {
      if (node.children.length) {
        return runBinarySearch(node.children);
      }
    });
  };

  const buildSvgItems = () => {
    return Object.keys(nodeGraph).map((id) => {
      const node = nodeGraph[id];
      return (
        <svg>
          <Circle
            x={node.x}
            y={node.y}
            id={id}
            color={selectedList.includes(id) ? "hsla(124,70%,80%,1)" : "#eee"}
            onClick={handleNodeClick}
          />
          <Text
            x={node.x - 26}
            y={node.y - 10}
            content={`${node.x}, ${node.y}`}
            size={12}
            id={id}
            onClick={handleNodeClick}
          />
          <Text
            x={node.x - 8}
            y={node.y + 12}
            size={18}
            id={id}
            content={node.name}
            onClick={handleNodeClick}
          />
          {node.parentX && <Line node={node} />}
        </svg>
      );
    });
  };
  return (
    <>
      <button
        style={{
          width: "200px",
          height: "80px",
          position: "absolute",
          left: 20,
          bottom: 20,
          borderRadius: 12,
          borderWidth: 8,
          cursor: "pointer",
          fontSize: 24,
          fontWeight: 700,
        }}
        onClick={() => runBinarySearch(nodeList)}
      >
        run search
      </button>

      <Grid>
        {buildSvgItems()}
        {buildRelationships()}
      </Grid>
    </>
  );
}

export default App;
