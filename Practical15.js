(function() {


    const n0 = new node(0, []),
        n1 = new node(1, []),
        n2 = new node(2, []),
        n3 = new node(3, []);
    n0.neighbors = [n1, n2, n3];
    n1.neighbors = [n0, n2];
    n2.neighbors = [n0, n1];
    n3.neighbors = [n0];
    bfs(n0);

})();



function bfs(src) {
    let visited = {}, q = new queue();
    q.add(src);
    visited[src.val] = true;

    while (!q.isEmbty()) {
        let n = q.remove();
        console.log(n.val);
        for (let neighbor of n.neighbors) {
            if (!visited[neighbor.val])
                q.add(neighbor);
            visited[neighbor.val] = true;
        }
    }
}



function queue() {
    this.arr = [];
    this.add = function(val) {
        this.arr.push(val);
    }
    this.remove = function() {
        return this.arr.splice(0, 1)[0];
    }
    this.isEmbty = function() {
        return this.arr.length === 0;
    }
}


function node(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors;
}