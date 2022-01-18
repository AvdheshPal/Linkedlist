const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
    let l = 0;
    let c = head;
    while(c){
        l++
        c = c.next;
    }
    let ans = head;
    for(let i = 0 ; i < l-n; i++){
        ans = ans.next;
    }
    return ans.data;
        
    
}
