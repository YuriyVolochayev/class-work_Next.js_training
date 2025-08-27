import type { Note } from "@/lib/api";
import { SERVER_PROPS_EXPORT_ERROR } from "next/dist/lib/constants";

type Props = {
    item: Note;
};

const NoteItem = ({ item }: Props) => {
    return (
        <li>
            <p>{item.title}</p>
        </li>
    )
}

export default NoteItem