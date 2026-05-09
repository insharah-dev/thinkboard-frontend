import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatDate } from '../lib/utils'
import api from "../lib/axios"
import toast from "react-hot-toast"
import Swal from "sweetalert2";

const NoteCard = ({ note, setNotes }) => {

    const handleDelete = async (e, id) => {
        e.preventDefault()

        const result = await Swal.fire({
            icon: "warning",
            title: "Deleted?",
            text: "Are you sure You want to delete this note..?",
            showCancelButton: true,
            confirmButtonText: "Yes, Deleted",
            cancelButtonText: "No",
        });

        if (!result.isConfirmed) return;

        try {
            await api.delete(`/${id}`)

            setNotes((prev) =>
                prev.filter(note => note._id !== id)
            )

            toast.success("Note Deleted Successfully!")

        } catch (error) {
            console.log("error in handleDelete", error);
            toast.error("Failed to delete note")
        }
    }

    return (
        <Link to={`/note/${note._id}`}
            className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D] '
        >
            <div className='card-body'>
                <h3 className='card-title text-base-content'>{note.title}</h3>
                <p className='text-base-content/70 line-clamp-3'> {note.content}</p>
                <div className='card-action justify-between items-center mt-4'>
                    <span className='text-sm text-base-content/60'>
                        {formatDate(new Date(note.createdAt))}
                    </span>
                    <div className='flex items-center gap-1'>
                        <PenSquareIcon className='size-4' />
                        <button className='btn btn-ghost btn-xs text-error' onClick={(e) => { handleDelete(e, note._id) }}>
                            <Trash2Icon className='size-4' />
                        </button>

                    </div>
                </div>

            </div>
        </Link>
    )
}

export default NoteCard

