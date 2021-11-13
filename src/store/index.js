import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import listJobsReducer from "containers/client/components/ListJobs/modules/reducer"
import validateUser from "components/client/header/modules/reducer"
const rootReducer = combineReducers({
  listJobsReducer,
  validateUser
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
