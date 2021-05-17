import React,{Component} from 'react';
import css from './App.css'

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }
    updateInput(key,value){
      //updte react state
      this.setState({
        [key]:value
      });
    }

  addItem(){
    //create item with unique id
    const newItem={
      id: 1 + Math.random(),
      value:this.state.newItem.slice()
    };

    //copy of current list of items
    const list =[...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem:""
    });
  }
  deleteItem(id){
    //copy current list of items
    const list =[...this.state.list];

    //filter out item being deleted
    const updateList = list.filter(item => item.id !== id);
    this.setState({list:updateList});
  }

  render(){
    return(
      <div className="App">
        <div>
          TO DO LIST
          <br/>
          <input className="AAA"
          type="text"
          placeholder="入力"
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem",e.target.value)}
          />
          <button className="BBB"
          onClick={()=> this.addItem()}
          >
            追加
          </button>
          <br/>
          <ul>
            {this.state.list.map(item =>{
              return(
                <li key={item.id}>
                  {item.value}
                  <button
                  onClick={() => this.deleteItem(item.id)}
                  >
                    消
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
