import { FETCH_POST_REQ, FETCH_POST_SUCC, FETCH_POST_FAIL } from "./ActionType";

let initial_state = { loading: false, data: null, err: "" };

const PostReducers = (state = initial_state, actions) => {
    switch (actions.type) {
        case FETCH_POST_REQ: return { ...state, loading: true, err: "" };
        case FETCH_POST_SUCC: return { ...state, loading: false, data: actions.payload, err: "" };
        case FETCH_POST_FAIL: return { ...state, loading: false, data: null, err: actions.payload };
        default: return state
    }

}

export default PostReducers