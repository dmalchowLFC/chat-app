import React from 'react';

class messageBar extends React.Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <input id="messageBar" placeholder="Say something..."></input>
                    </div>
                </div>

            </div>
        )
    }
}

export default messageBar