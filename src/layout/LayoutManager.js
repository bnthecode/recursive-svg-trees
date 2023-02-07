import { v4 as uuidv4 } from "uuid";
class LayoutManager {
  nodeMap = {};

  getChildCoordinates = (node, parent, idx, startX, startY) => {
    const childOffset = 100;
    const nodeWidth = 120;
    // main spot that needs word
    node.x = childOffset + nodeWidth * idx * 1 + startX;
    node.y = parent.y + startY;
    node.parentX = parent.x;
    node.parentY = parent.y;
    node.hasBeenIterated = true;
  };

  getCoordinates = (parent, children, startX, startY) => {
    children.forEach((node, index) => {
      this.getChildCoordinates(node, parent, index, startX, startY);
      if (node.children) {
        this.getCoordinates(node, node.children, startX, startY);
      }
    });
  };

  layoutItemRecursive = (nodes, startX = 50, startY = 50) => {
    const xOffset = 100;
    return nodes.map((node, index) => {
      const newX = startX + 840 * index;
      node = {
        ...node,
        id: uuidv4(),
        hasBeenIterated: true,
        x: newX,
        y: startY,
      };
      this.nodeMap = {
        ...this.nodeMap,
        [node.id]: node,
      };
      if (node.children && node.children.length) {
        node.children = [
          ...this.layoutItemRecursive(node.children, newX, startY),
        ];
        this.getCoordinates(node, node.children, newX, startY);
      }
      return node;
    });
  };
}

export default LayoutManager;
