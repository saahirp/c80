name_student_array = [];

function showarrayvalues(){
    var display_student = [];
for (var j = 1; j<= 5; j++)
{
    var name_of_student  = document.getElementById("student_"+j).value;
    console.log("student_");
    name_student_array.push(name_of_student);
}

console.log(name_student_array);
var qwerty = name_student_array.length;
console.log(qwerty);
for (var k = 0; k < qwerty; k++ ){
    display_student.push("<h4>NAME - "+ name_student_array[k]+"</h4>");
    console.log(display_student);
}
console.log(display_student);
document.getElementById("divonecommas").innerHTML = display_student;
var displaynocommas = display_student.join(" ");
console.log(displaynocommas);
 document.getElementById("divtwonocommas").innerHTML = displaynocommas;
document.getElementById("firstbutton").style.display="none";

document.getElementById("secondbutton").style.display = "inline-block";

}
function sortarrayvalues(){
    name_student_array.sort();
    console.log(name_student_array);

    var display_student_array_sort = [];

    var length_of_name_students = name_student_array.length;
    console.log(length_of_name_students);

    for (var k = 0; k< length_of_name_students; k++ ){
        display_student_array_sort.push("<h4>NAME - "+ name_student_array[k]+"</h4>");
        console.log(display_student_array_sort);
    }
    var displaynocommas = display_student_array_sort.join(" ");
    console.log(displaynocommas);
    document.getElementById("divtwonocommas").innerHTML = displaynocommas;

}
