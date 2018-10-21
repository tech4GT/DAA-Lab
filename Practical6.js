(function() {
    let vertices = [0, 1, 2, 3, 4, 5, 6, 7, 8], edges = [
        { u: 0, v: 1, weight: 4 },
        { u: 0, v: 7, weight: 8 },
        { u: 1, v: 7, weight: 11 },
        { u: 7, v: 8, weight: 7 },
        { u: 6, v: 7, weight: 1 },
        { u: 1, v: 2, weight: 8 },
        { u: 2, v: 8, weight: 2 },
        { u: 6, v: 8, weight: 6 },
        { u: 2, v: 5, weight: 4 },
        { u: 3, v: 4, weight: 9 },
        { u: 2, v: 3, weight: 7 },
        { u: 4, v: 5, weight: 10 },
        { u: 3, v: 5, weight: 14 },
        { u: 5, v: 6, weight: 2 }];
    console.log(kruskalMST(vertices, edges));
})();

function kruskalMST(vertices, edges) {

    let ds = new disjointSetDS(vertices), rv = [];

    //sorts the edges on weight
    edges.sort((arg1, arg2) => arg1.weight - arg2.weight);
    for (let edge of edges) {
        if (ds.findSet(edge.u) != ds.findSet(edge.v)) {
            ds.union(edge.u, edge.v);
            rv.push(edge);
        }
    }
    return rv;
}


function disjointSetDS(vertices) {
    this.map = {};
    for (let vertex of vertices)
        this.map[vertex] = new Node(vertex, 0);

    this.findSet = function(data) {
        let node = this.map[data];
        while (node.parent != node)
            node = node.parent;
        this.map[data].parent = node;
        this.map[data].rank = 0;
        return node;
    }

    this.union = function(v1, v2) {
        let nodeL = this.findSet(v1), nodeR = this.findSet(v2);
        if (nodeL.rank == nodeR.rank) {
            nodeL.rank++;
            nodeR.parent = nodeL;
        } else if (nodeL.rank > nodeR.rank) {
            nodeR.parent = nodeL;
        } else {
            nodeL.parent = nodeR;
        }
    }
}

function Node(data, rank) {
    this.data = data;
    this.parent = this;
    this.rank = rank;
}