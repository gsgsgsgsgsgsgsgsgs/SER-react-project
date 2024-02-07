import { Link } from "react-router-dom";
import { counterStore } from "../../stores/ConterExports";
import { observer } from "mobx-react-lite";

const Counter = observer(() => {
    const handleClick = () => {
        counterStore.increment()
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Counter</h1>

            <hr />

            <button onClick={handleClick}>Rajoute</button>
            <h2>Number of counts: {counterStore.getCounter()}</h2>
        </div>
    )
})

export default Counter;