class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    // add value method
    add(value) {
        if (this.root) {
            let runner = this.root;
            // iterate through the tree
            while (runner) {
                // if the given Value is bigger than the value of this node check the left childe
                if (value > runner.val) {
                    // if the left childe is occupied (it contains a Node)
                    // let the runner point to it
                    if (runner.left) {
                        runner = runner.left;
                    }
                    else {
                        // if the left child is empty create a new node in it with the given value
                        runner.left = new BTNode(value);
                        return this;
                    }
                }
                // This mean the given value is smaller than the runner value
                else {
                    if (runner.right) {
                        runner = runner.right;
                    }
                    else {
                        runner.right = new BTNode(value);
                        return this;
                    }
                }

            }
        }
        this.root = new BTNode(value);
        return this;
    }

    contains(value) {
        if (this.root) {
            let runner = this.root;

            // iterate through the tree
            while (runner) {
                if (runner.val == value) return true;
                // if the given Value is bigger than the value of this node check the left childe
                if (value > runner.val) {
                    // if the left childe is occupied (it contains a Node)
                    // let the runner point to it
                    if (runner.left) {
                        runner = runner.left;
                    }
                    else {
                        // if the left child is empty value dose not exists in the tree
                        return false;
                    }
                }
                // This mean the given value is smaller than the runner value
                else {
                    if (runner.right) {
                        runner = runner.right;
                    }
                    else {
                        return false;
                    }
                }

            }
        }
        // The Tree is empty 
        return false;
    }

    min() {
        if (this.root) {
            let runner = this.root;
            let min = 0;
            // iterate through the right side of tree till you reach the right most leaf 
            while (runner) {
                if (runner.right) {
                    runner = runner.right;
                }
                else {
                    min = runner.val;
                    return min;
                }

            }
        }
        return "This Tree is empty";
    }

    max() {
        if (this.root) {
            let runner = this.root;
            let max = 0;
            // iterate through the left side of tree till you reach the left most leaf 
            while (runner) {
                if (runner.left) {
                    runner = runner.left;
                }
                else {
                    max = runner.val;
                    return max;
                }

            }
        }
        return "This Tree is empty";
    }

    size() {
        // Check if the tree is populated
        if (this.root) {
            let runner = this.root;
            //call size function
            let total =  find_size(runner);
            return total;
            // using recursive function method to iterate through all nodes and count them up.
            function find_size(runner) {
                // if Node exists, iterate through the left and right
                if (runner) {
                    return (find_size(runner.left) + find_size(runner.right) + 1);
                }
                // if Node dose not exists (null)
                else return 0;
            }

        }
        // The tree is empty (not populated)
        return "The Tree is Empty"
    }

    isEmpty() {
        if (!(this.root)) return "This Tree is empty";
        return "This Tree is Populated";
    }
}

tree = new BST();

// adding some nodes
tree.add(10).add(20).add(5).add(7).add(21).add(2).add(9).add(17).add(6).add(4).add(1).add(100).add(55)

// searching for value
console.log(tree.contains(500));

// find the min value
console.log(tree.min());
// find the max value
console.log(tree.max());
// find the tree size (number of nodes)
console.log(tree.size());
// Check if the tree is empty or not
console.log(tree.isEmpty());
