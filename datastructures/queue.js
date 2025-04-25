/*class Queue {
    constructor(){
        this.items = []
    }


    enqueue(item){
        this.items.push(item)
    }

    dequeue(){
        return this.items.shift()
    }


    isEmpty(){
        return this.items.length === 0
    }

    peek(){
        if(!this.isEmpty){
            return this.items[0]
        }
        return null
    }

    size(){
        return this.items.length
    }


    print(){
       console.log(this.items.toString())
    }
}

const queue = new Queue()
queue.enqueue(45)
queue.enqueue(55)
queue.enqueue(65)
queue.enqueue(75)


console.log(queue.isEmpty())
queue.print()

console.log(queue.dequeue())
queue.print()
*/

class Queue{
    constructor(){
        this.items={}
        this.rear = 0
        this.front = 0
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }

    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return this.items[rear] - this.items[this.front] === 0
    }


    peek(){
        return this.items[this.front]
    }

    size(){
        return this.rear - this.front
    }

    print(){
        console.log(this.items)
    }
}


const queue = new Queue()

queue.enqueue("omar")
queue.enqueue(23)
queue.enqueue("cairo")
queue.enqueue("graudta")
console.log(queue.peek())
console.log(queue.rear)
console.log(queue.front)
queue.print()
