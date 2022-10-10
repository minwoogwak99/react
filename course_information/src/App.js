const Course = ({ course }) => {
  let total = course.parts.reduce((s, p) => {
    return s + p.exercises;
  }, 0);

  return (
    <div>
      <h1>{course.name}</h1>
      <div>
        {course.parts.map((part) => {
          return (
            <div>
              {part.name} {part.exercises}
            </div>
          );
        })}
      </div>
      <div>total: {total}</div>
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
