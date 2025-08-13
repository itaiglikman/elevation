export enum ActionType {
    AddItem = 'addItem',
    UpdateItem = 'updateItem',
    DeleteItem = 'deleteItem'
}

export function GeneralReducer(state: any, action: any) {
    const payload = action.payload;
    switch (action.type) {
        case 'Add_Item':
            return state.concat(payload)
        case 'Update_Item':
            return state.map((item: any) => item.id === payload.id ? { ...payload } : item);
        case 'Delete_Item':
            return state.filter((id: any) => id === payload.id);
        default:
            throw new Error();
    }
}

