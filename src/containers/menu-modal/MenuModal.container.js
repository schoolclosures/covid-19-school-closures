import { connect } from 'react-redux';
import MenuModal from '../../components/menu-modal/MenuModal.component';
import { closeModal } from '../../actions/menu/menu.actions';

const mapStateToProps = state => ({
  modalIsOpen: state.sharedReducer.modalIsOpen,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuModal);
