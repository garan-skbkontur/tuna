import {BehaviorSubject, Observable} from "rxjs";
import {DescribedNode} from "./describedNode";

export class NodesService {
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
}

export default new NodesService();