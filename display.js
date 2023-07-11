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
        let new_node = new node(value);

        if (!this.head){
            this.head = new_node;
            return this;
        }
        
        new_node.next = this.head;
        this.head= new_node;
        return this;    
        
    }
    contains(value){
        let runner = this.head
        while(runner){
            if (runner.data == value){
                console.log(true);
                return this;
            }
            runner = runner.next;
        }
        console.log(false);
    }

    PrintSSL(){
        let runner = this.head
        console.log(runner);
        while(runner){
            console.log(runner.data);
            runner = runner.next;
        }
    }

    display(){
        let runner = this.head
        let str = "";
        while(runner){
            str =  str +  runner.data + ",";
            runner = runner.next;
        }
        str = str.substring(0,str.length-1)
        console.log(str);
    }

    length(){
        let counter = 0;
        let runner = this.head;
        while(runner){
            counter++;
            runner = runner.next;
        }
        console.log(counter);
    }
}
new_list = new LinkedList();
new_list.AddFront(5);
new_list.AddFront(6);
new_list.AddFront(7);
new_list.AddFront(8);
new_list.AddFront(8);
new_list.AddFront(8);
new_list.AddFront(8);
new_list.AddFront(8);

new_list.length();
new_list.display();



