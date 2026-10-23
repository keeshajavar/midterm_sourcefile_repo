'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ================================================================
// PART A: STACK
// ================================================================

class Stack {
  constructor() {
    // Create the internal storage for the stack.
    this.items = [];
  }

  push(element) {
    // Add an element to the top of the stack.
    this.items.push(element);
  }

  pop() {
    // Remove and return the top element.
    return this.items.pop();
  }

  peek() {
    // Return the top element without removing it.
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    // Return true if the stack is empty.
    return this.items.length === 0;
  }

  size() {
    // Return the number of elements in the stack.
    return this.items.length;
  }

  toString() {
    // Return all stack elements as text.
    return this.items.join(', ');
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

// Push the three required actions.
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');

// Display the current top action.
console.log('Top Action:', actionHistory.peek());

// Undo the most recent action.
console.log('Undo Action:', actionHistory.pop());

// Display the remaining actions.
console.log('Remaining Actions:', actionHistory.toString());

// Display the current stack size.
console.log('Stack Size:', actionHistory.size());


// ================================================================
// PART B: QUEUE
// ================================================================

class Queue {
  constructor() {
    // Create the internal storage for the queue.
    this.items = [];
  }

  enqueue(element) {
    // Add an element at the back of the queue.
    this.items.push(element);
  }

  dequeue() {
    // Remove and return the front element.
    return this.items.shift();
  }

  front() {
    // Return the front element without removing it.
    return this.items[0];
  }

  isEmpty() {
    // Return true if the queue is empty.
    return this.items.length === 0;
  }

  size() {
    // Return the number of elements in the queue.
    return this.items.length;
  }

  toString() {
    // Return all queue elements as text.
    return this.items.join(', ');
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// Enqueue the four required requests in arrival order.
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');

// Display the request at the front.
console.log('Next Request:', waitingRequests.front());

// Process the first two requests.
console.log('Processed:', waitingRequests.dequeue());
console.log('Processed:', waitingRequests.dequeue());

// Display the remaining requests.
console.log('Remaining Requests:', waitingRequests.toString());

// Display the current queue size.
console.log('Queue Size:', waitingRequests.size());


// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================

class PriorityQueue {
  constructor() {
    // Create the starting point of the priority queue.
    // This uses connected items instead of an array.
    this.head = null;

    // Store the number of items in the priority queue.
    this.length = 0;
  }

  enqueue(request, priority) {
    // Create an item containing the request, priority,
    // and a link to the next item.
    const item = {
      request: request,
      priority: priority,
      next: null
    };

    // If the queue is empty, make this item the head.
    if (this.head === null) {
      this.head = item;
      this.length++;
      return;
    }

    // Insert at the beginning if this item has
    // a higher priority than the current first item.
    if (priority < this.head.priority) {
      item.next = this.head;
      this.head = item;
      this.length++;
      return;
    }

    // Start from the first item.
    let current = this.head;

    // Find the correct insertion position.
    // Using <= allows equal-priority requests
    // to keep their original arrival order.
    while (
      current.next !== null &&
      current.next.priority <= priority
    ) {
      current = current.next;
    }

    // Connect the new item into the queue.
    item.next = current.next;
    current.next = item;

    // Increase the number of items.
    this.length++;
  }

  dequeue() {
    // Check if the priority queue is empty.
    if (this.head === null) {
      return null;
    }

    // Store the first item.
    const removedItem = this.head;

    // Move the head to the next item.
    this.head = this.head.next;

    // Remove the old item's connection.
    removedItem.next = null;

    // Decrease the number of items.
    this.length--;

    // Return the removed item.
    return removedItem;
  }

  size() {
    // Return the number of items.
    return this.length;
  }

  print() {
    // Start at the first item.
    let current = this.head;

    // Traverse the priority queue.
    while (current !== null) {
      console.log(
        current.request +
        ', Priority ' +
        current.priority
      );

      current = current.next;
    }
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

// Enqueue the four required requests.
urgentRequests.enqueue(
  'Ticket #301 - Install Browser',
  3
);

urgentRequests.enqueue(
  'Ticket #302 - Server Offline',
  1
);

urgentRequests.enqueue(
  'Ticket #303 - Faculty PC Failure',
  2
);

urgentRequests.enqueue(
  'Ticket #304 - Internet Laboratory Down',
  1
);

// Display the complete priority queue.
console.log('Initial Priority Order:');
urgentRequests.print();

// Process the first request.
const processedPriorityRequest = urgentRequests.dequeue();

console.log(
  'Processed Priority Request:',
  processedPriorityRequest.request +
  ', Priority ' +
  processedPriorityRequest.priority
);

// Display the remaining priority queue.
console.log('Remaining Priority Requests:');
urgentRequests.print();


// ================================================================
// PART D: LINKED LIST
// ================================================================

class Node {
  constructor(element) {
    // Store the element inside the node.
    this.element = element;

    // Set the next node to null.
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Set the length to zero.
    this.length = 0;

    // Set the head to null.
    this.head = null;
  }

  append(element) {
    // Create a new node.
    const node = new Node(element);

    // If the list is empty, make the new node the head.
    if (this.head === null) {
      this.head = node;
    } else {
      // Start at the first node.
      let current = this.head;

      // Find the last node.
      while (current.next !== null) {
        current = current.next;
      }

      // Connect the last node to the new node.
      current.next = node;
    }

    // Increase the list size.
    this.length++;
  }

  insert(position, element) {
    // Reject invalid positions.
    if (position < 0 || position > this.length) {
      return false;
    }

    // Create a new node.
    const node = new Node(element);

    // Insert at the beginning.
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      // Find the node before the insertion position.
      let previous = this.head;

      for (let i = 1; i < position; i++) {
        previous = previous.next;
      }

      // Connect the new node.
      node.next = previous.next;
      previous.next = node;
    }

    // Increase the list size.
    this.length++;

    return true;
  }

  removeAt(position) {
    // Reject invalid positions.
    if (position < 0 || position >= this.length) {
      return null;
    }

    let removedNode;

    // Remove the first node.
    if (position === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      // Find the node before the node to remove.
      let previous = this.head;

      for (let i = 1; i < position; i++) {
        previous = previous.next;
      }

      // Store the node that will be removed.
      removedNode = previous.next;

      // Skip over the removed node.
      previous.next = removedNode.next;
    }

    // Decrease the list size.
    this.length--;

    // Return the removed element.
    return removedNode.element;
  }

  indexOf(element) {
    // Start at the head of the list.
    let current = this.head;
    let index = 0;

    // Traverse the linked list.
    while (current !== null) {
      // Check if the current element matches.
      if (current.element === element) {
        return index;
      }

      current = current.next;
      index++;
    }

    // Return -1 when the element is not found.
    return -1;
  }

  remove(element) {
    // Find the position of the element.
    const index = this.indexOf(element);

    // Remove the element if it exists.
    if (index !== -1) {
      return this.removeAt(index);
    }

    return null;
  }

  isEmpty() {
    // Return true when there are no nodes.
    return this.length === 0;
  }

  size() {
    // Return the number of nodes.
    return this.length;
  }

  toString() {
    // Start at the first node.
    let current = this.head;

    // Start with an empty string.
    let result = '';

    // Traverse the linked list.
    while (current !== null) {
      // Add the current element to the result.
      result += current.element;

      // Add a separator if another node exists.
      if (current.next !== null) {
        result += ', ';
      }

      // Move to the next node.
      current = current.next;
    }

    // Return the complete list as text.
    return result;
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

// Append the three required requests.
completedRequests.append(
  'Ticket #401 - Account Activated'
);

completedRequests.append(
  'Ticket #402 - Printer Connected'
);

completedRequests.append(
  'Ticket #403 - Antivirus Updated'
);

// Insert Ticket #400 at position 0.
completedRequests.insert(
  0,
  'Ticket #400 - Computer Diagnosed'
);

// Insert Ticket #405 at the end using insert().
completedRequests.insert(
  completedRequests.size(),
  'Ticket #405 - Browser Updated'
);

// Display the complete list.
console.log(
  'Complete List:',
  completedRequests.toString()
);

// Find the index of Ticket #402.
console.log(
  'Index of Ticket #402:',
  completedRequests.indexOf(
    'Ticket #402 - Printer Connected'
  )
);

// Remove the item at position 1.
console.log(
  'Removed at Position 1:',
  completedRequests.removeAt(1)
);

// Remove Ticket #403 using remove().
console.log(
  'Removed by Value:',
  completedRequests.remove(
    'Ticket #403 - Antivirus Updated'
  )
);

// Display the final list.
console.log(
  'Final List:',
  completedRequests.toString()
);

// Display the final size.
console.log(
  'Final Size:',
  completedRequests.size()
);