import { v4 as uuidv4 } from "uuid";
class LayoutManager {
  totals = {};

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
    return nodes.map((node, index) => {
      node = {
        ...node,
        id: uuidv4(),
        hasBeenIterated: true,
        x: startX * (index + 1),
        y: startY,
      };

      if (node.children && node.children.length) {
        node.children = [
          ...this.layoutItemRecursive(node.children, startX + 50, startY + 50),
        ];
        this.getCoordinates(node, node.children, startX, startY);
      }
      return node;
    });
  };
}

export default LayoutManager;
