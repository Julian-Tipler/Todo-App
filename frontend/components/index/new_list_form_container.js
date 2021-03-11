import { connect } from 'react-redux';
import { createList } from '../../actions/list_actions';
import NewListForm from './new_list_form'

const msp = (state) => ({

})

const mdp = dispatch => ({
    createList: (listForm) => dispatch(createList(listForm))
})

export default connect(msp,mdp)(NewListForm)