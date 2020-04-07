import { connect } from 'react-redux';
import NavBar from '../../components/navbar/NavBar.component';
import { openModal } from '../../actions/menu/menu.actions';

const mapStateToProps = state => ({
  modalIsOpen: state.sharedReducer.modalIsOpen,
});

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
