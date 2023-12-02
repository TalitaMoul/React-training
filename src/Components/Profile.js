import './Profile.css'

const Profile = ({character_name}) => {
  return (
    <div className='profile_container'>
        <div className='character_photo'>

        </div>
        <div className="character_s_name">
            <h5>{character_name}</h5>
        </div>
    </div>
  )
}

export default Profile