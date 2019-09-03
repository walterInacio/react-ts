interface State {
  id: string;
  name: string;
}

const user = (state: State | undefined): State => {
  return state || { id: '', name: '' };
};

export default user;
