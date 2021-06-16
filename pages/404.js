import React from 'react';

const NotFoundPage = (props) => {
    return (
        <div className="bg">
            <h1>
                404
            </h1>
            <style jsx>{`
                .bg{
                    background: no-repeat center center;
                    background-color: gray;
                    background-attachment: scroll;
                    background-size: cover;
                    background-image: url(/images/bg.jpeg);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position:absolute;
                    top:0;
                    left:0;
                    right:0;
                    bottom:0;
                    z-index:-1;
                }
                h1{
                    font-size:85px;
                    color:#fff;
                }
                
            `}
            </style>
        </div>
    )

}

NotFoundPage.layout = "noHeader"

export default NotFoundPage;