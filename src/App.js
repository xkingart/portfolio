import React,{Component} from 'react';
class App extends Component{
    constructor(){
        super();
        this.state = {displayBio: true};
        this.state = {displayEmail: true};

        //never change state directly  use state and set state

        this.readMore =() => {
            this.setState({displayBio: true});
        }
        this.readLess =() => {
            this.setState({displayBio: false});
        }
        
    }
render(){

    const bio = this.state.displayBio ?(
                    <div>
                       <p>I live in beautiful San Diego.</p>
                       <p>I love Javascript, and apps made in React.js</p>
                       <p>When I am not coding, you can find me drawing, taking photos, and cooking.</p>
                       <div>
                     <button onClick={this.readLess}>Show Less</button>
                     </div>   
                    </div>
              ): null;


            return(
                <div>
                    <h1>Hello!</h1>
                    <h2>My name is Xavier lets make something Beautiful</h2>
                    {bio}  {/*This is a variable being called to bring in whats inside bio */}
                        
                             
                     <div>
                     <button onClick={this.readMore}>Read More</button>
                     </div>
                               
                              
                </div>
                )
        }
} export default App;