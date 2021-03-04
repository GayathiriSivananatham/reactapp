//import logo from './logo.svg';
import './App.css';
import React from 'react';
import List from './listitem';
class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state=({
      item:[],
      currentitem:{
        text:'',
        key:''
      }
    });
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
  }
  
  /*Uservalue=(e)=>
  {
    this.setState({
      text:e.target.value,
      key:Date.now
    });
    
  }*/
  handleInput(e)
  {
    this.setState({
      currentitem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e)
  {
    e.preventDefault();
    const newitem=this.state.currentitem;
    console.log(newitem);
    if(newitem!=="")
    {
      const newitems=[...this.items,newitem];
      this.setState({
        items:newitems,
        currentitem:{
          text:'',
          key:''
        }
      })
    }
    
  }
  render()
  {
    return(
      <div className="head">
        <form id="forms" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter your text" value={this.state.currentitem.text} onChange={this.handleInput} />
            <button type="button">ADD</button> 
            <List items={this.state.items}></List>
        </form>
      </div>
    )
  }
}
export default App;
