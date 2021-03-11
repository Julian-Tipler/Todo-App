import { connect } from 'react-redux';
import { fetchLists, createList, destroyList } from '../../actions/list_actions';
import Lists from './lists'

const msp = (state) => ({
    lists: state.lists
})

const mdp = dispatch => ({
    fetchLists: ()=> dispatch(fetchLists()),
    createList: (listForm)=> dispatch(createList(listForm)),
    destroyList: ((list)=> dispatch(destroyList(list)))
})

export default connect(msp,mdp)(Lists)