# 数据结构
## 栈
栈是一种遵循先进后出的原则的集合，新添加的或者待删除的元素在栈的末尾称之为栈顶，另一端称之为栈底。

好比一摞书，新放上去的书在上面，就是栈顶。之前放的书压在下面，称之为栈底。如果要拿走一本书的话就必须将这本书上面的所有书都拿走才能拿走这本书



代码实现
``` js
class Stack {

    constructor() {
        this.items = []
    }

    // 入栈
    push(element) {
         this.items.push(element)
    }

    // 出栈
    pop() {
        return this.items.pop()
    }

    // 末位
    get peek() {
        return this.items[this.items.length - 1]
    }

    // 是否为空栈
    get isEmpty() {
        return !this.items.length
    }

    // 尺寸
    get size() {
        return this.items.length
    }

    // 清空栈
    clear() {
        this.items = []
    }

    // 打印栈数据
    print() {
        console.log(this.items.toString())
    }
}

module.exports=Stack
```

## 队列
队列与栈相反，队列是一个遵循先进先出原则的有序集合，新添加的元素在队尾，待删除的元素在队头部。

好比日常生活中的排队，先到的人站在队伍前面，后来的人在队伍后面。队伍前面的人先走。

代码实现
``` js
class Queue {
	constructor(items) {
        this.items = items || []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    front(){
        return this.items[0]
    }

    clear(){
        this.items = []
    }

    get size(){
        return this.items.length
    }

    get isEmpty(){
        return !this.items.length
    }

    print() {
        console.log(this.items.toString())
    }
}

module.exports = Queue
```
## 优先队列
优先队列也是队列，但与之不同的是队伍中存在优先级，比如车站买票的军人优先。队伍排队的时候军人可以直接去队伍最前面优先买票。

实现优先队列的方法：在元素插入队列的时候需要给定该元素的优先级。遍历当前队列找到第一个优先级低于待插入的元素下标，然后将待插入元素插入到该元素前面即可。

代码实现(优先队列继承普通队列，普通队列的实现方式见上文)
``` js
const Queue = require('./Queue');

class PriorityQueue extends Queue{

    constructor(items) {
        super(items)
    }

    enqueue(element, priority){
        const queueElement = { element, priority }
        if (this.isEmpty) {
            this.items.push(queueElement)
        } else {
            const preIndex = this.items.findIndex((item) => queueElement.priority < item.priority)
            if (preIndex > -1) {
                this.items.splice(preIndex, 0, queueElement)
            } else {
                this.items.push(queueElement)
            }
        }
    }
}

module.exports = PriorityQueue
```

## 链表
链表和数组一样都是存储一组数据的，链表相对于数组的区别在于链表中的元素在内存中并不是连续存储的。链表中的每一个元素除了存储它本身之外还存储着它下一个元素的地址。

链表这种数据结构相对于数组的优点在于当链表需要插入和移除元素的时候不用像数组那样改变其他元素的位置。数组中的元素都是存储在一块联系的内存，当插入和移除元素的时候会影响到这个元素后面所有的元素。

当然链表也存在缺点。在数组中随时可以通过下标的形式访问一个元素比如 __arr[1]__ 而链表无法做到，在链表中查找一个元素的时候必须从链表的第一个元素开始向后遍历查找到该元素才行

代码实现
``` js
class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	append(element) {
		const node = new Node(element);
		if (this.head === null) {
			this.head = node
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node
		}
		this.length++
	}

	insert(position, element) {
		const node = new Node(element);
		if (position > -1 && position <= this.length) {
			if (position === 0) {
				node.next = this.head;
				this.head = node;
			} else {
				let current = this.head;
				let currentIndex = 0;
				while (currentIndex < position - 1) {
					currentIndex++;
					current = current.next;
				}
				let currentNext = current.next;
				node.next = currentNext;
				current.next = node
			}
			this.length++
			return true;
		} else {
			return false
		}
	}

	removeAt(position) {
		let previous = this.head;
		let currentIndex = 0;
		let current = previous.next;
		if (position > -1 && position < this.length) {
			if (position === 0) {
				this.head = this.head.next
			} else {
				while (currentIndex < position) {
					currentIndex++;
					previous = previous.next;
					current = current.next;
				}
				previous.next = current.next;
			}
			this.length--;
			return current.element
		} else {
			return null
		}
	}

	findIndex(element) {
		let current = this.head;
		let currentIndex = 0;
		while (current) {
			if (current.element === element) {
				return currentIndex
			} else {
				current = current.next;
				currentIndex++;
			}
		}
		return -1;
	}

	remove(element) {
		const index = this.findIndex(element)
		this.removeAt(index)
	}

	isEmpty() {
		return !this.length;
	}

	size() {
		return this.length;
	}

	toString() {
		let current = this.head;
		let result = ''
		while (current) {
			result += `${current.element} `;
			current = current.next
		}
		return result
	}
}

module.exports = LinkedList;
```