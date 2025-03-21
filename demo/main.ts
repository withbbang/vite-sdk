import './style.css';
import { Operations } from '../src/index';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

const OperationsSingleton = Operations.init({ value: 'initial value' });

OperationsSingleton.getMethodTest();
OperationsSingleton.getValue();
