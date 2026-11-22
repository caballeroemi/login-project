

interface Props{
    name: string;
}

function WelcomePage(props:Props){
    return(
    <div>
        <h1>Welcome back!</h1>
        <h1>Hello, {props.name}!</h1>
    </div>
    )
}

export default WelcomePage