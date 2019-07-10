class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = new Node('head')
  }

  findByValue (value) {
    let currentNode = this.head.next
    while (currentNode !== null && currentNode.element !== value) {
      currentNode = currentNode.next
    }

    // console.log(currentNode)

    return currentNode === null ? -1 : currentNode
  }

  findByIndex (index) {
    let currentNode = this.head.next
    let pos = 0
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next
      pos++
    }

    // console.log(currentNode)
    return currentNode !== null ? -1 : currentNode
  }

  append (newElement) {
    const newNode = new Node(newElement)
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }

    // console.log(currentNode)

    currentNode.next = newNode
  }

  insert (newElement, element) {
    let currentNode = this.findByValue(element)
    if (currentNode === -1) {
      console.log('未找到插入位置')
      return
    }

    const newNode = new Node(newElement)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  findPrev (value) {
    let currentNode = this.head
    while (currentNode.next !== null && currentNode.next.element !== null) {
      currentNode = currentNode.next
    }

    if (currentNode.next === null) {
      return -1
    }

    return currentNode
  }

  remove (value) {
    let prevNode = this.findPrev(value)
    if (prevNode === -1) {
      console.log('未找到元素')
      return
    }

    prevNode.next = prevNode.next.next
  }

  diaplay () {
    let currentNode = this.head.next
    while (currentNode !== null) {
      console.log(currentNode)
      currentNode = currentNode.next
    }
  }
}

const List = new LinkedList()

List.append('benjamin')
List.append('llf')
List.append('author')
List.append('jue')

List.insert('ki', 'llf')

List.diaplay()
