import './styles.css'
import avatar from '../../assets/images/img_avatar.png'

const ProfileCard = ({ profileData }) => {
    const statusStyles = { "AVAILABLE": "info", "DELIVERING": "success", "OFFLINE": "danger", "RETURNING": "info" }


    return (
        <div class="card">
            <img src={avatar} alt="Avatar"></img>
            <p class="emp-code">{profileData.driverCode}</p>
            <br />
            <p>{profileData.firstName + ' ' + profileData.lastName}</p>
            <br />
            <div class="card-2">
                <div>
                    <p>📞</p>
                    <p>{profileData.phone}</p>
                </div>
                <div>
                    <p>✉️</p>
                    <p>{profileData.email}</p>
                </div>
                <div>
                    <p>🇦🇪</p>
                    <p>{profileData.emiratesId}</p>
                </div>
            </div>
            <br />
            <span class={'label ' + statusStyles[profileData.status]}>{profileData.status}</span>
        </div>
    )
}

export default ProfileCard