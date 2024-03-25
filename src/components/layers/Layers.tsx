import {useEffect, useState} from "react";
import nodesService from "../../services/nodesService";
import Layer from "./Layer";
import {DescribedNode} from "../../services/describedNode";

export default function Layers() {
    const [nodes, setNodes] = useState<DescribedNode[]>([]);

    useEffect(() => {
        nodesService.nodes$.subscribe(nodes => {
            setNodes(nodes ?? []);
            console.log(nodes);
        });
    }, []);


    return (
        <>
            {nodes.map((node, index) =>
                <Layer key={`${node.name}_${index}`}
                       node={node} />)}
        </>
    );
}