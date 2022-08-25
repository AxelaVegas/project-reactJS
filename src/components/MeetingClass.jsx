import React from 'react';

export class Meeting extends React.Component {
    constructor(props) {
        super(props);
        this.changeName = this.changeName.bind(this);
        this.state = {name: ''};
      }

    handelChange = (ev) => {
        this.setState({name: ev.target.value})
        console.log(ev.target.value)
        this.changeName(ev.target.value)
    }

    render (){
        return <div className='body'>
                    <div className='app-body'>
                        <p>So, meeting! What is your name</p>
                        <input type='text' onChange={this.handelChange}/>
                    </div>
                </div>
    }
}

