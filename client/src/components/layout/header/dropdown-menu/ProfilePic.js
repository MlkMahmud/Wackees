import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ProfilePic = ({ image }) => (
  <div className="profile_pic_container">
    <img src={image} alt="profile-pic" className="profile_pic" />
  </div>
);

ProfilePic.defaultProps = {
  image: 'https://res.cloudinary.com/mlkmahmud/image/upload/v1561483741/guy-fawkes.png',
};

ProfilePic.propTypes = {
  image: PropTypes.string,
};

const mapStateToProps = state => ({
  image: state.currentUser.image,
});

export default connect(mapStateToProps)(ProfilePic);
