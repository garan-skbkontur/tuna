import {BehaviorSubject, Observable} from "rxjs";
import {DescribedNode} from "./describedNode";

export class StructureService {
    private _nodes: BehaviorSubject<DescribedNode[]>;
    public nodes$: Observable<DescribedNode[]>;

    constructor() {
        this._nodes = new BehaviorSubject<DescribedNode[]>([]);
        this.nodes$ = this._nodes.asObservable();
    }

    push(node: DescribedNode) {
        const x = this._nodes.getValue();
        x.push(node);
        this._nodes.next([...x]);
    }

    appendTo(target: HTMLElement, node: DescribedNode) {
        const storedTarget = this._nodes
            .getValue()
            .filter(n => n.node === target)[0];
        if (!storedTarget) {
            throw new Error('Target element was not found');
        }
        storedTarget.children.push(node);
    }
}

export default new StructureService();