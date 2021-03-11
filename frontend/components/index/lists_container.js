import { connect } from 'react-redux';
import { fetchLists } from '../../actions/list_actions';
import Lists from './lists'

const msp = (state) => ({
    lists: state.lists
})

const mdp = dispatch => ({
    fetchLists: ()=> dispatch(fetchLists())
})

export default connect(msp,mdp)(Lists)