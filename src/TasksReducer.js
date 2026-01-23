export default function tasksReducer(draft, action) {
    //reducer must be pure
  switch (action.type) {
    case "added": {
        draft.push(
            {
                id: action.id,
                text: action.text,
                done: false,
            }
        );
        break;
    }
    case "changed": {
      const index=draft.FindIndex(t=>t.id===action.task.id)
        draft[index]=action.task;
        break;
    }
    case "deleted": {
      return draft.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("unknow action " + action.type);
    }
  }
}
