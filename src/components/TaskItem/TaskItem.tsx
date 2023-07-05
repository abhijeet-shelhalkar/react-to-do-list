import "./TaskItem.css";

function TaskItem(props: any) {

  const onDeleteCall = (id: any) => {
    props.onDeleteHandler(id);
  };

  const onEditCall = (item: any) => {
    props.onEditHandler(item);
  };

  return (
    <>
      <div className="list-item">
        <div>{props.itemdata.name || "Task Name"}</div>
        <div className="action-btns">
          <button
            type="button"
            className="button-4"
            onClick={() => {
              onDeleteCall(props.itemdata.id);
            }}
          >
            Delete
          </button>
          <button
            type="button"
            className="button-4"
            onClick={() => {
              onEditCall(props.itemdata);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default TaskItem;
