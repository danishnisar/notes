import {Links} from "@remix-run/react"
import noteStyle from '~/component/Notelist.css'


function Notelist({notes}){

    return(

        <ul id="note-list">
        {notes.map((note, index) => (
          <li key={note.id} className="note">
            <article>
              <header>
                <ul className="note-meta">
                  <li>#{index + 1}</li>
                  <li>
                    <time dateTime={note.id}>
                      {new Date(note.id).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </time>
                  </li>
                </ul>
                <h2>{note.title}</h2>
              </header>
              <p>{note.content}</p>
            </article>
          </li>
        ))}
      </ul>
    );

}
export default Notelist;

export function links(){
    return [{rel:'stylesheet',href:noteStyle}];
}