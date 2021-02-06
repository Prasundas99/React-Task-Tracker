

const Task = () => {

const [tasks , setTasks] = useState(
    [
        {
                id:1,
                text:'Doc Appinment',
                day: 'Fed 5th',
                remainder:true
            },
        
            {
                id:2,
                text:'School meet',
                day: 'Fed 5th',
                remainder:false,
            },
        
            {
                id:3,
                text:'School meet',
                day: 'Fed 5th',
                remainder:false,
            }
        
    ]
)


    return (
        <div>
            {tasks.map((tasks) => {
                <h3 key={tasks.id}>
                    {tasks.text} 
                    </h3>
            })}    
        </div>
    )
}

export default Task;
