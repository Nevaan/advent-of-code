import { OrbitNode, createRoot, createRelationsMap, buildTree, getTreeFromInput, getDeepnessFromInput } from '../task11';

describe('task11', () => {

    test('createRoot', () => {
        let result = new OrbitNode("D23");
        result.addChild(new OrbitNode("G34"));
        let methodResult = createRoot("D23)G34");
        expect(methodResult).toEqual(result);
    });

    test('createRelationsMap', () => {

        let input: string[] = [
            "A)B",
            "A)C",
            "B)D",
            "B)E",
            "B)F",
            "C)G"
        ]

        let expected = new Map<string, string[]>();
        expected.set("A", ["B", "C"]);
        expected.set("B", ["D","E","F"]);
        expected.set("C", [ "G" ]);

        expect(createRelationsMap(input)).toEqual(expected);

    })

    test('buildTree', () => {

        let input = new Map<string, string[]>();
        input.set("COM", ["2", "3"]);
        input.set("2", ["4"]);

        let result = buildTree(input);

        let expectRoot = new OrbitNode("COM");
        let n2 = new OrbitNode("2");
        let n3 = new OrbitNode("3");
        let n4 = new OrbitNode("4");

        expectRoot.addChild(n2);
        expectRoot.addChild(n3);
        n2.addChild(n4);
        
        expect(result).toEqual(expectRoot);

    });


    test('getTreeFromInput', () => {

        let input = [
            "COM)B",
            "B)C",
            "C)D",
            "D)E",
            "E)F",
            "B)G",
            "G)H",
            "D)I",
            "E)J",
            "J)K",
            "K)L"
        ]

        const nodeCom: OrbitNode  = new OrbitNode("COM");
        const nodeB: OrbitNode  = new OrbitNode("B");
        const nodeC: OrbitNode  = new OrbitNode("C");     
        const nodeD: OrbitNode  = new OrbitNode("D");
        const nodeE: OrbitNode  = new OrbitNode("E");
        const nodeF: OrbitNode  = new OrbitNode("F");
        const nodeG: OrbitNode  = new OrbitNode("G");
        const nodeH: OrbitNode  = new OrbitNode("H");        
        const nodeI: OrbitNode  = new OrbitNode("I");
        const nodeJ: OrbitNode  = new OrbitNode("J");
        const nodeK: OrbitNode  = new OrbitNode("K");
        const nodeL: OrbitNode  = new OrbitNode("L");

        nodeCom.addChild(nodeB);
        nodeB.addChild(nodeG);
        nodeB.addChild(nodeC);
        nodeG.addChild(nodeH);
        nodeC.addChild(nodeD);
        nodeD.addChild(nodeI);
        nodeD.addChild(nodeE);
        nodeE.addChild(nodeF);
        nodeE.addChild(nodeJ);
        nodeJ.addChild(nodeK);
        nodeK.addChild(nodeL);
        
        let result = getTreeFromInput(input);

        expect(result).toEqual(nodeCom);
    })

    test('getDeepnessFromInput', () => {
        let input = [
            "COM)B",
            "B)C",
            "C)D",
            "D)E",
            "E)F",
            "B)G",
            "G)H",
            "D)I",
            "E)J",
            "J)K",
            "K)L"
        ]

        expect(getDeepnessFromInput(input)).toEqual(42);
    });

})