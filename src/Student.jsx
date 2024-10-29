import PropTypes from 'prop-types'

function Student(props){
    return(
        <div class="student">
            <p>Name: {props.name}</p>               
            <p>age: {props.age}</p>               
            <p>Student: {props.isStudent ? "yes" : "NO"}</p>               
        </div>
    );
}

Student.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent:PropTypes.bool,
}
Student.defaultProps ={
    name:"Guest ",
    age:0,
    isStudent:false,
}
export default Student