
import { Red, Node } from 'node-red';

module.exports = function (RED: Red) {
    function templateNode(config: any) {
        RED.nodes.createNode(this, config);
        let configNode = RED.nodes.getNode(config.confignode);
        if (!configNode) {
            this.error("Config is missing!")
            return;
        }
        let node = this;
        node.config = configNode;
       
    }

    RED.nodes.registerType("template-node", templateNode);
}