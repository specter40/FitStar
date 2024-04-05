

const ItemList = (props) => {
    return (
        <Card className="user">
        {props.userList.map((item) => (
            <Item 
                day={item.day}
                activity={item.activity}
                time={item.time}
                calories={item.calories}
                heart={item.heart}          
            />

            
        ))}
        </Card>
    );
}