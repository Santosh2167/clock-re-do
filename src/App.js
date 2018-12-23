import React,{Component} from 'react';
import Clock from "./Clock";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {location: null};

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude: position.coords.latitude}),
            error => console.log(error)
        );
    }

    isWarm() {
        const {latitude}= this.state;
        const date = new Date();
        const month = date.getMonth();

        if(latitude){
            if (month>=4 && month<=9 && latitude > 0){
                console.log("it is above equator so hot here");
            } else if (month<=3 && month>=10 && latitude<0){
                console.log("it is below equator and it is winter here");
            } else {
                console.log("exactly at equator");
            }
        } else {
            console.log("latitude is not available")
        }

        

    }

    render() {

        this.isWarm();

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
