import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';

//-- этот скрипт загружает модуль для тестирования, его не должно быть в финальном билде и на проде для клиента
import {testInstruments} from './vendor/testInstruments';
//--

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();

//-- этот скрипт загружает модуль для тестирования, его не должно быть в финальном билде и на проде для клиента
window.addEventListener('load', () => {
  testInstruments();
});
//--