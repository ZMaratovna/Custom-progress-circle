import {atom} from 'recoil';

import { tests } from '../mocks/tests';

export const testsListAtom = atom({
    key: 'testsListAtom',
    default: tests
});
