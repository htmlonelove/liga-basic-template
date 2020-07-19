import {polyfills} from './utils/polyfills';
import {ieFooterNailing} from './utils/ie-footer-nailing';

import {initModals} from './modules/init-modals';

// Utils
// ---------------------------------

polyfills();
ieFooterNailing();

// Modules
// ---------------------------------

initModals();
