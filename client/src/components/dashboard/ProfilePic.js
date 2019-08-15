import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import updatePhoto from '../../dispatchers/updateProfilePic';

const ProfilePic = ({ image, loading, update }) => (
  <div className="dashboard_user_profile_pic_container">
    <img className="dashboard_user_profile_pic" src={image} alt="profile-pic" />
    <form onClick={update} className="profile_pic_form" name="profile" method="POST" encType="multipart/form-data">
      {loading ? (
        <FontAwesomeIcon icon="spinner" spin />
      ) : (
        <FontAwesomeIcon icon="plus" />
      )}
      <input name="image" type="file" accept="image/*" />
    </form>
  </div>
);

ProfilePic.propTypes = {
  image: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  update: PropTypes.func.isRequired,
};

const mapStateToProps = ({ loading }) => ({
  loading,
});

const mapDispatchToProps = {
  update: updatePhoto,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePic);
