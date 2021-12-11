
const _ENV = {
  hyperengine: null,
};


const _TEST_DIAGRAM_A = {

  run: () => {
    const { engine } = _ENV.hyperengine;

    const _info = engine.diagramInfo();
    console.log('Diagram info', {_info});  // TODO: REMOVE DEBUG LOG 📏⏳🔍

    engine.diagramProcess.addExternalProcess({ id: 'doSomething', process: ({ engine, data }) => {
      console.log('Process dosomething', { engine, data });  // TODO: REMOVE DEBUG LOG 📏⏳🔍
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
    console.log('Diagram info', {_info});  // TODO: REMOVE DEBUG LOG 📏⏳🔍

    engine.diagramProcess.addExternalProcess({ id: 'doSomething', process: ({ engine, data }) => {
      console.log('Process dosomething', { engine, data });  // TODO: REMOVE DEBUG LOG 📏⏳🔍
      data.dataOUT.state01.newprop = 'somevalue';
      engine.dataControl.updateOutputDATA();
    }});

    engine.diagramProcess.addExternalProcess({ id: 'moreThings', process: ({ engine, data }) => {
      console.log('Process moreThings', { engine, data });  // TODO: REMOVE DEBUG LOG 📏⏳🔍
    }});
    // engine.flowSignals.listenToSignal({ signal: 'somesSignal', listener: () => {
    // }});

    engine.flowSignals.notifySignal({ signal: 'start' });
  },
};

const _ENGINE_TESTS = {
  init: () => {
    console.log('Engine tests', { hyperengine: window.HyperEngine });  // TODO: REMOVE DEBUG LOG 📏⏳🔍
    _ENV.hyperengine = window.HyperEngine;
    _ENV.hyperengine.diagram.node.init();  // Initialize hyperdiagram 🧩⚙
    _ENV.hyperengine.engine.init({ hyperdiagram: _ENV.hyperengine.diagram });  // Initialize hyperengine 🧩⚙
  },

  loadDiagram: async ({ url }) => {
    return fetch(url)
    .then(response => {
      return response.json();
    }).then(data => {
      _ENV.hyperengine.engine.dataControl.clearDATA();
      _ENV.hyperengine.engine.flowSignals.clearSignals();
      _ENV.hyperengine.engine.diagramProcess.clearExternalProcesses();
      _ENV.hyperengine.diagram.loadDATA({ data });
      _ENV.hyperengine.engine.diagramProcess.processDiagram();
    })
  },
};


document.addEventListener("DOMContentLoaded", async () => {
  _ENGINE_TESTS.init();
  await _ENGINE_TESTS.loadDiagram({ url: './hyperdiagram-data-A.json' });
  _TEST_DIAGRAM_A.run();
  await _ENGINE_TESTS.loadDiagram({ url: './hyperdiagram-data-B.json' });
  _TEST_DIAGRAM_B.run();
});

// window._engineTests = _ENGINE_TESTS;