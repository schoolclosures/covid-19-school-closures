import { connect } from 'react-redux';
import NewsletterForm from '../../components/newsletter-form/NewsletterForm.component';
import { subscribeToNewsletter } from '../../actions/newsletter/newsletter.actions';

const mapStateToProps = state => ({
  subscribeStatus: state.newsletterReducer.subscribeStatus,
});

const mapDispatchToProps = dispatch => ({
  doSubscribe: (emailAddress) => dispatch(subscribeToNewsletter(emailAddress)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsletterForm);
