const message = 'Hello World!';

//we want any component to be able to access this data
// reducer calculates current state
const helloReducer = (state, action) => {
    return message;
};
export default helloReducer;