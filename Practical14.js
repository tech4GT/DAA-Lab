

(function() {

    const n0 = new node(0, []),
        n1 = new node(1, []),
        n2 = new node(2, []),
        n3 = new node(3, []);
    n0.neighbors = [n1, n2, n3];
    n1.neighbors = [n0, n2];
    n2.neighbors = [n0, n1];
    n3.neighbors = [n0];
    dfs(n0, [true]);

})();


function dfs(src, visited) {
    console.log(src.val);
    for (let n of src.neighbors) {
        if (!visited[n.val]) {
            visited[n.val] = true;
            dfs(n, visited);
        }
    }
}

function node(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors;
}