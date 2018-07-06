import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RouterMap from './router/index';

import 'antd/dist/antd.css';
import '@style/common.css';
import '@font/iconfont.css';

class App extends Component {

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    render() {

        return(
            <div>
                <RouterMap />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
    initUser: bindActionCreators(initUser, dispatch),
    updateId: (id) => {
        dispatch(update_id(id))
    },
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default withRouter(AppContainer)
