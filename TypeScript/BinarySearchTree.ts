class BinarySearchTree {
  private root: TreeNode;
  
  public getRoot(): TreeNode {
      return this.root;
  }
  
  public setRoot(root: TreeNode) {
      this.root = root;
  }
  
  constructor() {
      this.root = null;
  }
  
  public addToTree(value: number): boolean {
    // Create a new node
    const newNode = new TreeNode(value);
    
    // If tree is empty, set new node as root
    if (this.root == null) {
      this.root = newNode;
    } else {
      // Tree is not empty, find the right spot for the new node
      let currentNode = this.root;
      let traversing = true;
      while (traversing) {
        if (currentNode.value == newNode.value) {
          // Duplicates are not accepted
          traversing = false;
          return false;
        } else if (newNode.value < currentNode.value) {
          // Traverse left of the node
          if (currentNode.left == null) {
              currentNode.left = newNode;
              traversing = false;
              return true;
          } else {
              // Traversing left of the current node
              currentNode = currentNode.left;
          }
        } else if (newNode.value > currentNode.value) {
            // Traverse right of the node
            if (currentNode.right == null) {
                currentNode.right = newNode;
                traversing = false;
                return true;
            } else {
                // Traversing right of the current node
                currentNode = currentNode.right;
            }
        }        
      }
    }
  }
  
  public breadthFirstSearch() : number[] {
      // Create a queue to keep track of nodes that needs to be visited
      let toBeVisitedQueue = new Array<TreeNode>();
      // Create an array to keep track of visited node values
      let visitedArray = new Array<number>();
      
      // Start traversing from the root
      toBeVisitedQueue.push(this.root);
      
      // While the queue is not empty
      while (toBeVisitedQueue.length != 0) {
          // Dequeue an element from the queue
          let current = toBeVisitedQueue.shift();
          
          // Add the node value to the visited node values array
          visitedArray.push(current.value);
          
          // If the current node has left child, add it to the queue to be visited for
          if (current.left != null) {
            toBeVisitedQueue.push(current.left);
          }
          
          // If the current node has right child, add it to the queue to be visited for
          if (current.right != null) {
            toBeVisitedQueue.push(current.right);
          }
      }
      
      return visitedArray;      
  }
  
  public depthFirstPreOrder() : number[] {
    // Stack to keep track of the nodes we visited
    let visitedStack = new Array<TreeNode<number>>();
    
    // Array to return the data
    let data = new Array<number>();
    
    let currentNode = this.root;
    visitedStack.push(currentNode);
    
    // While we still have nodes in stack to backtrack
    while (visitedStack.length > 0) {
        currentNode = visitedStack.pop();
        
        // Add the current root to the return data
        data.push(currentNode.value);
        
        // Add the right node to the stack
        if (currentNode.right != null) {
            visitedStack.push(currentNode.right);
        }
        
        // Add the left node to the stack
        // We add right node before the left node because we have to traverse left subtree
        // before the right subtree
        if (currentNode.left != null) {
          visitedStack.push(currentNode.left);
        }        
    }
    
    return data;
  }
}

class TreeNode {
		private value: number;
    private left: TreeNode;
    private right: TreeNode;
    
   public getValue(): number {
      return this.value;
    }
    
    public setValue(value: number): number {
            this.value = value;    	
    }
    
    public getRight(): TreeNode {
        return this.right;
    }
    
    public setRight(right: TreeNode) {
        this.right = right;
    }
    
    public getLeft(): TreeNode {
        return this.left;
    }
    
    public setLeft(left: TreeNode) {
        this.left = left;
    }
    
    constructor(value: number) {
    		this.value = value;
        this.left = null;
        this.right = null;
    }    
    
}


br = new BinarySearchTree();
br.addToTree(6);
br.addToTree(3);
br.addToTree(1);
br.addToTree(11);
br.addToTree(5);
br.addToTree(9);
br.addToTree(7);
/* console.log(br.getRoot()); */
/* console.log(br.breadthFirstSearch()); */ 
/* console.log(br.depthFirstPreOrder()); */