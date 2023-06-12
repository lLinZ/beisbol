export const AUTH_ACTIONS = {
    login: 'Auth - Login',
    logout: 'Auth - Logout',
}
type Reducer = (
    state: any,
    action: any,
) => any;

export const authReducer: Reducer = (state, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.login:
            return {
                ...action.payload,
                logged: true,
            };

        case AUTH_ACTIONS.logout:
            return {
                logged: false,
            };
        default:
            return state;
    }
}