export class DescribedNode {
    public node: HTMLElement;
    public name: string | undefined;

    constructor(node: HTMLElement, name: string | undefined = undefined) {
        this.node = node;
        this.name = name;
    }
}