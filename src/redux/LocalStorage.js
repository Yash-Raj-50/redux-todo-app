export function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

// load string from localStarage and convert into an Object
// invalid output must be undefixned
const initialState = { todos: [], filter: 'ALL', searchTerm: '' };
export function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return initialState;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}