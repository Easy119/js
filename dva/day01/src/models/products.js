export default {
    namespace: 'products',
    state: [
        { name: 'dva', id: 1 },
        { name: 'antd', id: 2 },
        { name: 'box', id: 3 }
    ],
    reducers: {
        'delete'(state, { payload: id }) {
            return state.filter(item => item.id !== id);
        },
    },
};