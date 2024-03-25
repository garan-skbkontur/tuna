import "./Layer.scss"
import {DescribedNode} from "../../services/describedNode";

export type LayerProps = {
    node: DescribedNode,
}

export default function Layer(props: LayerProps) {
    const node = props.node;
    return (
        <div className="layer">
            {node.name && <div className="layer__name">{node.name}</div>}
            {!node.name && <div className="layer__name--tag-name">
                <span className="tag">
                    <span className="tag__brace">&lt;</span>
                    <span className="tag__name">{node.node.nodeName}</span>
                    <span className="tag__brace">&gt;</span>
                </span>
            </div>}
        </div>
    );
}