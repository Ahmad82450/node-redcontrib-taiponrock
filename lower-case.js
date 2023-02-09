module.exports = function(RED) {
    function lowerCaseNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        })
    }
    RED.nodes.registerType("lower-case", lowerCaseNode);
}