import Score from './Score'

const Student = (props) => {
  return (
    <>
    <h1>{props.student.name}</h1>
    <h2>{props.student.bio}</h2>

    {props.student.scores.map(score => <Score name={props.student.name} score={score} />)}
    </>
  );
}

export default Student;