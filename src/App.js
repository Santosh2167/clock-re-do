import React,{Component} from 'react';
import Clock from "./Clock";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {location: null};
    }

    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude: position.coords.latitude}),
            error => console.log(error)
        );

        const {latitude} = this.state;
    
        return (
            <div>
                <p>{latitude}</p>
                <Clock 
                    icon="sun.svg"
                    timezone={"Sydney/Australia"} 
                    date={new Date()} 
                />
            </div>
        );


    }
}

// const App = (props) => {
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         error => console.log(error)
//     );

//     return (
//         <div>
//             <Clock 
//                 icon="sun.svg"
//                 timezone={"Sydney/Australia"} 
//                 date={new Date()} 
//             />
//         </div>
//     );
// }

export default App;
