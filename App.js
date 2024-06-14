let todo=[];

let req=prompt('please enter your request');

while(true){
    if(req=='quit'){
        console.log("quitting app");
        break;
    } else if(req=='delete'){
    //     todo.pop();
    //     console.log('task deleted');
         let del=prompt('Enter index of task you want to delete:');
         todo.splice(del,1);
         console.log('task deleted.')
    
     }
    else if(req=="list"){
        console.log('-------------------------');
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log('-------------------------');
    } else if(req=="add"){
        let task=prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    } else
    {
        console.log('Wrong request.');
    }
    req=prompt("please enter your request");
    
}