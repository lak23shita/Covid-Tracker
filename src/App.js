import React ,{Component} from 'react';
import logo from './components/logo.png';
import styles from './App.module.css';
import { Cards,Chart,CountryPicker } from "./components";
import {fetchData} from './api';
import Toggle from './components/Toggle';
import DarkModeToggle from "react-dark-mode-toggle";
 class App extends React.Component {
  state={
    data:{ },
    country: '',
  }

  handleCountryChange = async(country)=>{
    const fetchedData= await fetchData(country);
    this.setState({data : fetchedData, country:country});
    
  }

  //is called when the page re-renders
  //as we are using the function which is async that is why componentdidmount should  await
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data : fetchedData});
    
  }
   render(){
     const {data, country} = this.state;
     return(
        <div className={styles.container } >
        <div className={styles.navbar}>
          <img className={styles.logo} src={logo} />
          <Toggle />
        </div>
         { /*these are the props*/}
          <Cards data={data}/>
          <CountryPicker handleCountryChange={this.handleCountryChange}/>
          <Chart data={data} country={country} />
          
      </div>
     );
   }
  }

export default App;
