export {};

class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

class BinarySearchTree {
  root: TreeNode | null = null;

  find(val: number): TreeNode | null {
    function traverse(val: number, treeNode: TreeNode | null): TreeNode | null {
      if (!treeNode) {
        return null;
      }

      if (val === treeNode.val) {
        return treeNode;
      }

      if (val > treeNode.val) {
        return traverse(val, treeNode.right);
      }

      if (val < treeNode.val) {
        return traverse(val, treeNode.left);
      }

      return null;
    }

    return traverse(val, this.root);
  }

  insert(val: number): BinarySearchTree {
    const newNode = new TreeNode(val);

    function traverse(newNode: TreeNode, treeNode: TreeNode) {
      if (newNode.val > treeNode.val) {
        if (treeNode.right) {
          traverse(newNode, treeNode.right);
        } else {
          treeNode.right = newNode;
        }
      }

      if (newNode.val < treeNode.val) {
        if (treeNode.left) {
          traverse(newNode, treeNode.left);
        } else {
          treeNode.left = newNode;
        }
      }

      if (newNode.val === treeNode.val) {
        return;
      }
    }

    if (this.root) {
      traverse(newNode, this.root);
    } else {
      this.root = newNode;
    }

    return this;
  }

  breadthTraversal(): number[] {
    if (!this.root) {
      return [];
    }

    const res: number[] = [];
    const queue: TreeNode[] = [this.root];

    while (queue.length) {
      const node = queue[0];

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }

      res.push(node.val);
      queue.shift();
    }

    return res;
  }

  depthTraversal(): number[] {
    const res: number[] = [];

    function traverse(node: TreeNode | null) {
      if (node) {
        // ? Pre Order
        // res.push(node.val);

        if (node.left) traverse(node.left);

        // ? In Order (sorted)
        // res.push(node.val);

        if (node.right) traverse(node.right);

        // ? Post Order
        res.push(node.val);
      }
    }

    traverse(this.root);
    return res;
  }
}

const bst = new BinarySearchTree();
const arr = [300, 964, 711, 220, 99, 221, 556, 361, 413, 554, 871];
for (const n of arr) {
  bst.insert(n);
}

const res = bst.depthTraversal();
console.log(res);

// * INSERTION = O(log n)
// * REMOVE = O(log n)

// ! NOT GUARANTEED
// ? If tree is bad constructed (wrong root chosen)
