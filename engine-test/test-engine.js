
const _ENV = {
  hyperengine: null,
};


const _TEST_DIAGRAM_A = {

  run: () => {
    const { engine } = _ENV.hyperengine;
    const _info = engine.diagramInfo();
    console.log('_TEST_DIAGRAM_A Diagram info', {_info});  // TODO: REMOVE DEBUG LOG 📏⏳🔍

    engine.diagramProcess.addExternalProcess({ id: 'doSomething', process: ({ engine, data }) => {
      console.log('_TEST_DIAGRAM_A Process dosomething', { engine, data });  // TODO: REMOVE DEBUG LOG 📏⏳🔍
    }});

    // engine.flowSignals.listenToSignal({ signal: 'somesSignal', listener: () => {
    // }});

    engine.flowSignals.notifySignal({ signal: 'start' });
  },
};

const _TEST_DIAGRAM_B = {
  run: () => {
    const { engine } = _ENV.hyperengine;

    const _info = engine.diagramInfo();
    console.log('_TEST_DIAGRAM_B Diagram info', {_info});  // TODO: REMOVE DEBUG LOG 📏⏳🔍

    engine.diagramProcess.addExternalProcess({ id: 'doSomething', process: ({ engine, data }) => {
      console.log('_TEST_DIAGRAM_B Process dosomething', { engine, data });  // TODO: REMOVE DEBUG LOG 📏⏳🔍
      data.dataOUT.state01.newprop = 'somevalue';
      engine.dataControl.updateOutputDATA();
    }});

    engine.diagramProcess.addExternalProcess({ id: 'moreThings', process: ({ engine, data }) => {
      console.log('_TEST_DIAGRAM_B Process moreThings', { engine, data });  // TODO: REMOVE DEBUG LOG 📏⏳🔍
    }});
    // engine.flowSignals.listenToSignal({ signal: 'somesSignal', listener: () => {
    // }});

    engine.flowSignals.notifySignal({ signal: 'start' });
  },
};


const _TEST_DIAGRAM_C = {
  run: async () => {
    const { engine, diagram } = _ENV.hyperengine;
    const testDiagram = diagram.createHyperDiagram();
    const testEngine = engine.createEngine(testDiagram);

    await _ENGINE_TESTS.loadDiagram({ url: 'hyperdiagram-data-B.json', diagram: testDiagram, engine: testEngine });
    
    const _info = testEngine.diagramInfo;
    console.log('_TEST_DIAGRAM_C Diagram info', {_info});  // TODO: REMOVE DEBUG LOG 📏⏳🔍

    testEngine.diagramProcess.addExternalProcess({ id: 'doSomething', process: ({ engine, data }) => {
      console.log('_TEST_DIAGRAM_C Process dosomething', { engine, data });  // TODO: REMOVE DEBUG LOG 📏⏳🔍
      data.dataOUT.state01.newprop = 'somevalue';
      engine.dataControl.updateOutputDATA();
    }});

    testEngine.diagramProcess.addExternalProcess({ id: 'moreThings', process: ({ engine, data }) => {
      console.log('_TEST_DIAGRAM_C Process moreThings', { engine, data });  // TODO: REMOVE DEBUG LOG 📏⏳🔍
    }});
    // engine.flowSignals.listenToSignal({ signal: 'somesSignal', listener: () => {
    // }});

    testEngine.flowSignals.notifySignal({ signal: 'start' });
  },
};


const _ENGINE_TESTS = {
  init: () => {
    console.log('Engine tests', { hyperengine: window.HyperEngine });  // TODO: REMOVE DEBUG LOG 📏⏳🔍
    _ENV.hyperengine = window.HyperEngine;
    _ENV.hyperengine.engine.init({ hyperdiagram: _ENV.hyperengine.diagram });  // Initialize hyperengine 🧩⚙
  },

  loadDiagram: async ({ url, diagram = _ENV.hyperengine.diagram, engine = _ENV.hyperengine.engine }) => {
    return fetch(url)
    .then(response => {
      return response.json();
    }).then(data => {
      engine.clearEngine();
      diagram.loadDATA({ data });
      engine.diagramProcess.process();
    })
  },
};


document.addEventListener("DOMContentLoaded", async () => {
  _ENGINE_TESTS.init();
  await _ENGINE_TESTS.loadDiagram({ url: './hyperdiagram-data-A.json' });
  _TEST_DIAGRAM_A.run();
  await _ENGINE_TESTS.loadDiagram({ url: './hyperdiagram-data-B.json' });
  _TEST_DIAGRAM_B.run();
  _TEST_DIAGRAM_C.run();
});

// window._engineTests = _ENGINE_TESTS;