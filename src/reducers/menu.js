export default function ( state={open: true}, action ) {
  switch(action.type) {
    case 'TOGGLE_MENU':
      let toggled = !state.open;
      return {...state, open: toggled};
    default:
      return {...state}
  }
}
