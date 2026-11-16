
function mincost(arr) {
    // Create a min heap
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(val) {
            this.heap.push(val);
            let i = this.heap.length - 1;

            while (i > 0) {
                let p = Math.floor((i - 1) / 2);
                if (this.heap[p] <= this.heap[i]) break;

                [this.heap[p], this.heap[i]] =
                [this.heap[i], this.heap[p]];

                i = p;
            }
        }

        pop() {
            if (this.heap.length === 1) return this.heap.pop();

            let min = this.heap[0];
            this.heap[0] = this.heap.pop();

            let i = 0;

            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let smallest = i;

                if (left < this.heap.length &&
                    this.heap[left] < this.heap[smallest]) {
                    smallest = left;
                }

                if (right < this.heap.length &&
                    this.heap[right] < this.heap[smallest]) {
                    smallest = right;
                }

                if (smallest === i) break;

                [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];

                i = smallest;
            }

            return min;
        }

        size() {
            return this.heap.length;
        }
    }

    let heap = new MinHeap();

    for (let num of arr) {
        heap.push(num);
    }

    let totalCost = 0;

    while (heap.size() > 1) {
        let first = heap.pop();
        let second = heap.pop();

        let cost = first + second;

        totalCost += cost;

        heap.push(cost);
    }

    return totalCost;
}

module.exports = mincost;
