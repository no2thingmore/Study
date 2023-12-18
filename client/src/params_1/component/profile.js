import React from "react";
import { useParams } from "react-router-dom";

const profileData={
    profileName: {
        name: '아무개',
        description: '아무렇게나 사는 아무개'
    },
    homer:{
        name: '호머 심슨',
        description: '심슨 가족에 나오는 아빠 역할 캐릭터'
    },
    umm: {
        name: '엄준식',
        description: '어떻게 이름이 ㅋㅋ 엄준식'
    }
}
function Profile({match}) {
    const { username } = useParams();
    const profile = profileData[username]

    if (!profile) {
        return <div>없는 사람인데?</div>
    }
    return (
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>
                {profile.description}
            </p>
        </div>
    );
}

export default Profile;