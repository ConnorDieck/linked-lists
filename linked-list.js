/** Node: node for a singly linked list. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** LinkedList: chained together nodes. */

class LinkedList {
	constructor(vals = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
	}

	/** push(val): add new value to end of list. */

	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			// if empty list, set both head and tail to new list
			this.head = newNode;
			this.tail = newNode;
		} else if (this.length === 1) {
			// if only one value, set head's next value to the newNode and then assign newNode to tail
			this.head.next = newNode;
			this.tail = newNode;
		} else {
			// when linked list is full, assign tail's next attribute to new node, then assign newNode to current tail
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}

	/** unshift(val): add new value to start of list. */

	unshift(val) {
		let newNode = new Node(val);
		newNode.next = this.head;
		if (this.length === 0) {
			// if empty list, set both head and tail to new list
			this.head = newNode;
			this.tail = newNode;
		} else if (this.length === 1) {
			// if only one value, set tail's value to the current head and then assign newNode to head
			this.tail = this.head;
			this.head = newNode;
		} else {
			// when linked list is full, simply make new  node the new head
			this.head = newNode;
		}
		this.length++;
	}

	/** pop(): return & remove last item. */

	pop() {
		let current = this.head;

		if (this.length === 0) {
			throw new Error("Error: No items exist in specified linked list");
		}

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
			this.length--;
			return current.val;
		}

		while (current.next !== this.tail) {
			current = current.next;
		}

		let popped = this.tail;
		this.tail = current;
		this.tail.next = null;
		this.length--;
		return popped.val;
	}

	/** shift(): return & remove first item. */

	shift() {
		let current = this.head;

		if (this.length === 0) {
			throw new Error("Error: No items exist in specified linked list");
		}

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
			this.length--;
			return current.val;
		}

		this.head = this.head.next;
		this.length--;
		return current.val;
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		let current = this.head;

		for (let i = 0; i < idx; i++) {
			if (!current.next) {
				throw new Error("Error: index does not exist in linked list");
			}
			current = current.next;
		}

		return current.val;
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		let newNode = new Node(val);

		if (idx === 0) {
			newNode.next = this.head.next;
			this.head = newNode;
		}

		if (idx === this.length - 1) {
			this.tail = newNode;
		}

		let current = this.head;
		let prev = current;

		for (let i = 0; i < idx; i++) {
			if (!current.next) {
				throw new Error("Error: index does not exist in linked list");
			}
			// console.log(`i: ${i}`)
			prev = current;
			// console.log(`prev:`)
			// console.log(prev)
			current = current.next;
			// console.log(`current: ${current}`)
			// console.log(current)
		}

		let next = current.next;
		current = newNode;
		prev.next = current;
		current.next = next;
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		let newNode = new Node(val);

		if (idx === 0 && this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		}

		if (idx > this.length + 1) {
			throw new Error("Error: index does not exist in linked list");
		}

		let current = this.head;
		let prev = current;

		for (let i = 0; i < idx; i++) {
			prev = current;
			current = current.next;
		}

		prev.next = newNode;
		current ? (newNode.next = current) : (this.tail = newNode);
		this.length++;
	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
		if (idx === 0 && this.head !== null) {
			this.head = null;
			this.tail = null;
		}

		if (idx > this.length + 1) {
			throw new Error("Error: index does not exist in linked list");
		}

		let current = this.head;
		let prev = current;

		for (let i = 0; i < idx; i++) {
			prev = current;
			current = current.next;
		}

		current ? (prev.next = current.next) : (this.tail = prev);
		this.length--;
	}

	/** average(): return an average of all values in the list */

	average() {
		if (this.length === 0) {
			return 0;
		}

		let sum = 0;
		let current = this.head;

		for (let i = 0; i < this.length; i++) {
			sum += current.val;
			current = current.next;
			console.log(sum);
		}

		return sum / this.length;
	}
}

module.exports = LinkedList;
