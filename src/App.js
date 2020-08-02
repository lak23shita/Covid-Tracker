import React ,{Component} from 'react';
import logo from './components/logo.png';
import styles from './App.module.css';
import { Cards,Chart,CountryPicker } from "./components";
import {fetchData} from './api';
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
        <div className={styles.container}>
          <img className={styles.logo} src={logo} />
         { /*these are the props*/}
          <Cards data={data}/>
          <CountryPicker handleCountryChange={this.handleCountryChange}/>
          <Chart data={data} country={country} />
          
      </div>
     );
   }
  }

export default App;
