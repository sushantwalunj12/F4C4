import { FETCH_PROFILE_REQ, FETCH_PROFILE_SUCC, FETCH_PROFILE_FAIL } from "./ActionType";

let initial_state = { loading: false, data: null, err: "" };
const ProfileReducers = (state = initial_state, actions) => {
    switch (actions.type) {
        case FETCH_PROFILE_REQ: return { ...state, loading: true, err: "" };
        case FETCH_PROFILE_SUCC: return { ...state, loading: false, data: actions.payload };
        case FETCH_PROFILE_FAIL: return { ...state, loading: false, data: null, err: actions.payload };
        default: return state;

    }
}

export default ProfileReducers