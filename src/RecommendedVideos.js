import React from 'react'
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard 
                title="Become a Web Developer in 10 minutes"
                views="2.3M Views"
                timestamp="3 days ago"
                 channelImage="https://avatars.githubusercontent.com/u/24712956?v=4"
                 channel="Sonny Sangha"
                 image="https://i.ytimg.com/vi/UaB_FtsdlYk/maxresdefault.jpg"
                />
                <VideoCard
                   title="Whether we like it or not"
                   views="2M Views"
                   timestamp="4 days ago"
                   channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFG_rWquS9AkDprDnb8FxVkqzyF5bd3gQYgw&usqp=CAU"
                   channel="Christian Guzman"
                   image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc1LY4Oqg6RNw74IU2V8CFiWdmIcJ6lbgrJQ&usqp=CAU"
                />
                <VideoCard
                title="5 Uses for cloud functions!"
                views="850k views"
                timestamp="1 day ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwni6auGZNOFo5PfYQUwW4mLmCMRJ1sHXqApbh_fwYw=s900-c-k-c0x00ffffff-no-rj"
                channel="Firebase"
                image="https://i.ytimg.com/vi/77XmRDtOL7c/maxresdefault.jpg"
                 />
                <VideoCard 
                title="The Truth about OnePlus Nord!"
                views="5M Views"
                timestamp="58 minutes ago"
                channelImage="https://i.ytimg.com/vi/lM3jtRAwJlM/maxresdefault.jpg"
                channel="Marques Brownlee"
                image="https://i.ytimg.com/vi/Xzh8BdaaAvs/maxresdefault.jpg"
                />
                <VideoCard
                title="Elon Musk says Teslas are too expensive!"
                views="1.2M Views"
                timestamp="3 days ago"
                channelImage="https://avatars.githubusercontent.com/u/24712956?v=4"
                channel="Sonny Sangha"
                image="https://i.ytimg.com/vi/ZMsDib3wfuY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9Wei5mn2iCrSIFFQCRfarGe6gBA"
                />
                <VideoCard
                title="Top 10 React Projects for Resume!"
                views="900k views"
                timestamp="2 days ago"
                channelImage="https://avatars.githubusercontent.com/u/24712956?v=4"
                channel="Sonny Sangha"
                image="https://i.ytimg.com/vi/B-kxUMHBxNo/maxresdefault.jpg"
                 />
                <VideoCard 
                title="Let's build LinkedIn with React.js!"
                views="2M views"
                timestamp="1 month ago"
                channelImage="https://avatars.githubusercontent.com/u/24712956?v=4"
                channel="Sonny Sangha"
                image="https://i.ytimg.com/vi/QaYts9sPmcY/maxresdefault.jpg"
                />
                <VideoCard 
                title="Let's build LinkedIn with React.js!"
                views="2M views"
                timestamp="1 month ago"
                channelImage="https://avatars.githubusercontent.com/u/24712956?v=4"
                channel="Sonny Sangha"
                image="https://i.ytimg.com/vi/QaYts9sPmcY/maxresdefault.jpg"
                />
            </div>
        </div>
    )
}

export default RecommendedVideos
