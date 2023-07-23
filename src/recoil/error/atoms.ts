import {atom} from 'recoil';
import { Status } from '../../enum/status';
export const errorState = atom({
    key : 'errorState',
    default : Status.OK
});