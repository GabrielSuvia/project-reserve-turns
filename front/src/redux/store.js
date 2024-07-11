import {createState} from 'Redux'
import { Reducer } from './reducer'

const store = createState(Reducer);

export default store;