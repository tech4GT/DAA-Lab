(function() {

    let graph = [
        [Number.MAX_SAFE_INTEGER, 1, 7],
        [1, Number.MAX_SAFE_INTEGER, 5],
        [7, 5, Number.MAX_SAFE_INTEGER]];

    console.log(djkstra(graph, 0));

})();


function djkstra(graph, src) {
    let visited = [], dist = [], rv = new Array(graph.length), count = 0;
    for (let i in graph) dist.push(Number.MAX_SAFE_INTEGER);
    dist[src] = 0;
    while (count < graph.length) {
        let min = findMin();
        rv[min] = dist[min];
        visited[min] = true;
        count++;
        for (let i = 0; i < dist.length; i++) {
            if (!visited[i] && dist[i] > graph[min][i] + dist[min])
                dist[i] = graph[min][i] + dist[min];
        }
        dist[min] = Number.MAX_SAFE_INTEGER;
    }

    function findMin() {
        let min = Number.MAX_SAFE_INTEGER, minInd = -1;
        for (el in dist) {
            min = min < dist[el] ? min : dist[el];
            minInd = min < dist[el] ? minInd : el;
        }
        return parseInt(minInd);
    }
    return rv;
}