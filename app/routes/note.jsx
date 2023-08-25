import NewNote,{ links as NewNoteLinks} from "~/component/NewNote";
import { getStoredNotes, setStoredNotes } from "../data/notes";
import { redirect } from '@remix-run/node'

export default function NotesPage()
{
    return (
        
        <main>
            <NewNote/>
        </main>
    )
}


export async function action({request})
{
    
    const formData = await request.formData();
    // const data = {
    //     title : formData.get('title'),
    //     content : formData.get('content'),
    //     id : new Date().toISOString()
    // };

    const data = Object.fromEntries(formData);
     
    //Validation will be done here
    data.id = new Date().toISOString();
    const existingNotes = await getStoredNotes();
    const updateNotes = existingNotes.concat(data);
    await setStoredNotes(updateNotes);

    return redirect('/note');




        
    
}


export function links(){
    return [...NewNoteLinks()];
}
