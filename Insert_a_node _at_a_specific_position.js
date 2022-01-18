
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, dat, position) {
    if(position == 0){
        let newlist = new LinkedListNode(dat)
        newlist.next = head;
        return newlist
    }
    let cur = head;
    for(let i = 0 ; i < position-1; i++){
        cur = cur.next;
    }
    let nxt = cur.next;
    let newlist = new LinkedListNode(dat)
    newlist.next = nxt;
    cur.next = newlist
    return head
}

