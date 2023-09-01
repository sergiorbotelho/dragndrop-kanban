import { useSortable } from "@dnd-kit/sortable";
import TrashIcon from "../icons/TrashIcon";
import { Column, Id } from "../types";
import { CSS } from "@dnd-kit/utilities";
interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
}

function ColumnContainer({ column, deleteColumn }: Props) {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({
      id: column.id,
      data: {
        type: "Column",
        column,
      },
    });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
      bg-columnBackgroundColor
      w-[350px]
      h-[500px]
      max-h-[500px]
      rounded-md
      flex
      flex-col
    "
    >
      <div
        {...attributes}
        {...listeners}
        className="
      bg-mainBackGroundColor
      text-md
      h-[60px]
      cursor-grab
      rounded-md
      rounded-b-none
      p-3
      font-bold
      border-columnBackgroundColor
      border-4
      flex
      justify-between
      "
      >
        <div className="flex gap-2 items-center">
          <div
            className="
            flex
            justify-center
            items-center
            bg-columnBackgroundColor
            px-2
            py-1
            text-sm
            rounded-full
          "
          >
            0
          </div>
          {column.title}
        </div>
        <button
          onClick={() => deleteColumn(column.id)}
          className="
            flex
            justify-centers
            items-center
            stroke-gray-500
            hover:bg-columnBackgroundColor
            rounded
            px-1
            py-2
          "
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}

export default ColumnContainer;
