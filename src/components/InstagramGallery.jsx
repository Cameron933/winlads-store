import React from 'react'
import { InstagramGallery } from "instagram-gallery";

const InstagramGalleryViewer = () => {
    return (
        <div>
            <InstagramGallery accessToken="accessToken" count={8} pagination={true}/>
        </div>
    )
}

export default InstagramGalleryViewer