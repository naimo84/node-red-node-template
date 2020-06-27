

module.exports = function (RED: any) {
    function config(config) {
        RED.nodes.createNode(this, config);

        this.config = this;
    }

  

    RED.nodes.registerType("template-config", config);
}