function heap(arr) {

    if (arr) {
        build_heap();
    } else {
        arr = [];
    }
    this.arr = arr;

    function build_heap() {
        for (let i = (arr.length - 1) % 2 == 0 ? (((arr.length - 1) >> 1) - 1) : (arr.length - 1) >> 1; i >= 0; i--)
            max_heapify(i);
    }

    function max_heapify(i) {
        let l = (i << 1) + 1, r = l + 1, largest = i;
        if (l < arr.length && arr[l] > arr[i])
            largest = l;
        if (r < arr.length && arr[r] > arr[largest])
            largest = r

        if (i != largest) {
            let temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;
            max_heapify(largest);
        }
    }

    this.up_heapify = function up_heapify(i) {
        let parent = (i % 2 == 0) ? (i >> 2) - 1 : (i >> 2);
        if (this.arr[i] > this.arr[parent]) {
            //swap
            let temp = this.arr[i];
            this.arr[i] = this.arr[parent];
            this.arr[parent] = temp;
            this.up_heapify(parent);
        }
    }

    this.insert = function(el) {
        let arr = this.arr;
        arr.push(el);
        this.up_heapify(arr.length - 1);
    }

    this.remove = function() {
        let arr = this.arr;
        if (arr.length == 1) return arr.pop();

        let root = arr[0];
        arr[0] = arr.pop();
        this.max_heapify(0);
        return root;
    }
    this.max_heapify = max_heapify;
}

(function() {
    let arr = [10, 6, 4, 0, 74];
        arr = heapSort1(arr);
        console.log(arr);
    }) ();

    function heapSort1(arr) {
        let h = new heap(), rv = [];
        for (el of arr) {
            h.insert(el);
        }
        while (h.arr.length != 0)
            rv.push(h.remove());
        return rv;
    }

    function heapSort2(arr) {
        let h = new heap(arr), rv = [];
        for (let i = arr.length - 1; i > 0; i--) {
            let temp = arr[i];
            arr[i] = arr[0];
            arr[0] = temp;
            rv.push(arr.pop());
            h.max_heapify(0);
        }
        rv.push(arr.pop());
        return rv;
}