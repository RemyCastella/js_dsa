class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  traverse() {
    let current = this.head
    while(current) {
      console.log(current.val)
      current = current.next
    }
  }

  pop() {
    if(this.length === 0) return undefined
    let current = this.head
    let newTail = current
    while(current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if(this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  shift() {
    if(!this.head) return undefined
    let temp = this.head
    this.head = temp.next
    this.length--
    if(this.length === 0) {
      this.tail = null
    }
    return temp
  }

  unshift(val) {
    const newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  get(idx) {
    if(idx < 0 || idx >= this.length) return null
    let current = this.head
    for(let i = 0; i < idx; i++) {
      current = current.next
    }
    return current
  }

  set(idx, val) {
    let node = this.get(idx)
    if(!node) return false
    node.val = val
    return true
  }

  insert(idx, val) {
    if(idx < 0 || idx > this.length) return false
    if(idx === 0) return !!this.unshift(val)
    if(idx === this.length) return !!this.push(val)
    let newNode = new Node(val)
    let prevNode = this.get(idx - 1)
    let temp = prevNode.next
    prevNode.next = newNode
    newNode.next = temp
    this.length++
    return true
  }

  remove(idx) {
    if(idx < 0 || idx > this.length) return undefined
    if(idx === 0) return this.shift()
    if(idx === this.length - 1) return this.pop()
    let prev = this.get(idx - 1)
    let removed = prev.next
    prev.next = removed.next
    this.length--
    return removed
  }
}

let list = new SinglyLinkedList()

list.push(42)
list.push(43)
list.push(44)
console.log(list.remove(1));
