
const Note = ({ id, text, date, handleRemoveNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<button className='remove' onClick={()=>handleRemoveNote(id)}>
					Remove
				</button>		
			</div>
		</div>
	);
};

export default Note;