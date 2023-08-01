class node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }
    
    AddFront(value){
        // create a new node
        let new_node = new node(value);
        // check if linked list is empty or not
        if (!this.head){
            // let the head point at the new created node        
            this.head = new_node;
            return this;
        }
        // the next at the new created node now points at the node pointed by the head
        new_node.next = this.head;
        // let the head point at the new created node
        this.head= new_node;
        return this;    
        
    }

    removeFront(){
        // if the head pointing at nothing return null
        if(!this.head){
            return null;
        }
        // let the head point at the next node which is currently pointing at
        this.head = this.head.next
    }

    front(){
        return this.head.data;
    }
}
new_list = new LinkedList();
new_list.AddFront(10);
new_list.AddFront(20);
console.log(new_list);
new_list.removeFront();
console.log(new_list);
new_list.AddFront(30);

console.log(new_list.front());
