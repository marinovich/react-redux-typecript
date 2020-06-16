import { connect } from 'react-redux';

import View from '../../components/View';

const mapStateToProps = state => ({
  info: state,
});

export default connect(mapStateToProps)(View);
