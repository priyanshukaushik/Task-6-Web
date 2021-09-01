function addStudent(id, refreshCallback)
{
    refreshCallback();  
}

function refreshStudentList() {
    console.log('Hello This is Javascript file');
    console.log('Hello This is Javascript2 file');
}

addStudent(1, refreshStudentList);
