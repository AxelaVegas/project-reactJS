import React from 'react';

export class Meeting extends React.Component {
    constructor(props) {
        super(props);
      }

    handelChange = (ev) => {
        this.props.changeAge(ev.target.value)
    }

    render() {
        return <div className='body'>
                    <div className='app-body'>
                        <p>Well, how old are you</p>
                        <input type='text' onChange={this.handelChange}/>
                    </div>
                </div>
    }
}

