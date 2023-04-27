import ColaGenerator from './classes/colaGenerator.js';
import VendingMachineEvent from './classes/vendingMachineEvent.js';

const colaGenerator = new ColaGenerator();
const vendingMachineEvent = new VendingMachineEvent();

// 탑레벨 await : 최상위 모듈에서 실행되는 await
await colaGenerator.setup();
vendingMachineEvent.bindEvent();
