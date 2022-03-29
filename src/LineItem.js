
const LineItem = ({item}) => {
    return (
        <>
            {item.map((element) => (
            <li key={element.id}>
                {JSON.stringify(element)}
            </li>
            ))}
        </>
    )
}

export default LineItem