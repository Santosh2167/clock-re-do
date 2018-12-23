import React,{Component} from 'react';
import Clock from "./Clock";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {location: null,errorMessage: ""};

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude: position.coords.latitude}),
            error => this.setState({errorMessage: error.message})
        );
    }

    isWarm() {
        const {latitude}= this.state;
        console.log(`latitude ${latitude}`);
      
        if(latitude){
            const month = new Date().getMonth();

            if (month>=4 && month<=9 && latitude > 0){
                console.log("month>=4 && month<=9 && latitude > 0");
                return true;
                
            } else if (month<=4 || month>=9 && latitude<0){
                console.log("month<=4 || month>=9 && latitude<0");
                return true;
            } else if (latitude ===0){
                console.log("latitude ===0");
                return true; 
            }
        } 
                console.log("out of if statement");
                return false;

        

    }

    getClockIcon(){
        if(this.isWarm()){
            return "sun.svg";
        }

        return "snowflake.svg";
    }

    render() {

        const {latitude,errorMessage} = this.state;
        //console.log("error is "+errorMessage);

        console.log('Render:', latitude, errorMessage);
    
        return (
            <div>
                {/* <p>{latitude}</p> */}
                {errorMessage || 

                        <Clock 
                        icon={latitude ? this.getClockIcon(): null}
                        timezone={"Sydney/Australia"} 
                        date={new Date()} 
                        />
                    
                }

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
