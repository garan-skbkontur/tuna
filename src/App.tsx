import React, {useEffect, useRef} from 'react';
import './App.scss';

import Toolbox from './components/toolbox/Toolbox';
import Properties from "./components/properties/Properties";
import Board from "./components/board/Board";
import Cursor from "./components/cursor/Cursor";

import mousePositionService from "./services/mousePositionService";
import {filter, fromEvent } from "rxjs";
import toolboxService from "./services/toolboxService";

function App() {
    const appRoot = useRef(null);

    useEffect(() => {
        mousePositionService.fromNode(appRoot.current!);
        fromEvent(document, 'keydown', e => e as KeyboardEvent)
            .pipe(filter(e => e.key === 'Escape'))
            .subscribe(_ => {
                toolboxService.setTool(undefined);
            });
    }, [])


    return (
        <div className="app-root" ref={appRoot}>
            <main className="desktop">
                <Board/>
            </main>
            <Toolbox/>
            <Properties/>
            <Cursor/>
        </div>
    );
}

export default App;
