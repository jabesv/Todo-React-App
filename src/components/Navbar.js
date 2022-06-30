const Navbar = () => {
    return (
        <nav style={styles.navstyle}>
            <h1>Todos App</h1>

            <ul>
                <li>Home</li>
                <li>Todos</li>
            </ul>
        </nav>
    )
}

const styles = {
    navstyle: {
        display: 'flex',
        justifyContent: 'space-around',
        border: 'solid green 2px'
    }
}

export default Navbar