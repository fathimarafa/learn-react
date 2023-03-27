
import './App.css';
import Courses from './Courses';

const content = "Cybersquare proffessional";
const object = {"name":"Teena" , "age": 15};
const courses = ["python", "Angular" , "react"];

function App() {
  return (
    <div>
      <h1>content</h1>
      <h1>{content}</h1>
      <p>
        {object.name} is {object.age} years old
      </p>

      <ul>
        {
          courses.map(function (item,index){
            return <Courses data={item}/>
          })
        }
      </ul>

    </div>
  );
}

export default App;
